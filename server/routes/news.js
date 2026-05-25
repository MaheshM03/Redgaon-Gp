const express = require('express');

const router = express.Router();

const {
  getNews,
  createNews,
  updateNews,
  deleteNews,
  getNewsById,
  deleteAllNews
} = require('../controllers/newsController');

router.get('/', getNews);

router.get('/:id', getNewsById);

router.post('/', createNews);

router.put('/:id', updateNews);

router.delete('/:id', deleteNews);

router.delete('/', deleteAllNews);

module.exports = router;