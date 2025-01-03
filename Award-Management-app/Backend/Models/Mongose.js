const mongoose = require('mongoose')
const AwardsSchema = mongoose.Schema({
    Title_name: String,
    Awards_Decription: String,
    Awards_Progress: Number,
    Reuirement: String
    
})
module.export = mongoose.model('Awards', AwardsSchema);