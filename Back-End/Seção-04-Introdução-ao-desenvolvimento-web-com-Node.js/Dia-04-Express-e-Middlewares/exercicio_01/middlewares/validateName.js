module.exports = (req, res, next) => {
    const { name } = req.body;
    const NAME_LENGTH = 4;

    if (!name) {
        return res.status(400).json({ message: 'O campo name é obrigatório!' })
    };

    if (name.length < NAME_LENGTH) {
        return res.status(400).json({
            message: 'O campo name deve ter pelo menos 4 caracteres!'
        })
    };

    next();
};