const linterna = document.getElementById('linterna');
const light = document.createElement('div');
light.className = 'light';
linterna.appendChild(light);

linterna.addEventListener('mousemove', e => {
    const rect = linterna.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    light.style.left = `${x}px`;
    light.style.top = `${y}px`;
});