let yAxis = {};
let rows = 16;
let widthAndHeight = `${100/rows}%`;
let cellNumber = 0;
let brightnessDict = 1;

let bodyRef = document.getElementById('body');
let drawingWrapper = document.createElement('div');

drawingWrapper.setAttribute('id', 'drawing-wrapper');

bodyRef.appendChild(drawingWrapper);

for (let i = 0; i < rows; i++) {
    // body.appendChild(document.createElement('div'))

    yAxis[i] = document.createElement('div');
    yAxis[i].setAttribute('class', 'parent-div');
    yAxis[i].style.height = widthAndHeight;
    yAxis[i].style.width = '100vw';
    for (let j = 0; j < rows; j++){
        yAxis[i].appendChild(document.createElement('div'));
        yAxis[i].childNodes[j].setAttribute('class', 'drawing-cell');
        yAxis[i].childNodes[j].style.width = widthAndHeight;
        yAxis[i].childNodes[j].style.height = '100%';
        yAxis[i].childNodes[j].setAttribute('id', `${cellNumber}`);
        yAxis[i].style.filter = `brightness(1)`;
        brightnessDict[cellNumber] = 1;
        cellNumber++;

        yAxis[i].childNodes[j].addEventListener('click', () => {
            yAxis[i].style.filter = `brightness(${brightnessDict[cellNumber]-0.75})`;
            console.log(`click on ${cellNumber}`)   
        });
    }
    

}



for (let i = 0; i < Object.keys(yAxis).length; i++) {
    drawingWrapper.appendChild(yAxis[i]);
}





console.log(Object.keys(yAxis).length);