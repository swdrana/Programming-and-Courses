const express = require('express');
const fs = require('fs');
const { userRoute } = require('./routers/user.route');
const app = express();

app.use(express.json());
app.use('/user',userRoute)
app.get('/',(req,res)=>{
    res.send(fs.readFileSync('./data/userData.json'))
})
app.listen(8080,()=>{
    console.log('server is running')
})