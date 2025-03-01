const dayElement=document.getElementById('day')
const dateElement=document.getElementById('date')

const days = ['Sun ,', 'Mon ,', 'Tue ,', 'Wed ,', 'Thu ,', 'Fri ,', 'Sat ,'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const now = new Date();
const dayName = days[now.getDay()];
const date = now.getDate();
const monthName = months[now.getMonth()];
const year = now.getFullYear();

dayElement.textContent = dayName;
dateElement.textContent = `${monthName} ${date} ${year}`;
