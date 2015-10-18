var DELAY = 50;
var g = 9.81;
var MIN_X = 0, MIN_Y = 0, MAX_X = 640, MAX_Y = 480;
var mIntervalId;

var ctx;

var x, y, vx, vy, ax, ay;

function onIterate() {
    ctx.beginPath();
    ctx.lineWidth="5";
    ctx.strokeStyle="green";

    ctx.moveTo(x, MAX_Y - y);
    
    x += vx;
    y += vy;
    vx += ax;
    vy += ay;

    ctx.lineTo(x, MAX_Y - y);
    ctx.stroke();

    //document.write("x=" + x + " y=" + y + "<br>");

    if (x < MIN_X || x > MAX_X || y < MIN_Y || y > MAX_Y)
        clearInterval(mIntervalId);
}

function setParams() {
    x = 0;
    y = 0;
    vx = 50;
    vy = 50;
    ax = 0;
    ay = -g;
}

function draw() {
    var elem = document.getElementById("mCanvas");
    ctx = elem.getContext("2d");
    elem.height = (MAX_Y - MIN_Y);
    elem.width  = (MAX_X - MIN_X);

    setParams();

    ctx.fillStyle = "#FFF";
    ctx.fillRect(0, 0, elem.width, elem. height);

    ctx.fillStyle = "#000";
    mIntervalId = setInterval(onIterate, DELAY);
}