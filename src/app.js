import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app = express()
app.use(cors({
    origin : process.env.CORS_ORIGIN,
    credentials : true
}))

app.use(express.json({
    limit: "16kb"
}))

app.use(express.urlencoded({
    extended : true,
    limit : "16kb"
}))
//for public files
app.use(express.static("public"))
//CRUD operations of cookie from server to user browser
app.use(cookieParser())
  
export { app }