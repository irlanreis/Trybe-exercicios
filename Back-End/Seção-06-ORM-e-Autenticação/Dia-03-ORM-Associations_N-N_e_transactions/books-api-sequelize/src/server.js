const app = require('./app');
require('./config/config');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));

