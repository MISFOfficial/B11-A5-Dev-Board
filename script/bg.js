document.getElementById('bg-color').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('jahin')
    const newColor = randomColor();
    document.body.style.backgroundColor=newColor;
    body.innerText =newColor
})

let newColor;

function randomColor(){
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256); 

    newColor =  r * 0.299 + g * 0.587 + b * 0.114

    if(newColor>186){
        newColor='black';
    }
    else{
        newColor='white';
    }
    return `rgb(${r}, ${g}, ${b})`;
}