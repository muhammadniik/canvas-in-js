const canvas = document.querySelector("canvas");
this.c = canvas.getContext("2d");
const linepoint = [];
this.isWrit = false;
const cleanBotton = document.querySelector("#clean")

canvasSize();

function canvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", canvasSize);
class canvasClass {
    constructor() {

    }
}

class writLin {


    constructor(x, y, booly = false) {
        this.r = 5;
        this.x = x;
        this.y = y;
        this.color = "black";
        this.drow();
        if (booly == true)
            this.clean();
    }
    drow() {
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        c.fillStyle = this.color;
        c.fill();
    }
    clean() {
        c.clearRect(this.x - this.r, this.y - this.r, 5 * this.r, 5 * this.r)
    }

    upData() {

    }
}
// ..........................................
c.beginPath();
let clean = new writLin()
window.addEventListener("mousedown", (e) => {
    isWrit = true;
})
window.addEventListener("mouseup", (e) => {
    isWrit = false;
})
window.addEventListener("mousemove", (e) => {
    if (isWrit && !cleanBotton.checked) {
        linepoint.push(new writLin(e.clientX, e.clientY));
        console.log("hi")
    } else if (isWrit)
        new writLin(e.clientX, e.clientY, cleanBotton.checked)

})