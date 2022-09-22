const express = require('express')
const session = require('express-session');
const connection = require('../src/database/connectionDB');


const {v4: uuid} = require('uuid')
const path = require('path')
const cadastroRouter = require('./routes/cadastro.routes')
const homeRouter = require('./routes/home.routes')
const loginRouter = require('./routes/login.routes')
const perfilRouter = require('./routes/perfil.routes')
const resultadosRouter = require('./routes/resultados.routes')
const estatisticasRouter = require('./routes/estatisticas.routes')
const partidaRouter = require('./routes/partida.routes')
const methodOverride = require('method-override');
const logoutRouter = require('./routes/logout.routes');

const app = express()


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connection
    .authenticated()
    .then(() =>{
        console.log("Sucesso ao se conectar ao banco");
    }).catch((error) =>{
        console.log("Erro ao se conectar ao banco");
    })


app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: uuid()
}))

app.use('/', homeRouter)
app.use('/', estatisticasRouter)
app.use('/', resultadosRouter)
app.use('/', perfilRouter)
app.use('/', loginRouter)
app.use('/', cadastroRouter)
app.use('/', partidaRouter)
app.use('/', logoutRouter)


app.use(methodOverride('_method'))

app.listen(2022, ()=>{
    console.log('Server rodando') 
})