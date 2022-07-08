const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const config = require('config')

app.get('/', (req, res)=>{
    res.send('Hello from homepage.')
})

app.get('/status', (req, res)=>{
    res.status(200)
    res.send('Okay')
})

app.get('/hello',(req, res)=>{
    res.status(200)
    res.send('Hiiiiiii')

})

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`);
})