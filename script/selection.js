document.getElementById('btn-selection-1').addEventListener('click', function(){
    alert('Board Updated Successfully')

    const notify = document.getElementById('notification')
    // console.log(notify)
    const title = document.getElementById('Sec-title-1')
    // console.log(title)

    const newTitle =title.innerText;
    // console.log(newTitle)
    const notityElement = document.createElement('p');
    const word ='jahin'

    notityElement.innerText=newTitle;

    notify.appendChild(notityElement, word)

    




})