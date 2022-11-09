function logErrors(err, req, res, next){
    console.log(err);
    res.json({
        message: err.message,
        stack: err.stack
    })
}
function boomErrorHandler(err, req, res, next) {
    if (err.isBoom) {
      const { output } = err;
      res.status(output.statusCode).json(output.payload);
    }
    next(err);
  }

module.exports = { boomErrorHandler, logErrors };