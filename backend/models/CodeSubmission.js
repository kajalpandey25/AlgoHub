const mongoose = require('mongoose');

const codeSubmissionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // Make sure it's an ObjectId type
    ref: 'User',  // Reference to the User collection
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

const CodeSubmission = mongoose.model('CodeSubmission', codeSubmissionSchema);

module.exports = CodeSubmission;
