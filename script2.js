const ball = document.querySelector(".circal");
let i = 0;
let speed = 12;
const canvast = document.querySelector("canvas");


canvast.width = window.innerWidth;
canvast.height = 200;
let c = canvast.getContext("2d");

move1();
move2();




function move1() {

    if (ball.offsetLeft + 100 >= window.innerWidth)
        i = -speed;
    else if (ball.offsetLeft <= 0)
        i = speed;



    ball.style.left = ball.offsetLeft + i + "px";
    console.log(ball.clientLeft + i + "px")
        // let time = window.setTimeout(move1, 10);
    requestAnimationFrame(move1);
}



function move2() {
    let z = 50;
    let m = speed;
    man();


    function man() {
        if (z + 50 >= window.innerWidth)
            m = -speed / 2;
        else if (z - 50 <= 0)
            m = speed / 2;


        drow(z);
        console.log("1")
        z += m;
        requestAnimationFrame(man);
    }

    function drow(o) {
        c.clearRect(0, 0, window.innerWidth, 200)
        c.beginPath();
        c.arc(o, 60, 50, 0, 2 * Math.PI);
        c.fillStyle = "red";
        c.fill();
        z += m;
    }
}