//importr dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

//iniciando express
const server = express();
server
//utilizar body do req
.use(express.urlencoded({extended: true}))
//utilizando os arquivos estticos
.use(express.static('public'))
//vonfigurar template engine
.set('views', path.join(__dirname, 'views'))
.set('view engine', 'hbs')
//criar rotas
//http://localhost:5400/?city=Sao%20Paulo
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

.get('/', (request, response)=>{
    return response.render('index')
})

//ligar o servidar
server.listen(5400)
