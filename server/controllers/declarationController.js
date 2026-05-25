const Declaration = require('../models/Declaration');

// @desc Upload a new declaration (admin)
// @route POST /api/declarations
// @access private (admin)
exports.uploadDeclaration = async (req, res) => {
  try {
    const { title } = req.body;
    const file = req.file;

    if (!title || !title.trim()) {
      return res.status(400).json({ success: false, message: 'title is required' });
    }
    if (!file) {
      return res.status(400).json({ success: false, message: 'PDF file is required' });
    }

    const doc = await Declaration.create({
      title: title.trim(),
      pdf: {
        originalname: file.originalname,
        filename: file.filename,
        path: {
          mimetype: file.mimetype,
          size: file.size,
        },
      },
      submittedAt: new Date(),
    });

    return res.json({ success: true, data: doc });
  } catch (err) {
    console.error('uploadDeclaration error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

// @desc Get all declarations
// @route GET /api/declarations
// @access public
exports.getDeclarations = async (req, res) => {
  try {
    const declarations = await Declaration.find({})
      .sort({ submittedAt: -1 })
      .lean();

    const data = declarations.map((d) => ({
      _id: d._id,
      title: d.title,
      date: d.submittedAt,
      pdf: d.pdf?.filename ? `/uploads/${d.pdf.filename}` : '',
    }));

    return res.json({ success: true, data });
  } catch (err) {
    console.error('getDeclarations error:', err);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};

