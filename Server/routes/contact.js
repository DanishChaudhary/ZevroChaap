import express from 'express';
import { body, validationResult } from 'express-validator';
import rateLimit from 'express-rate-limit';
import Submission from '../models/Submission.js';

const router = express.Router();

// Rate limiting for contact form submissions
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 submissions per windowMs
  message: {
    error: 'Too many submissions',
    message: 'Please wait before submitting another form.',
  },
});

// Validation middleware
const validateSubmission = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('Name must be between 2 and 100 characters')
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage('Name can only contain letters and spaces'),
  
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email address'),
  
  body('phone')
    .trim()
    .matches(/^[\+]?[1-9][\d]{0,15}$/)
    .withMessage('Please provide a valid phone number'),
  
  body('city')
    .trim()
    .isLength({ min: 2, max: 100 })
    .withMessage('City must be between 2 and 100 characters'),
  
  body('enquiryType')
    .isIn(['franchise', 'contact', 'general'])
    .withMessage('Invalid enquiry type'),
  
  body('message')
    .trim()
    .isLength({ min: 10, max: 1000 })
    .withMessage('Message must be between 10 and 1000 characters'),
];

// POST /api/contact - Submit contact form
router.post('/', contactLimiter, validateSubmission, async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors.array(),
      });
    }

    const {
      name,
      email,
      phone,
      city,
      enquiryType,
      message,
      utm = {},
    } = req.body;

    // Check for duplicate submission (same email within 24 hours)
    const existingSubmission = await Submission.findOne({
      email,
      createdAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) },
    });

    if (existingSubmission) {
      return res.status(409).json({
        success: false,
        error: 'Duplicate submission',
        message: 'You have already submitted a form in the last 24 hours.',
      });
    }

    // Create new submission
    const submission = new Submission({
      name,
      email,
      phone,
      city,
      enquiryType,
      message,
      utm,
      ip: req.ip || req.connection.remoteAddress,
      userAgent: req.get('User-Agent'),
    });

    await submission.save();

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Form submitted successfully! We will contact you soon.',
      submissionId: submission._id,
      whatsappConfig: {
        number: process.env.WHATSAPP_NUMBER,
        defaultMessage: process.env.WHATSAPP_DEFAULT_MSG,
      },
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    // Handle specific MongoDB errors
    if (error.code === 11000) {
      return res.status(409).json({
        success: false,
        error: 'Duplicate entry',
        message: 'This email has already been submitted.',
      });
    }

    res.status(500).json({
      success: false,
      error: 'Server error',
      message: 'Unable to process your submission. Please try again later.',
    });
  }
});

// GET /api/contact/config - Get WhatsApp configuration
router.get('/config', (req, res) => {
  res.json({
    success: true,
    whatsappConfig: {
      number: process.env.WHATSAPP_NUMBER,
      defaultMessage: process.env.WHATSAPP_DEFAULT_MSG,
    },
  });
});

export default router;
