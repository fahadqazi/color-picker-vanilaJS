var colorSize;
var colors = generateRandomColors(colorSize);

var squares = document.querySelectorAll('.square');
var pickedColor = pickColor();
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.getElementById('message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var easyBtn = document.getElementById('easybtn');
var hardBtn = document.getElementById('hardbtn');

easyBtn.addEventListener('click', function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    colors = generateRandomColors(3);
    console.log(colors);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        if(colors[i]){
            console.log('yes')
            squares[i].style.background = colors[i];
        } else {
            console.log('no');
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener('click', function(){
    easyBtn.classList.remove("selected");
    hardBtn.classList.add("selected");
    colors = generateRandomColors(6);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0; i<squares.length; i++){
        squares[i].style.background = colors[i];
        squares[i].style.display = "block";
    }
})

colorDisplay.textContent = pickedColor

for (var i=0; i<squares.length; i++){
    squares[i].style.background = colors[i];

    squares[i].addEventListener('click', function(){
        var clickedColor = this.style.background;
        // console.log(pickedColor, clickedColor);
        if (clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!"
            changeColors(clickedColor)
            h1.style.background = clickedColor;
            resetButton.textContent = "Play Again"
        } else {
            this.style.background = "#232323"
            message.textContent = "Try Aain"
        }
    })
}

resetButton.addEventListener('click', function(){
   colors = generateRandomColors(6);
   pickedColor = pickColor();
   colorDisplay.textContent = pickedColor;
   
   for(var i=0; i<squares.length; i++){
       squares[i].style.background = colors[i];
   }
   h1.style.background = "#232323";
})

function changeColors(color){
    for (var i=0; i<squares.length; i++){
        squares[i].style.background = color
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    // console.log(random);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i=0; i<num; i++){
        arr.push(randomColor());

    }
    return arr;
}

function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}