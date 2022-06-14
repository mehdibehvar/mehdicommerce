const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 5000
const token = '25ab58a87343b96c88b2e658d74f38fdc885834a0e0c654af844d4a64136c5a9'

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.post('/login', (req, res) => {
    const { username, password } = req.body
    if ('mehdi@gmail.com' === username && 'mehdi' === password) {
        res.send({
            success: true,
            data: token
        })
    }
    res.send({
        success: false,
        error: 'username or password is wrong2!'
    })
})

app.get('/users/me', (req, res) => {
    const { authorization } = req.headers

    if (token === authorization) {
        res.send({
            success: true,
            data: {
                id: 1,
                username: 'behvar',
                email: 'mehdi@gmail.com',
                name: 'mehdi'
            }
        })
    }

    res.send({
        success: false,
        error: 'token is not valid'
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})