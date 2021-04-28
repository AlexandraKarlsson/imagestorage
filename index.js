const { getIpAddress } = require('./utils.js')
const ipAddress = getIpAddress()

const PORT = 8010

const express = require("express")
const fs = require("fs")
const jimp = require('jimp')
const { authenticate } = require("./authenticate")
const app = express()


app.get('/', (request, response) => {
  console.log(`ImageStorage: REST API on IP address ${ipAddress} - GET / ...`)
  response.send(`ImageStorage: REST API on IP address ${ipAddress} - GET /`)
})

app.use('/images', express.static('images'))

const bodyAsJson = express.json()
const bodyAsUrlencoded = express.urlencoded({ extended: true, limit: "50mb" })


//TODO: Fix authentication for tastebudsdelight app
app.post("/image", bodyAsUrlencoded, /*authenticate,*/ (request, response) => {
  var name = request.body.name
  console.log(`POST /image name = ${name}`)
  var image = request.body.image
  var realFile = Buffer.from(image, "base64")
  var outputFile = `images/${name}`;
  var tempFile = `images/temp.jpg`;
  fs.writeFile(tempFile, realFile, (error) => {
    if (error) {
      console.log(error)
      response.status(400).send()
    } else {
      jimp.read(tempFile)
      .then(image => {
        image
          .resize(1000,jimp.AUTO)
          .quality(50)
          .write(outputFile)
          console.log(outputFile)
          console.log('')
      })
      console.log("OK")
      response.status(201).send("Created")
    }
  })
})

app.put("/image/rename", bodyAsJson, /*authenticate,*/(request, response) => {
  var oldName = request.body.oldname
  var newName = request.body.newname
  console.log(`PUT /image oldName = ${oldName} newName = ${newName}`)

  fs.rename(`images/${oldName}`, `images/${newName}`, (error) => {
    if (error) {
      response.status(400).send(error)
    }
    response.send(`The image with name ${oldName} was renamed to ${newName} successfully`)
  })
})

app.delete("/image/:filename", /*authenticate,*/(request, response) => {
  var name = request.params.filename
  console.log(`DELETE /image name = ${name}`)
  fs.unlink(`images/${name}`, (error) => {
    if (error) {
      response.status(400).send(error)
    }
    response.send(`The image with name ${name} successfully deleted!`)
  })
})



app.listen(PORT, () => {
  console.log(`ImageStorage, running on IP address ${ipAddress}, listening on port ${PORT}.`)
})
