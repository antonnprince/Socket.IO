const {createServer} = require('http')
const {Server} = require('socket.io')

const httpServer = createServer()

const socket = new Server(httpServer, {
    cors:{
        origin:"http://127.0.0.1:5500"
    }
})

socket.on('connect', (socket)=>{
    // console.log(socket)

    socket.emit("message","HELLOO")
    socket.on("message",(data)=>{
        console.log(data)
    })
})



httpServer.listen(3000, ()=>{
    console.log("Server is connected")
})