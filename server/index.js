const {createServer} = require('http')
const {Server} = require('socket.io')

const httpServer = createServer()

const socket = new Server(httpServer, {
    cors:{
        origin:"http://localhost:5500"
    }
})

socket.on('connect', (socket)=>{
    console.log(socket)
})

httpServer.listen(3000, ()=>{
    console.log("Server is connected")
})