import express from 'express'

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended : true}))

app.get('/', (req, res)=>{
    res.send('hi')
});

app.listen(3001, (()=>{
    console.log("app is listen on port 3001")
}))