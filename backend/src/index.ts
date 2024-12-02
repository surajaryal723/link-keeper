import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })
import express from 'express'
import cors from 'cors'

// Import routes
import userRouter from './routes/user-router'

// Import database configuration
import './db/config/db-config'
import contentRouter from './routes/content-router'
import linkRouter from './routes/link-router'


const app=express()
app.use(cors())
app.use(express.json())

app.use('/api/v1/user',userRouter)
app.use('/api/v1/content',contentRouter)
app.use('/api/v1/link',linkRouter)



app.listen(process.env.PORT || 3000)
