import express from 'express';
import { createSession } from '../webUtils/sessionWebUtils';

let router = express.Router();

router.get('/new', (req, res) => {
  res.render('session');
});

router.post('/', (req, res) => {
  createSession(req.body).then((response) => {
    const token = response.token;
    const opts = { maxAge: 900000, httpOnly: false };

    res.cookie('token', token, opts);
    res.redirect('/');
  }).catch((error) => {
    res.redirect('/sessions/new');
  });
})

export default router;
