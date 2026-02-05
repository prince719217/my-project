function jadu(rowNo , leftButton , rightButton){
    
const row = document.getElementById(rowNo);
const leftBtn = document.getElementById(leftButton);
const rightBtn = document.getElementById(rightButton);

const scrollAmount = 300; // pixels per click

rightBtn.addEventListener("click", () => {
    row.scrollLeft += scrollAmount;
    // scrollLeft = how much an element is scrolled horizontally from the left side
});

leftBtn.addEventListener("click", () => {
    row.scrollLeft -= scrollAmount;
});

}

jadu("row3" , "leftBtn" , "rightBtn");
jadu("row5" , "lssthn" , "gtrthn");