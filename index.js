const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const helmet = require('helmet')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const multer = require('multer')

dotenv.config()

const corsOptions = {
  origin: ['http://localhost:3000', 
'https://cipherschool.on.fleek.co'],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}

//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))
app.use(cors(corsOptions))

app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use('/images', express.static(path.join(__dirname, 'public/images')))

// routes
const authRoute = require('./routes/auth')
const usersRoute = require('./routes/users')
const detailsRoute = require('./routes/details')

// Routes
app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/details', detailsRoute)

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images')
  },
  filename: (req, file, cb) => {
    console.log(req.body.name)
    cb(null, req.body.name)
  },
})

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
  console.log(req.body.name)
  try {
    return res.status(200).json('File uploded successfully')
  } catch (error) {
    console.error(error)
  }
})

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    app.listen(process.env.PORT || 8282, () => {
      console.log('Server is running on : ' + process.env.PORT)
      console.log('DB Connected')
    })
  } catch (error) {
    console.log(error)
  }
}

start()
