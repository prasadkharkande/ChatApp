const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const Filter = require('bad-words')
const { generateMessage } = require('./utils/messages')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

let count = 0

io.on('connection', (socket)=> {
    console.log("New websocket Connection ");
    
    // socket.emit('countUpdated', count)

    // socket.on('increment', ()=>{
    //     count++
    //     // socket.emit('countUpdated', count)
    //     io.emit('countUpdated', count)
    // })

    socket.emit('message', generateMessage('Welcome!'))
    socket.broadcast.emit('message', generateMessage('A new user has joined'))

    socket.on('sendMessage', (message, callback)=>{
        const filter = new Filter()

        if(filter.isProfane(message)){
            return callback('Profanity is not allowed!')
        }

        io.emit('message', message)
        callback()
    })

    socket.on('sendLocation', (coords, callback)=>{
        io.emit('message', `Location : ${coords.latitude}, ${coords.longitude}`)
        io.emit('locationMessage', `https://google.com/maps?q=${coords.latitude},${coords.longitude}`)
        callback('Location shared!')
    })



    socket.on('disconnect', ()=>{
        io.emit('message',generateMessage( 'A user has left!'))
    })
})




server.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})