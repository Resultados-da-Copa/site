const express = require('express')
const path = require('path')
const cadastroRouter = require('./routes/cadastro.routes')
const homeRouter = require('./routes/home.routes')
const loginRouter = require('./routes/login.routes')
const perfilRouter = require('./routes/perfil.routes')
const resultadosRouter = require('./routes/resultados.routes')
const statsRouter = require('./routes/stats.routes')

const app = express()

app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/', homeRouter)
app.use('/', statsRouter)
app.use('/', resultadosRouter)
app.use('/', perfilRouter)
app.use('/', loginRouter)
app.use('/', cadastroRouter)

app.listen(2022, ()=>{
    console.log('rodando 1')

    
})