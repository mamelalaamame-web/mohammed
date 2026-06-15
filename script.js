const b = document.getElementById('board');
for(let i=0; i<25; i++) {
let c = document.createElement('div');
c.className = 'cell';
b.appendChild(c);
}
