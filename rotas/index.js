const express = require('express')
const router =require('express').Router()

router.use('/', require('./customer'))

module.exports = router