
const express = require('express')
const app = express()
const port = 3000

// Port
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})

// Route root
app.get('/', (req, res) => {
    res.send('Server Express Basic - Route root')
})

