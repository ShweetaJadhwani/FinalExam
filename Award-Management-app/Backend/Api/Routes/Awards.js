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
router.add('/',(req, res, next) =>{
    res.status(200).json({
        message: 'Awards Added'
    })
})

router.post('/',(req, res, next) =>{
    res.status(201).json({
        message: 'Awards posted'
    })
})

router.get('/',(req, res, next) =>{
    res.status(200).json({
        message: 'Retrieving the awards'
    })
})

router.update('/',(req, res, next) =>{
    res.status(201).json({
        message: 'updates the existing awards'
    })
})
router.delete('/',(req, res, next) =>{
    res.status(201).json({
        message: 'Delete an award from the database'
    })
})




app.use((req, res, next)=>{
    const error = new error('not found');
    error.status(404);
   
    next(error);
})

module.exports = router;