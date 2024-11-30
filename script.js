let is24HourMode = false;

function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    let period = '';

    if (!is24HourMode) {
        period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    }

    const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} ${period}`;
    document.getElementById('time').textContent = formattedTime;
}

document.getElementById('toggleMode').addEventListener('click', () => {
    is24HourMode = !is24HourMode;
    document.getElementById('toggleMode').textContent = is24HourMode ? 'Switch to 12-hour mode' : 'Switch to 24-hour mode';
});


setInterval(updateTime, 1000);
updateTime();

