const logsRequest = (req, res, next) => {
    console.log('Terjadi Request ke PATH:', req.path);
    next();
}

module.exports = logsRequest;