var svg = document.getElementById("svg");
var clearButton = document.getElementById("clear");

var changeColor = function(e){
    e.stopPropagation();
    this.setAttribute("fill", "red");
    this.addEventListener("click", replace);
    console.log("changed");
};

var draw = function(e){
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.setAttribute("r",  "30");
    circle.setAttribute("fill", "blue");
    svg.appendChild(circle);
    circle.addEventListener("click", changeColor, true);
};

var replace = function(e){
    if (this.getAttribute("fill") === "red"){
        svg.removeChild(this);
        var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", Math.floor(Math.random()*(svg.getAttribute("width")-60)+30));
        circle.setAttribute("cy", Math.floor(Math.random()*(svg.getAttribute("height")-60)+30));
        circle.setAttribute("r",  "30");
        circle.setAttribute("fill", "blue");
        svg.appendChild(circle);
        circle.addEventListener("click", changeColor, true);
        console.log("replaced");
    };
    e.stopPropagation();
};

var clear = function() {
    while (svg.firstChild){
        svg.removeChild(svg.firstChild);
    };
};

svg.addEventListener("click", draw);
clearButton.addEventListener("click", clear);