import express from 'express';
import jwt from 'jsonwebtoken';
import Submission from '../models/Submission.js';

const router = express.Router();

// JWT middleware for admin authentication
const authenticateAdmin = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({
      success: false,
      error: 'Access denied',
      message: 'No token provided',
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      error: 'Invalid token',
      message: 'Please login again',
    });
  }
};

// POST /api/admin/login - Admin login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // Simple admin credentials (in production, use proper user management)
    const adminUsername = process.env.ADMIN_USERNAME || 'admin';
    const adminPassword = process.env.ADMIN_PASSWORD || 'zevro2024';
    
    if (username !== adminUsername || password !== adminPassword) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials',
        message: 'Username or password is incorrect',
      });
    }

    const token = jwt.sign(
      { username, role: 'admin' },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      token,
      expiresIn: '24h',
    });

  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: 'Unable to process login',
    });
  }
});

// GET /api/admin/submissions - Get all submissions with pagination and filters
router.get('/submissions', authenticateAdmin, async (req, res) => {
  try {
    const {
      page = 1,
      limit = 20,
      enquiryType,
      status,
      search,
      sortBy = 'createdAt',
      sortOrder = 'desc',
    } = req.query;

    // Build filter object
    const filter = {};
    if (enquiryType) filter.enquiryType = enquiryType;
    if (status) filter.status = status;
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { city: { $regex: search, $options: 'i' } },
        { message: { $regex: search, $options: 'i' } },
      ];
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    const sortOptions = { [sortBy]: sortOrder === 'desc' ? -1 : 1 };

    // Get submissions with pagination
    const submissions = await Submission.find(filter)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit))
      .select('-__v');

    // Get total count for pagination
    const totalSubmissions = await Submission.countDocuments(filter);
    const totalPages = Math.ceil(totalSubmissions / parseInt(limit));

    // Get statistics
    const stats = await Submission.aggregate([
      {
        $group: {
          _id: '$enquiryType',
          count: { $sum: 1 },
        },
      },
    ]);

    res.json({
      success: true,
      data: {
        submissions,
        pagination: {
          currentPage: parseInt(page),
          totalPages,
          totalSubmissions,
          hasNextPage: parseInt(page) < totalPages,
          hasPrevPage: parseInt(page) > 1,
        },
        statistics: stats,
      },
    });

  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: 'Unable to fetch submissions',
    });
  }
});

// PUT /api/admin/submissions/:id - Update submission status
router.put('/submissions/:id', authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { status, notes, followUpDate, assignedTo } = req.body;

    const submission = await Submission.findByIdAndUpdate(
      id,
      { status, notes, followUpDate, assignedTo },
      { new: true, runValidators: true }
    );

    if (!submission) {
      return res.status(404).json({
        success: false,
        error: 'Not found',
        message: 'Submission not found',
      });
    }

    res.json({
      success: true,
      message: 'Submission updated successfully',
      data: submission,
    });

  } catch (error) {
    console.error('Update submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: 'Unable to update submission',
    });
  }
});

// GET /api/admin/submissions/export - Export submissions as CSV
router.get('/submissions/export', authenticateAdmin, async (req, res) => {
  try {
    const { enquiryType, status, startDate, endDate } = req.query;

    // Build filter object
    const filter = {};
    if (enquiryType) filter.enquiryType = enquiryType;
    if (status) filter.status = status;
    if (startDate || endDate) {
      filter.createdAt = {};
      if (startDate) filter.createdAt.$gte = new Date(startDate);
      if (endDate) filter.createdAt.$lte = new Date(endDate);
    }

    const submissions = await Submission.find(filter).sort({ createdAt: -1 });

    // Convert to CSV
    const csvHeader = 'Name,Email,Phone,City,Enquiry Type,Message,Status,Created At,IP,User Agent\n';
    const csvRows = submissions.map(sub => {
      return [
        `"${sub.name}"`,
        `"${sub.email}"`,
        `"${sub.phone}"`,
        `"${sub.city}"`,
        `"${sub.enquiryType}"`,
        `"${sub.message.replace(/"/g, '""')}"`,
        `"${sub.status}"`,
        `"${sub.createdAt.toISOString()}"`,
        `"${sub.ip || ''}"`,
        `"${sub.userAgent || ''}"`,
      ].join(',');
    }).join('\n');

    const csv = csvHeader + csvRows;

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', `attachment; filename=zevro-submissions-${new Date().toISOString().split('T')[0]}.csv`);
    res.send(csv);

  } catch (error) {
    console.error('Export submissions error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error',
      message: 'Unable to export submissions',
    });
  }
});

export default router;
