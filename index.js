const express = require('express');
const userRouter = require('./routes/user.routes');
const PORT = 8080;
const app = express();

app.get('/', (req, res) =>{
  res.send('HELLO ^v^')
})

app.use(express.json());

app.use('/api', userRouter);

app.listen(PORT, () => console.log(`SERVER STARTED ON PORT ${PORT}`));