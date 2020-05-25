/* Importando express, nunjucks e importando servidor */
const express = require('express')
const nunjucks = require('nunjucks')
const server = express()
const routes = require('./routes')
const methodOverride = require('method-override')

/* Configurando requisições PUT e DELETE */
server.use(methodOverride('_method'))

/* Configurando o servidor para utilizar a pasta public */
server.use(express.static('public'))

/* Chamando o express que recebera os dados do campo form*/
server.use(express.urlencoded({extended:true}))


/* Chamando a variavel que armazena a pasta de rotas */ 
server.use(routes)

/* Configurando a view engine nunjucks */
server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

/* Configurando o servidor para escutar a chamada */
server.listen(5000, function(){
    console.log('server is running')
})