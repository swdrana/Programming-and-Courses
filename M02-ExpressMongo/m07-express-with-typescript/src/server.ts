import express from 'express';
const app = express()

app.get('/',(req:Request, res:Response)=>{
    res.json({success:true, data:"Get From Server"})
})

app.listen(8000,()=>{
    console.log('Server Connected')
})