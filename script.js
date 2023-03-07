// Nick Greiner
// 03/06/2023
// Etch-A-Sketch skript

// 1 Make the color the same color as the color picker and how they draw onto the grid
// 2 Allow the use to change the board size
// 3 Allow the user to reset the board (Making all tiles whited)

// On the right side we could add input boxes and a submit buttons that stores the art in a database somehow.

// Creating the grid for etch-a-sketch

const mainCont = document.querySelector('.container');
const colorPick = document.querySelector('.colorPicker')
let myColor = '#000000'

// const gridBox = document.createElement('div');

// gridBox.textContent = 'This is a box!'
//gridBox.style.cssText = 'justify-content: center; align-items: center; width: 50px; height: 50px;'



colorPick.addEventListener('input', () => {
    myColor = colorPick.value;
});


// Small medium or large, small - 16x16, medium - 32x32, large - 64x64
for(let i = 0; i < 256; i++) {
    let gridBox = document.createElement('div');
    gridBox.classList.add('gridbox')
    gridBox.classList.add('whiteBG')
    gridBox.style.cssText = ' border: solid 2px black; width: 50px; height: 50px; box-sizing: border-box;';


    mainCont.appendChild(gridBox);
    //console.log('Added gridbox to main container')
};

const gridBoxes = document.querySelectorAll('.gridbox');

gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener('mouseover', () => {
        gridBox.classList.remove('whiteBG');
        gridBox.style.backgroundColor = `${myColor}`
    });
    // gridBox.addEventListener('mouseout', () => {
    //     gridBox.classList.remove('blackout');
    // });
});
