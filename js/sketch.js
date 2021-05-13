let img;
let option = -1;
let buttons = []
let buttonW = 100, buttonH = 45, space = 20;
let x = buttonW, y = 0;
let filters = [
    "Invert",
    "Gray",
    "Blur",
    "Threshold",
    "Dilate",
    "Erode",
    "Posterize"
]

function preload(){
	img = loadImage('assets/doge.jpg')

}
function setup(){
    createCanvas(windowWidth-5,windowHeight-5);
    y = height-450;
    loadButtons()
    frameRate(10)
}
function loadButtons(){
    textSize(15);
    for (let i = 0; i < filters.length; i++) {
        x = buttonW + space
        buttons.push({x:x*i+space,y:y,w:buttonW,h:buttonH,color:255})
    }
}
function mouseClicked() {
    option = -1;
    buttons.forEach((button,effect) => {
        button.color = 255;
        if(mouseX > button.x && mouseX <= button.x + button.w
            && mouseY > button.y  && mouseY < button.y + button.h){
            option = effect
            button.color = [209, 242, 153]
        }
    });
}
  
function setFilter(option){
    switch(option){
        case 0:
            filter(INVERT);
            break;
        case 1:
            filter(GRAY);
            break;
        case 2:
            filter(BLUR, 2)
            break;
        case 3:
            filter(THRESHOLD);
            break;
        case 4:
            filter(DILATE);
            break;
        case 5:
            filter(ERODE);
            break;
        case 6:
            filter(POSTERIZE, 2);
            break;
        default:
            break;
    }
}
function draw(){
    clear()
    image(img,0,0,img.width/4,img.height/4)
    if(option!=-1){
        setFilter(option)
    }
    textSize(20)
    buttons.forEach((button,filter) => {
        fill(0)
        rect(button.x+5,button.y+10,button.w,button.h,10)
        fill(button.color)
        rect(button.x,button.y,button.w,button.h,10)
        fill(0)
        text(filters[filter],button.x+5,button.y+button.h/2)
    });
}