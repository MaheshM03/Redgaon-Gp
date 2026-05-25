const News = require("../models/News");

/* ================= GET ALL NEWS ================= */

const getNews = async (req, res) => {

  try {

    let {
      page = 1,
      limit = 10,
      category
    } = req.query;

    page = parseInt(page);

    limit = parseInt(limit);

    const skip =
      (page - 1) * limit;

    const query =
      category
        ? { category }
        : {};

    const [news, total] =
      await Promise.all([

        News.find(query)
          .sort({ createdAt: -1 })
          .limit(limit)
          .skip(skip),

        News.countDocuments(query)

      ]);

    /* NORMALIZE DATA */

    const normalized = news.map((n) => ({
      _id: n._id,

      title: n.title,

      category: n.category,

      date:
        n.date instanceof Date
          ? n.date
              .toISOString()
              .split("T")[0]
          : n.date,

      description:
        n.excerpt ||
        n.description ||
        n.content ||
        "",

      excerpt:
        n.excerpt || "",

      content:
        n.content || "",

      image:
        n.imageUrl ||
        n.image ||
        null,

      imageUrl:
        n.imageUrl ||
        n.image ||
        null,
    }));

    res.json({
      success: true,

      count: normalized.length,

      total,

      page,

      pages:
        Math.ceil(total / limit),

      data: normalized,
    });

  } catch (error) {

    console.error(
      "Get news error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================= CREATE NEWS ================= */

const createNews = async (
  req,
  res
) => {

  try {

    const savedNews =
      await new News(
        req.body
      ).save();

    res.status(201).json({
      success: true,
      data: savedNews,
    });

  } catch (error) {

    console.error(
      "Create news error:",
      error
    );

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= UPDATE NEWS ================= */

const updateNews = async (
  req,
  res
) => {

  try {

    const updated =
      await News.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    if (!updated) {

      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.json({
      success: true,
      data: updated,
    });

  } catch (error) {

    console.error(
      "Update news error:",
      error
    );

    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/* ================= DELETE NEWS ================= */

const deleteNews = async (
  req,
  res
) => {

  try {

    const deleted =
      await News.findByIdAndDelete(
        req.params.id
      );

    if (!deleted) {

      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    res.json({
      success: true,
      message: "News deleted",
    });

  } catch (error) {

    console.error(
      "Delete news error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================= GET SINGLE NEWS ================= */

const getNewsById = async (
  req,
  res
) => {

  try {

    const news =
      await News.findById(
        req.params.id
      );

    if (!news) {

      return res.status(404).json({
        success: false,
        message: "News not found",
      });
    }

    const normalized = {
      _id: news._id,

      title: news.title,

      category: news.category,

      date:
        news.date instanceof Date
          ? news.date
              .toISOString()
              .split("T")[0]
          : news.date,

      description:
        news.excerpt ||
        news.description ||
        news.content ||
        "",

      excerpt:
        news.excerpt || "",

      content:
        news.content || "",

      image:
        news.imageUrl ||
        news.image ||
        null,

      imageUrl:
        news.imageUrl ||
        news.image ||
        null,
    };

    res.json({
      success: true,
      data: normalized,
    });

  } catch (error) {

    console.error(
      "Get news by id error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================= DELETE ALL NEWS ================= */

const deleteAllNews = async (
  req,
  res
) => {

  try {

    const result =
      await News.deleteMany({});

    res.json({
      success: true,
      message:
        "All news deleted",

      deletedCount:
        result.deletedCount || 0,
    });

  } catch (error) {

    console.error(
      "Delete all news error:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

/* ================= EXPORTS ================= */

module.exports = {
  getNews,
  createNews,
  updateNews,
  deleteNews,
  getNewsById,
  deleteAllNews,
};