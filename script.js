let yAxis = {};
let rows = 16;
let widthAndHeight = `${100/rows}%`;
let cellNumber = 0;
let colorDict = {};

let bodyRef = document.getElementById('body');
let drawingWrapper = document.createElement('div');

drawingWrapper.setAttribute('id', 'drawing-wrapper');

bodyRef.appendChild(drawingWrapper);

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

for (let i = 0; i < rows; i++) {
    // body.appendChild(document.createElement('div'))

    yAxis[i] = document.createElement('div');
    yAxis[i].setAttribute('class', 'parent-div');
    yAxis[i].style.height = widthAndHeight;
    yAxis[i].style.width = '100%';
    for (let j = 0; j < rows; j++){
        yAxis[i].appendChild(document.createElement('div'));
        yAxis[i].childNodes[j].setAttribute('class', 'drawing-cell');
        yAxis[i].childNodes[j].style.width = widthAndHeight;
        yAxis[i].childNodes[j].style.height = '100%';
        yAxis[i].childNodes[j].setAttribute('id', `${cellNumber}`);
        yAxis[i].childNodes[j].style.backgroundColor = 'rgb(255, 255, 255)';
        console.log(yAxis[i].childNodes[j].style.backgroundColor)
        colorDict[cellNumber] = [255, 255, 255];
        cellNumber++;
        yAxis[i].childNodes[j].addEventListener('mouseover', drawOnCell);
        
    }
    

}


function drawOnCell(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    // if (e.target.style.backgroundColor = 'background-color(rgb(0, 0, 0))') return
    e.target.style.backgroundColor = `rgb(${colorDict[e.target.id][0]-63.75}, ${colorDict[e.target.id][1]-63.75}, ${colorDict[e.target.id][2]-63.75})`;
    colorDict[e.target.id][0] -= 63.75
    colorDict[e.target.id][1] -= 63.75
    colorDict[e.target.id][2] -= 63.75
    console.log(`click on ${e.target.id}`)
    console.log(colorDict[e.target.id][0], colorDict[e.target.id][1], colorDict[e.target.id][2])
}



for (let i = 0; i < Object.keys(yAxis).length; i++) {
    drawingWrapper.appendChild(yAxis[i]);
}





console.log(Object.keys(yAxis).length);

five = document.getElementById('5');
five.style.backgroundColor = 'background-color(rgb(255, 255, 255))'; 

/* console.log(yAxis[0].childNodes[5].style.backgroundColor)
five.style.backgroundColor = 'black'
console.log(yAxis[0].childNodes[5].style.backgroundColor)
console.log(five.style.backgroundColor) */