const express = require('express')
const app = express()
const bdayroutes = require('./routes/router')
const cors = require('cors')
const PORT = process.env.PORT || 5000



  app.use(cors({
    origin: '*',
  }))
  app.use(express.json())
  app.use('/api/celebsbirthdates', bdayroutes)







app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}`));