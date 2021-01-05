import { errorHandler } from './middlewares/error-handler';
import express from "express"
import "express-async-errors"
import routes from "./routes"
import { NotFoundError } from './errors/not-found-error';
import dbConfig from './database/dbConfig';

const app = express()

app.use(express.json())

app.use(routes())

app.all("*", () => {
    throw new NotFoundError()
})

app.use(errorHandler)


const port = 3000 || process.env.PORT

app.listen(port, () => {
    console.log(`app listeniing on ${port}`)
})

dbConfig();