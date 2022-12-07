const express = require('express');
const morgan = require("morgan");
const mongoose = require('mongoose');

const blogRoutes = require('./routes/blogRoutes')


const app = express();

// Connect to MongoDB
const dbURL = 'mongodb+srv://devadedeji:adedejimayowa9233@blogs.mqsv8.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', true)
mongoose.connect(dbURL)
.then(result=>{
    console.log("Connected to Db")
    // Listen for request
    app.listen(3000);
})
.catch(err=>{
    console.log(err)
})

// Register view engines
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'));

// Middleware and static files
app.use(express.static('public'))



app.get('/', (req,res)=>{
   res.redirect('/blogs')
})

app.get('/about', (req,res)=>{
    res.render('about', {title: 'About'});
})

// Log routes
app.use('/blogs',blogRoutes)


// 404 Page
app.use((req,res)=>{
    res.render('404', {title: '404 page'});
})

