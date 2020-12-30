const { getIpAddress } = require('./utils.js')
const ipAddress = getIpAddress()

const PORT = 8010

const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const {authenticate} = require("./authenticate")
const app = express()


app.get('/' ,(request,response) => {
    console.log(`ImageStorage: REST API on IP address ${ipAddress} - GET / ...`)
    response.send(`ImageStorage: REST API on IP address ${ipAddress} - GET /`)
  })

app.use('/images', express.static('images'))

app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))


//TODO: Fix authentication for tastebudsdelight app
app.post("/image", /*authenticate,*/ (request, response) => {
  var name = request.body.name
  console.log(`POST /image name = ${name}`)
  var image = request.body.image
  var realFile = Buffer.from(image,"base64")
  fs.writeFile(`images/${name}`, realFile, (error) => {
      if(error) {
        console.log(error)
        response.status(400).send()
      } else {
        console.log("OK")
        response.send("OK")
      }       
   })
 })

app.listen(PORT, () => {
    console.log(`ImageStorage, running on IP address ${ipAddress}, listening on port ${PORT}.`)
})
