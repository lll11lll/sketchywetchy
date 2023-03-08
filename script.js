// Nick Greiner
// 03/06/2023
// Etch-A-Sketch skript

// 1 Make the color the same color as the color picker and how they draw onto the grid
// 2 Allow the use to change the board size
// 3 Allow the user to reset the board (Making all tiles whited)

// On the right side we could add input boxes and a submit buttons that stores the art in a database somehow.

// Creating the grid for etch-a-sketch

const mainCont = document.querySelector('.container');
const colorPick = document.querySelector('.colorPicker');
const sizePick = document.querySelector('.sizeSelector');
const clearButton = document.querySelector('.cb');
let myColor = '#000000'
let myValue = 'Small'
let gridBoxes 


colorPick.addEventListener('input', () => {
    myColor = colorPick.value;
});

sizePick.addEventListener('change', () => {
    myValue = sizePick.value;
    console.log(myValue);
    mainCont.innerHTML = '';
    generateGrid(myValue);
});

clearButton.addEventListener('click', () => {
    gridBoxes.forEach((gridBox) => {
        gridBox.classList.add('whiteBG');
        gridBox.style.backgroundColor = ''
    });
});



function updateGrid(gridBoxes) {
    gridBoxes.forEach((gridBox) => {
        gridBox.addEventListener('mouseover', () => {
            gridBox.classList.remove('whiteBG');
            gridBox.style.backgroundColor = `${myColor}`
        });
    });

}

// Small medium or large, small - 16x16, medium - 32x32, large - 64x64
function generateGrid(size) {
    if (size === 'Small (16x16)') {
        for(let i = 0; i < 256; i++) {
            let gridBox = document.createElement('div');
            gridBox.classList.add('gridbox')
            gridBox.classList.add('whiteBG')
            gridBox.style.cssText = ' border: solid 2px black; width: 50px; height: 50px; box-sizing: border-box;';
            mainCont.appendChild(gridBox);

            //console.log('Added gridbox to main container')
        };
    } else if (size === 'Medium (32x32)') {

        for(let i = 0; i < 1024; i++) {
            let gridBox = document.createElement('div');
            gridBox.classList.add('gridbox')
            gridBox.classList.add('whiteBG')
            gridBox.style.cssText = ' border: solid 2px black; width: 25px; height: 25px; box-sizing: border-box;';
            mainCont.appendChild(gridBox);
            
            //console.log('Added gridbox to main container')
        };
    } else if (size === 'Large (64x64)') {
        for(let i = 0; i < 4096; i++) {
            let gridBox = document.createElement('div');
            gridBox.classList.add('gridbox')
            gridBox.classList.add('whiteBG')
            gridBox.style.cssText = ' border: solid 2px black; width: 12.5px; height: 12.5px; box-sizing: border-box;';
            mainCont.appendChild(gridBox);
            
            //console.log('Added gridbox to main container')
        };
    };
    gridBoxes = document.querySelectorAll('.gridbox');
    updateGrid(gridBoxes)
}

generateGrid('Small (16x16)')

