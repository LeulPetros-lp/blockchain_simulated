const cors = require('cors')
const express = require('express')

export const initExpressServer = (port: number,) => {
    const app = express()

    app.use(cors())
    app.use(express.json())

    app.listen(port, () => {
        console.log(`${port}, /chain to get started`)
    })


    return app

}

