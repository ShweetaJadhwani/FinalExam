const express = require('express')
const router = express.Router();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
router.get('/',(req, res, next) =>{
    res.status(200).json({
        message: 'Awards-Api'
    })
})

router.post('/',(req, res, next) =>{
    res.status(201).json({
        message: 'Hello  you there'
    })
})

app.use((req, res, next)=>{
    const error = new error('not found');
    error.status(404);
   
    next(error);
})

module.exports = router;