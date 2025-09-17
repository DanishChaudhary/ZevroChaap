import mongoose from 'mongoose';

const submissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
    match: [/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
    trim: true,
    maxlength: [100, 'City name cannot exceed 100 characters'],
  },
  enquiryType: {
    type: String,
    required: [true, 'Enquiry type is required'],
    enum: {
      values: ['franchise', 'contact', 'general'],
      message: 'Enquiry type must be either franchise, contact, or general',
    },
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [1000, 'Message cannot exceed 1000 characters'],
  },
  utm: {
    source: { type: String, trim: true },
    medium: { type: String, trim: true },
    campaign: { type: String, trim: true },
    term: { type: String, trim: true },
    content: { type: String, trim: true },
  },
  ip: {
    type: String,
    trim: true,
  },
  userAgent: {
    type: String,
    trim: true,
  },
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'converted', 'closed'],
    default: 'new',
  },
  notes: {
    type: String,
    trim: true,
    maxlength: [2000, 'Notes cannot exceed 2000 characters'],
  },
  followUpDate: {
    type: Date,
  },
  assignedTo: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
});

// Indexes for better query performance
submissionSchema.index({ email: 1 });
submissionSchema.index({ enquiryType: 1 });
submissionSchema.index({ createdAt: -1 });
submissionSchema.index({ status: 1 });

// Virtual for formatted creation date
submissionSchema.virtual('formattedDate').get(function() {
  return this.createdAt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
});

// Pre-save middleware to sanitize data
submissionSchema.pre('save', function(next) {
  // Remove any HTML tags from text fields
  if (this.name) this.name = this.name.replace(/<[^>]*>/g, '');
  if (this.message) this.message = this.message.replace(/<[^>]*>/g, '');
  if (this.city) this.city = this.city.replace(/<[^>]*>/g, '');
  
  next();
});

const Submission = mongoose.model('Submission', submissionSchema);

export default Submission;
