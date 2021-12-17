const socket = io()

//elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')

const $messages = document.querySelector('#messages')

//templates
const messageTemplate = document.querySelector('#message-template').innerHTML



socket.on('message',(message) =>{
    //console.log(message);
    const html = Mustache.render(messageTemplate, {
        message: message.text,
        createdAt : message.createdAt
    })
    $messages.insertAdjacentHTML('beforeend', html)
} )

socket.on('locationMessage', (url) =>{
    console.log(url);
    const html = Mustache.render(locationMessageTemplate, {
        url
    })
    $messages.insertAdjacentHTML('beforeend', html)
})



// socket.on('countUpdated', (count)=>{
//     console.log('The count has been updated', count);
// })

// document.querySelector('#increment').addEventListener('click', ()=>{
//     console.log("Clicked");
//     socket.emit('increment')
// })

$messageForm.addEventListener('submit', (e)=>{
    e.preventDefault()

    $messageFormButton.setAttribute('disabled', 'disabled')
   

    const message = e.target.elements.message.value
    socket.emit('sendMessage', message, (error)=>{
        $messageFormButton.removeAttribute('disabled')
        $messageFormInput.value=''
        $messageFormInput.focus()

        if(error){
            return console.log(error);
        }
        console.log("Message delivered!");
    })
})

const $sendLocationButton = document.querySelector('#send-location')

$sendLocationButton.addEventListener('click', ()=>{
    
    if(!navigator.geolocation){
        return alert('Geolocation is not supported by your browser!')
    }
    $sendLocationButton.setAttribute('disabled', 'disabled')
    navigator.geolocation.getCurrentPosition((position)=>{
        // console.log(position.coords);
        socket.emit('sendLocation', {
            latitude : position.coords.latitude,
            longitude: position.coords.longitude
        }, ()=>{
            $sendLocationButton.removeAttribute('disabled')
            console.log('Location Shared!');
        })

    })
})


// function greeting(name) {
//   //alert('Hello ' + name);
//   console.log(`call back function`);
// }

// function processUserInput(callback) {
//   console.log(`outer function`);
//   callback('avc');
// }

// processUserInput(greeting);