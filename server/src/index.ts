import express    from "express"
import helmet     from "helmet"
import bodyParser from "body-parser"
import cors       from "cors"
import morgan     from "morgan"

const app  = express()
const port = 8080

// temporary solution
let dataBase: {} = []

app.use(helmet())
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

app.get("/", (req, res)=>{
  res.send( dataBase )
})

app.listen(port, ()=>{
  console.log( `server started at http://localhost:${ port }` );
  
})