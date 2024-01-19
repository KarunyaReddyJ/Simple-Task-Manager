const express = require('express');
const path = require('path');
const app = express();
const port=3000
const router=require('./routes/home-router')
app.use(express.static(path.join(__dirname, '../public')));


app.use('/',router)
app.use((req,res)=>{
    res.status(404).send('<h1>404 Not Found</h1>')
})
app.listen(port, () => {
    console.log(`Server started on ${port}`);
});
