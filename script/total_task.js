const selections=document.getElementById('selection')
const selLen=selections.querySelectorAll('div')

const divCount=selLen.length

const tasks = document.getElementById('task')

tasks.textContent=divCount;
