const express = require('express');
const path = require('path');
const cadastroRouter = require('./routes/cadastro.routes');
const homeRouter = require('./routes/home.routes');
const loginRouter = require('./routes/login.routes');
const perfilRouter = require('./routes/perfil.routes');
const resultadosRouter = require('./routes/resultados.routes');
const estatisticasRouter = require('./routes/estatisticas.routes');
const partidaRouter = require('./routes/partida.routes');

const logMiddleware = require('./middlewares/logSite');
const auth = require('./middlewares/auth');
const jsonparser = require('./middlewares/jsonParser');
const ValidationMiddleware = require('./middlewares/handleError');

const app = express();

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logMiddleware);
app.use(auth); 
app.use(bodyParser);
app.use(ValidationMiddleware);

app.use('/', homeRouter);
app.use('/', estatisticasRouter);
app.use('/', resultadosRouter);
app.use('/', perfilRouter);
app.use('/', loginRouter);
app.use('/', cadastroRouter);
app.use('/', partidaRouter);

app.listen(2022, ()=>{
    console.log('Server rodando')
})