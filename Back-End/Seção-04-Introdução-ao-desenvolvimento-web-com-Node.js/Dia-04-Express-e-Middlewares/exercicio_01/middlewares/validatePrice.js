module.exports = (req, res, next) => {
    const { price } = req.body;
    const KEY_PRICE = 0;

    if (price === undefined) {
        return res.status(400).json({
            message: 'O campo price é obrigatório!'
        })
    };

    if (price < KEY_PRICE || typeof price !== 'number') {
        return res.status(400).json({
            message: 'O campo price deve ser um número maior ou igual a zero!'
        })
    };

    next();
};