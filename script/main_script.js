// Initialize the total number of tasks
const assTask=document.getElementById('task')
let totalTasks = parseInt(assTask.innerText); 

function ifAllTaskComplete() {
    if (totalTasks === 0) {
        alert("Congrats!!! You have successfully completed all tasks");
    }
}

// selection
function selection(buttonId, titleId) {
    alert('Board Updated Successfully');
    document.getElementById(buttonId).disabled = true;
    document.getElementById(buttonId).style.backgroundColor = '#B1BCFF'; 

    const notify = document.getElementById('notification');
    const title = document.getElementById(titleId);
    const newTitle = title.innerText;
    const notifyElement = document.createElement('p');

    // Creating the time
    const time = new Date();
    const hours = time.getHours() %12 || 12
    const minutes = time.getMinutes();
    const second=time.getSeconds();
    const ampm=hours<12 ? 'AM' : 'PM'

    // adding extra word with the replacement title in activiti log
    const word1 = 'You have complete the task';
    const word2='at'
    const result = word1 + " " + newTitle + " " +word2+ " " +(`${hours}:${minutes.toString().padStart(2, '0')}:${second} ${ampm}`);
    notifyElement.innerText = result;
    notify.appendChild(notifyElement);

    // adding the total completing task in top header
    const countTask = document.getElementById('total_task');
    const count = parseInt(countTask.innerText);
    const total = count + 1;
    countTask.textContent = total;

    const assTask = document.getElementById('task');
    const assTn = parseInt(assTask.innerText);
    const assTotal = assTn - 1;
    assTask.textContent = assTotal;

    totalTasks--

    ifAllTaskComplete();
}

// call all the btn-id
document.getElementById('btn-selection-1').addEventListener('click', function () {
    selection('btn-selection-1', 'Sec-title-1');
});

document.getElementById('btn-selection-2').addEventListener('click', function () {
    selection('btn-selection-2', 'Sec-title-2');
});

document.getElementById('btn-selection-3').addEventListener('click', function () {
    selection('btn-selection-3', 'Sec-title-3');
});

document.getElementById('btn-selection-4').addEventListener('click', function () {
    selection('btn-selection-4', 'Sec-title-4');
});

document.getElementById('btn-selection-5').addEventListener('click', function () {
    selection('btn-selection-5', 'Sec-title-5');
});

document.getElementById('btn-selection-6').addEventListener('click', function () {
    selection('btn-selection-6', 'Sec-title-6');
});