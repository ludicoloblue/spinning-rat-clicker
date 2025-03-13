let clickCount = 0;

document.getElementById('clicker').addEventListener('click', () => {
    clickCount++;
    document.getElementById('clickCount').textContent = clickCount;
});
