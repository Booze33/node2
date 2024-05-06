const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('Hello Cookie woggie');
})

app.get('/set-cookie', (req, res) => {
//  res.setHeader('set-cookie', 'foo=bar');
  res.cookie('foo2', 'bar2', {
    //expires: new Date('26 July 2021')
    //httpOnly: true,
    secure: true,
  })
  res.send('Cookie are set foo=bar');
})

app.get('/get-cookie', (req, res) => {
  console.log(req.cookies);
  res.send(req.cookies)
})

app.get('/del-cookie', (req, res) => {
  res.clearCookie('fizz');
  res.send('Cookie has been deleted')
})

app.listen(3000, () => console.log('Cookie on port 3000'))