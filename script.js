// Nick Greiner
// 03/06/2023
// Etch-A-Sketch skript

// Creating the grid for etch-a-sketch

const mainCont = document.querySelector('.container');

// const gridBox = document.createElement('div');
// gridBox.className = '.gridbox'
// gridBox.textContent = 'This is a box!'
//gridBox.style.cssText = 'justify-content: center; align-items: center; width: 50px; height: 50px;'

for(let i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');

    gridBox.style.cssText = 'border: solid 2px black;width: 50px; height: 50px; box-sizing: border-box;';


    mainCont.appendChild(gridBox);
    console.log('Added gridbox to main container')
};
