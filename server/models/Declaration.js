const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema(
  {
    originalname: { type: String, required: true },
    filename: { type: String, required: true },
    path: {
      mimetype: { type: String, required: true },
      size: { type: Number, required: true },
    },
  },
  { _id: false }
);

const DeclarationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    pdf: {
      originalname: { type: String, required: true },
      filename: { type: String, required: true },
      path: {
        mimetype: { type: String, required: true },
        size: { type: Number, required: true },
      },
    },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Declaration', DeclarationSchema);

