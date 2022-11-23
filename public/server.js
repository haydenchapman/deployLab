//yo server stuff
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())

app.use(express.static(`${__dirname}/public`))

app.listen(4004,
   () => console.log(`Docked at PORT 4004`)
)

app.get('/api/cat', (req, res) => {
    res.status(200).send('2001 Mazda RX-7')
})