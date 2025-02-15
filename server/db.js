const mongoose = require('mongoose')
function Connection () {
   const mongoURI = process.env.URI
   mongoose.connect(mongoURI)
  
    .then(() => console.log("connected success"))
    .catch(err => console.log(err))
}

module.exports = Connection;