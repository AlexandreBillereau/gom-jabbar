import express from "express";

const app  = express()
const port = 8080

app.get("/", (req, res)=>{
  res.send( "<h1>Yata</h1>" )
})

app.listen(port, ()=>{
  console.log( `server started at http://localhost:${ port }` );
  
})