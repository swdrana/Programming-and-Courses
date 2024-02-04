const express = require('express');
const fs = require('fs');
const { userRoute } = require('./routers/user.route');
const app = express();

app.use(express.json());
app.use('/user',userRoute)
app.get('/',(req,res)=>{
    res.send({
        "status":200,
        "success":true,
        "title":"ACC Node Mongo | swdrana | assignment 01"
        "message":"Server is Running",
        "apis":[
            "direct-api":[
                'https://acc-nodejs-a1.vercel.app/user/all',
                'https://acc-nodejs-a1.vercel.app/user/all?limit=3'
            ]
            "require-body-data":[
                'https://acc-nodejs-a1.vercel.app/user/save',
                'https://acc-nodejs-a1.vercel.app/user/update/1',
                'https://acc-nodejs-a1.vercel.app/user/bulk-update',
                'https://acc-nodejs-a1.vercel.app/user/delete'
            ]
        ]
    })
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });
  
  const server = app.listen(8080, () => {
    console.log('Server is running on port 8080');
  });
  
  process.on('SIGTERM', () => {
    console.log('Received SIGTERM. Closing server...');
    server.close(() => {
      console.log('Server closed. Exiting process.');
      process.exit(0);
    });
  });
  