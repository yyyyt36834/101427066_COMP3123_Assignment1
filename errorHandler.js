const errorHandler = (err, req, res, next) => {
    const errorObj = {
        message: 'something went wrong',
        status: err.status || 500,
        err: err.message
    }
    res.status(500).send(errorObj);
}
module.exports = errorHandler ;  