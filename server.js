var express = require('express');
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyparser = require('body-parser')
const env = require('dotenv');
var app = express();


//set  static folder 

app.use(express.static(path.join(__dirname, './navbar-app')))
app.use(express.static(path.join(__dirname, './front movies')))

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())
app.use(cors())
env.config()
    //connect to the data base
    //resuire route
app.set('navbar-app', 'ejs')
const auth = require('./src/routes/route')
const authadmin = require('./src/routes/admin_route')
const categoryRoutes = require('./src/routes/R_categories')

mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.rfqp4.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("connected");
});



app.get('/signin', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/login.html'))

})
app.get('/signup', (req, res) => {
    res.sendFile(path.resolve(__dirname, './navbar-app/signup.html'))
})
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './front movies/films.html'))
})
app.use('/', auth)
app.use('/', categoryRoutes);
app.use('/', authadmin)

app.listen(process.env.PORT, () => {
    console.log(`server is running in port ${process.env.PORT}`)
})