const express = module.require('express')
const socket = module.require('socket.io')
const mongoose = module.require('mongoose')
const path = module.require('path')

// invoking the expression function
 const app = express()

//  middle wares
app.use(express.static(path.join(__dirname, 'public')))

 const PORT = process.env.PORT || 3000  // http://localhost:3000

 const server  = app.listen(PORT, ()=>{
    console.log( "server listening at port " + PORT)
 })

//  invoking the socket function which is going to return a huge object
 let io = socket(server)

 io.on("connection", (socket)=>{
       console.log("A new user has joined the group chat")


    //    listen for the incoming message
      socket.on('chat', (data)=>{
             io.sockets.emit('user-message', data)
      })

 })
