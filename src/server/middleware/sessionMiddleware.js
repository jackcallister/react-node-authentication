export default function(req, res, next) {
  const cookie = req.cookies.token;

  if (cookie === undefined) {
    res.redirect('/sessions/new');
  } else {
    next();
  }
}
