
// emitting connection
const socket = io.connect("http://localhost:3000")

// get all the dom elements needed 
let chat_container = document.querySelector('.chat-container')
let handle = document.querySelector('.handle')
let message = document.querySelector('.message')
let send_btn = document.querySelector('.send-btn')


// add event listener to the btn
send_btn.addEventListener('click', (e)=>{
      e.preventDefault()

      if(handle.value.length === 0 || message.value.length === 0){
           alert("Ooops! the handle and message field must filled up!")
      }else{
            //     emit user's message to the server
              socket.emit('chat', {
                    handle:handle.value,
                    message:message.value
              })
      }
})

socket.on('user-message', (data)=>{
      
    // creating the chat parcel
   
    /* 
        <p>
            <b> Codeprof </b> Blah blah blah
        </P>
    */

    let chat_parcel = `<p><b>${data.handle}</b> : ${data.message} </p>`
    chat_container.innerHTML += chat_parcel
})


