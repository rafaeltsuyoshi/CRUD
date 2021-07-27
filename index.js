const express = require('express')
const cors = require('cors')

const server = express()

server.use(express.json())
server.use(cors({}))


const cursos = ['FullStack Master', 'Desenvolvimento de Games', 'Viver de Youtube']

// return one course
server.get('/cursos/:index', (req, res) => {
    const { index } = req.params

    return res.json(cursos[index])
})

// return all courses
server.get('/cursos', (req, res) => {
    return res.json(cursos)
})

// create new course
server.post('/cursos', (req, res) => {
    const { name } = req.body

    cursos.push(name)

    return res.json(cursos)
})

// Update course
server.put('/cursos/:index', (req, res) => {
    const { index } = req.params
    const { name } = req.body

    cursos[index] = name

    return res.json(cursos)
})

// Delete course
server.delete('/curso/:index', (req, res) => {
    const { index } = req.params

    cursos.splice(index, 1)

    return res.json({ message: 'O curso foi deletado'})
})

server.listen(3000, () => {
    console.log("Server running")
})