export default (response, reqquest, next) => {
    next({ error: 'Not found', status: 404 });
};