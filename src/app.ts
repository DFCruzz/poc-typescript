import router from "./routers/index"
import express from "express";
import cors from "cors";

const app = express()
app.use(express.json())
app.use(cors())

app.use(router)

const PORT = 5000
app.listen(PORT, () => {
    console.log(`SERVER is UP and running on PORT: ${PORT}`)
})