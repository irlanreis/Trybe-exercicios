module.exports = (req, res, next) => {
    const { createAt } = req.body.description;

    const isFormateDate = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;

    if (!isFormateDate.test(createAt)) {
        return res.status(400).json({
            message: 'O campo createdAt deve ter o formato \'dd/mm/yyyy\''
        });
    };

    next();
}