const express = require('express')

const app = express()

const characters_json_data = [{ 'name':'Tom', 'age': 5},
                              { 'name':'Jerry', 'age': 4},
                              { 'name':'Scooby', 'age': 9}]

app.get('/', (req, res) => res.json({'message': 'hello!'}))

app.get('/character', (req, res) => res.json(get_character(req)))

app.listen(process.env.PORT || 8080)


const get_character = (req) =>{
    var param = req.query.name
    var character = characters_json_data.filter(ch => ch.name == param);
    return character;
}