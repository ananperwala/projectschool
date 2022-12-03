const button = document.getElementById("btn");
const body = document.body;

const colors = ['red','blue','green','yellow','white','pink','purple','brown','violet','gold','black','aquamarine','grey']

button.addEventListener('click',changeBackground)

function changeBackground(){
    const colorIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex]
}