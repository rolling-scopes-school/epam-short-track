export const addOffsetAndLimit = (req, res, next) => {
  req.query.offset = parseInt(req.query.offset, 10) || 0;
  req.query.limit = parseInt(req.query.limit, 10) || 10;

  next();
};
