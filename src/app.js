const express = require('express')
const session = require('express-session');
const { v4: uuid } = require('uuid')
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
// const team = require('./database/models/team');
const { coach } = require('./database');
const { championship } = require('./database');
const { team } = require('./database');

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
//app.use(express.static('./public'))
app.use(express.static(path.join(__dirname, "../public")))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: uuid()
}))

app.post('/teste', async (request, response) => {
    const teamCreated = await team.create({
        name: 'brasil',
        abbreviation: 'bra',
        flag: ""
    });

    response.json(teamCreated)
});

app.use('/', homeRouter)
app.use('/', estatisticasRouter)
app.use('/', resultadosRouter)
app.use('/', perfilRouter)
app.use('/', loginRouter)
app.use('/', cadastroRouter)
app.use('/', partidaRouter)
app.use('/', logoutRouter)


app.use(methodOverride('_method'))

app.listen(2022, () => {
    console.log('Server rodando')
})