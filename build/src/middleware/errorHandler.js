export const errorMiddleware = (error, request, response, next) => {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";
    response.status(status).send({
        message,
        status,
    });
};
//# sourceMappingURL=errorHandler.js.map