const errorHandler = (errors, request, response, next) => {
    if (response.headersSent) {
        console.log('In here');
        return next(errors);
        
    }
    const {message, error, status} = errors;
    const errorResponse = {
        error: error || 'undefined',
        message: message || 'error',
        status: status || 500,
        timestamp : new Date()
    };
    response.status(errorResponse.status).json(errorResponse);
};
export default errorHandler;