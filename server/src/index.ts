import express    from "express"
import helmet     from "helmet"
import bodyParser from "body-parser"
import Validator  from "jsonschema"
import {signalOfHumanSchema} from "./model/signal"

const app  = express()
const port = 8080
const validator = new Validator.Validator()


interface HumainLocation {lng : number; lat: number, trash_level: number, excitement_level: number};
// temporary solution
const tableSignal: HumainLocation[] = []

app.use(helmet())
app.use(bodyParser.json())

app.get("/", (req, res)=>{
  res.send( tableSignal )
})

app.post("/signal", (req, res) => {
  const result = validator.validate(req.body, signalOfHumanSchema)

  if(!result.valid){
    res.send(result.errors)
  }
  res.send("yata")
  tableSignal.push(req.body)
})

app.listen(port, ()=>{
  console.log( `server started at http://localhost:${ port }` );
})