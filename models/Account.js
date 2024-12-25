// Check your fields in your dummy database, and create your fields in 
// the init method to mirror your dummy database's fields. 


const { model, Schema } = require('mongoose')

const AccountSchema = new Schema({
    username: String,
    funds: Number
})

module.exports = model('Account', AccountSchema)