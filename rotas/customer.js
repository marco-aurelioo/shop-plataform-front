const express = require('express')
const router = express.Router()

router.get('/customer',(req,res) => {
    res.json({
        name:'teste',
        phone:'123456'
    })
})

module.exports = router