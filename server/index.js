import express  from "express";
import mongoose from "mongoose";
import cors from 'cors'

import userRoutes from './routes/users.js'

const app = express();

app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended: true}))
app.use(cors())

app.get('/',(req, res) =>{
    res.send("this is a stack overflow clone api")
})

app.use('/user',userRoutes)


const CONNECTION_URL = "mongodb://localhost:27017/BAI-SERVER"
mongoose.connect(CONNECTION_URL, {useNewUrlParser:true , useUnifiedTopology:true})
.then(() => app.listen(PORT, () => {console.log(`server is running on PORT ${PORT}`)}))
.catch((err) => console.log(err.message)) 


const PORT = process.env.PORT || 5000
  