const express = require('express');
const router = express.Router();
const { getAllDocuments, adminHealth } = require('../controllers/adminController');

// @route GET /api/admin/health
// @desc Basic admin health (admin only)
router.get('/health', adminHealth);

// @route GET /api/admin/certificates
// @desc Get all certificate documents (admin only)
router.get('/certificates', getAllDocuments);

module.exports = router;


