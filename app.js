const express = require('express');
const morgan = require("morgan");



const app = express();

// Connect to MongoDB
const dbURL = 'mongodb+srv://devadedeji:adedejimayowa9233@blogs.mqsv8.mongodb.net/?retryWrites=true&w=majority'

// Register view engines
app.set('view engine', 'ejs');

// Listen for request
app.listen(3000);

app.use(morgan('dev'));

// Middleware and static files
app.use(express.static('public'))



app.get('/', (req,res)=>{
    const blogs = [
        {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
        {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
      ];
    res.render('index', {title: 'Home', blogs});
})

app.get('/about', (req,res)=>{
    res.render('about', {title: 'About'});
})

app.get('/blog/create', (req,res)=>{
    res.render('create', {title: 'Create a new blog'});
})

// app.get('/about-us', (req,res)=>{
//     res.redirect('/about')
// })

// 404 Page
app.use((req,res)=>{
    res.render('404', {title: '404 page'});
})

