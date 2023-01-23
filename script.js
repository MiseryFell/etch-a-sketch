xAxis = {};
rows = 16;
widthProperty = `${rows/100}%`;

for (let i = 0; i < rows; i++) {

    // body.appendChild(document.createElement('div'))

    xAxis[i] = document.createElement('div');
    xAxis[i].setAttribute('class', 'parent-div');
    xAxis[i].style.width = widthProperty;
    for (let j = 0; j < 16; j++){
        xAxis[i].appendChild('div');
        xAxis[i][j].setAttribute('class', 'drawing-cell');
    }
    

}

for (let i = 0; i < Object.keys(xAxis).length(); i++) {
    body.appendChild(xAxis[i]);
}



body = document.getElementById('body');

console.log(widthProperty);