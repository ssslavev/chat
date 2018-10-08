const socket = io.connect('http://localhost:5000');

const output = document.getElementById('output'),
    name = document.getElementById('name'),
    message = document.getElementById('message'),
    btn = document.getElementById('btn');


btn.addEventListener('click', () => {

    socket.emit('chat', {
        name: name.value,
        message: message.value
    })
})

socket.on('chat', (data) => {

    let output = document.getElementById('output');

    let div = document.createElement('div');
    div.classList.add('row', 'message-bubble')

    let p = document.createElement('p');
    p.classList.add('text-muted');
    p.innerHTML += data.name;

    let span = document.createElement('span');
    span.innerHTML += data.message;

    div.prepend(span);
    div.prepend(p);

    output.prepend(div);

})
