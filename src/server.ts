import express, { response } from "express"

const app = express()

app.get("/test", (req, res) =>{

 res.send("coé negao")
})

app.post("/test-post", (req, res) =>{
    res.send("metodo post")
})

app.listen(3000, () => console.log('server esta rodando'))