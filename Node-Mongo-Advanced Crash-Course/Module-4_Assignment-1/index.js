const express = require('express');
const user = require('./routers/user.route');

const app = express();

// all route 
app.use('/user', user);

app.listen(8000, ()=>{
    console.log('server is running')
});