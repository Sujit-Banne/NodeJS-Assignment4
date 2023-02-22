const express = require('express')
const app = express()
const port = 3000

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

//app.get for Home page (question says to request body parameters for all endpoints)
app.get('/', (req, res) => {
    res.send({ message: 'Hello world!' })
})

// post request for Addition
app.post('/add', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)) {
        return res.send({ status: 'failure', message: 'Invalid data types' })
    }
    const sum = num1 + num2
    if (sum < -1000000 || sum > 1000000) {
        return res.send({ status: 'error', message: 'Overflow' })
    }
    return res.send({ status: 'success', message: 'the sum of given two numbers', sum })
})

// Post request for Subtraction
app.post('/sub', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)) {
        return res.send({ status: 'failure', message: 'Invalid data types' })
    }
    const difference = num1 - num2
    if (difference < -1000000 || difference > 1000000) {
        return res.send({ status: 'error', message: 'Overflow' })
    }
    return res.send({ status: 'success', message: 'The difference of given two numbers', difference })
})

//post request for multiplication 
app.post("/multiply", (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    if (isNaN(num1) || isNaN(num2)) {
        return res.send({ status: 'failure', message: 'Invalid data types' })
    }
    const result = num1 * num2
    if (result > 1000000 || result < -1000000) {
        return res.send({ status: 'error', message: 'underflow' })
    }
    res.send({ status: 'success', message: 'The product of the given numbers ', result })
})

//Post request fot division 
app.post("/divide", (req, res) => {
    const { num1, num2 } = req.body
    if (isNaN(num1) || isNaN(num2)) {
        return res.send({ status: 'failure', message: 'Invalid data types' })
    }
    if (num2 === 0) {
        res.send({ status: 'error', message: 'cannot divide by zero' })
    }
    const result = num1 / num2
    if (result > 1000000 || result < -1000000) {
        return res.send({ status: 'error', message: 'underflow' })
    }
    res.send({ status: 'success', message: 'The division of the given numbers ', result })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))