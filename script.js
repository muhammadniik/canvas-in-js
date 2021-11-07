const canvas = document.querySelector("canvas");
changeCanvasSize();
this.c = canvas.getContext("2d");
this.MousX = 0;
this.MousY = 0;

function changeCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", () => {
    changeCanvasSize();
})








// ?.............................................................
class circal {
    constructor(locationX, locationY, r = 20) {

        this.x = locationX || 100;
        this.y = locationY || 100;
        this.g = 1;
        this.speed = 5;
        this.s = 0.8;
        this.r = r;
        this.movePosition = this.speed;
        // 
        this.drow(this.y, this.x);
        //this.upData();

    }

    drow(y = this.y, x = this.x) {
        c.beginPath();
        c.arc(x, y, this.r, 0, 2 * Math.PI);
        c.fillStyle = "blue";
        c.fill();
        // this.upData();



    }


    upData() {
        let dictans = Math.pow(Math.pow((MousX - this.x), 2) + Math.pow((MousY - this.y), 2), 1 / 2);


        if (dictans < 200 && this.r < 60) {
            this.r += 1;
        } else if (dictans >= 200 && this.r >= 20) {
            this.r -= 1;
        }
        //console.log(this.r, dictans);
        // console.log(this);
        // if (this.enumrator + 50 >= window.innerHeight) {
        //     this.movePosition = -(0.8 * this.enumrator);
        // } else if (this.enumrator < window.innerHeight) {
        //     this.movePosition = this.speed;
        // }

        // this.drow(this.enumrator);
        // c.clearRect(0, 0, window.innerWidth, window.innerHeight);


        if (this.y + 20 + this.speed > window.innerHeight) {
            this.speed = -(this.speed * this.s)
        } else {
            this.speed += this.g;
        }
        this.y += this.speed;
        this.drow();
        // this.enumrator += this.movePosition;

        //window.requestAnimationFrame(this.upData.bind(this));

    }
}
// ..................................................................
let balls = [];
mufun();
balls.push(new circal(100, 100));


function mufun() {
    c.clearRect(0, 0, window.innerWidth, window.innerHeight);


    balls.forEach((b) => {
            b.upData();
        })
        // for (let i = 0; i++; i <= balls.length) {
        //     // c.clearRect(0, 0, window.innerWidth, window.innerHeight);
        //     balls[i].upData();
        //     console.log(33);
        // }

    window.requestAnimationFrame(mufun);

}
window.addEventListener("click", (e) => {


        balls.push(new circal(e.clientX, e.clientY))

    })
    // balls.forEach((e) => {
    //     c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //     c.clearRect(0, 0, window.innerWidth, window.innerHeight);
    //     e.upData();

// })

window.addEventListener("mousemove", (e) => {
    MousX = e.clientX;
    MousY = e.clientY;
})