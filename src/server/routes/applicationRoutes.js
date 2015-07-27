import express from 'express';
import sessionMiddleware from '../middleware/sessionMiddleware';

let router = express.Router();

router.use(sessionMiddleware);

router.get('/', (req, res) => {
  res.render('application');
});

export default router;
