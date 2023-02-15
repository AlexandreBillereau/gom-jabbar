import express    from "express"
import helmet     from "helmet"
import bodyParser from "body-parser"
import Validator  from "jsonschema"
import {signalOfHumanSchema, humainSignaled} from "./model/signal"

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
    return
  }

  tableSignal.push(req.body)
  res.send("ok")
})

app.get("/presence", (req, res) => {
  const result = validator.validate(req.body, humainSignaled)
  if(!result.valid){
    res.send(result.errors)
    return
  }

  const instance = result.instance
  const positions = tableSignal.filter( el => {
    return el.lat === instance.lat && 
           el.lng === instance.lng
  })

  res.json({result: positions.length !== 0})

})

app.listen(port, ()=>{
  console.log( `server started at http://localhost:${ port }` );
})