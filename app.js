require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');


// Servir contenido estático
app.use( express.static('public') );

// app.get('/hola-mundo', (req, res) => {
//   // res.send('Hola mundo en su respectiva ruta')
//   res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/', (req, res) => {
//   // res.send('Hola mundo en su respectiva ruta')
//   res.render('home', {
//     nombre: 'Gerardo Estrada',
//     titulo: 'Curso de Node'
//   });
// });

// app.get('/generic', (req, res) => {
//   // res.send('Hola mundo en su respectiva ruta')
//   res.render('generic', {
//     nombre: 'Gerardo Estrada',
//     titulo: 'Curso de Node'
//   });
// });

// app.get('/elements', (req, res) => {
//   // res.send('Hola mundo en su respectiva ruta')
//   res.render('elements', {
//     nombre: 'Gerardo Estrada',
//     titulo: 'Curso de Node'
//   });
// });

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(port , () => {
    console.log(`Example app listening at http://localhost:${port}`)
})