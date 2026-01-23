const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('pages/home', { data: {} });
});

router.get('/product/:slug', (req, res) => {
  res.render('pages/product', { data: { slug: req.params.slug } });
});

router.get('/sport/:slug', (req, res) => {
  res.render('pages/sport', { data: { slug: req.params.slug } });
});

router.get('/user/:slug', (req, res) => {
  res.render('pages/user', { data: { slug: req.params.slug } });
});

router.use((req, res) => {
  res.status(404).render('pages/404', { data: {} });
});

module.exports = router;
