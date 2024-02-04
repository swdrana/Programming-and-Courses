const express = require('express');
const fs = require('fs');
const { userRoute } = require('./routers/user.route');
const app = express();

app.use(express.json());
app.use('/user',userRoute)
app.get('/',(req,res)=>{
    res.send(fs.readFileSync('./data/userData.json'))
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
  