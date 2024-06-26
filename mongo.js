require('dotenv').config()
const mongoose = require('mongoose')


const url = process.env.TEST_MONGODB_URI
mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
    content: 'nota ejemplo 3',
    important: true,
})

// Guarda notas en la base de datos

note.save().then(result => {
    console.log('note saved!')
    mongoose.connection.close()
})

// Encuentra todas las notas de la base de datos y las muestra en consola
// El parámetro del método es un objeto que expresa las condiciones de búsqueda.
// Dado que el parámetro es un objeto vacío {}, obtenemos todas las notas almacenadas
// en la colección de notas .
// Note.find({}).then(result => {
//     result.forEach(note => {
//         console.log(note)
//     })
//     mongoose.connection.close()
// })