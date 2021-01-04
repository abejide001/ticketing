import express from "express"

const app = express()
app.use(express.json())

const port = 3000 || process.env.PORT

app.get('/api/users/currentUser', (req, res) => {
    res.send("hi there")
})
app.listen(port, () => {
    console.log(`app listeniing on ${port}`)
})