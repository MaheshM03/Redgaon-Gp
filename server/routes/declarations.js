const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const authMiddleware = require('../middleware/auth');
const declarationController = require('../controllers/declarationController');

// Independent multer for declarations route (PDF only)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1e9) + path.extname(file.originalname);
    cb(null, uniqueName);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === 'application/pdf') return cb(null, true);
    return cb(new Error('Only PDF allowed'), false);
  },
});

// Public health/debug (verifies deployed route is mounted)
router.get('/health', (req, res) => {
  res.json({ ok: true });
});

// Public get
// Support both: /api/declarations and /api/declarations/
router.get('/', declarationController.getDeclarations);
router.get('', declarationController.getDeclarations);


// Admin upload
// Support both: /api/declarations and /api/declarations/
router.post('/', authMiddleware, upload.single('pdf'), declarationController.uploadDeclaration);
router.post('', authMiddleware, upload.single('pdf'), declarationController.uploadDeclaration);


module.exports = router;

