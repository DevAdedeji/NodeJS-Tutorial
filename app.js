const express = require('express');

const app = express();

// Register view engines
app.set('view engine', 'ejs');



app.get('/', (req,res)=>{
    res.render('index');
})

app.get('/about', (req,res)=>{
    res.render('about');
})

app.get('/blog/create', (req,res)=>{
    res.render('create');
})

// app.get('/about-us', (req,res)=>{
//     res.redirect('/about')
// })

// 404 Page
app.use((req,res)=>{
    res.render('404');
})

// Listen for request
app.listen(3000);