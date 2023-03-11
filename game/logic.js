xm = window.innerWidth;
ym = window.innerHeight;
tx = xm / 2 - 50;
ty = ym - 150;
xv = 0;
yv = 0;
speed = 50;
function start() {
    document.getElementById("bsx").style.display = "none";
    tank = document.getElementById("tank");
    tank.style.display = "inline-block";
    tank.style.position = "fixed";
    tank.style.top = `${ty}px`;
    tank.style.left = `${tx}px`;
    setInterval(() => { 
        tx += xv;
        ty += yv;
        if (tx + 160 > xm || tx < 0) xv = -xv;
        if (ty + 160 > ym || ty < 0) yv = -yv;
        tank.style.top = `${ty}px`;
        tank.style.left = `${tx}px`;
    }, 100);
}
function f(e) {
    switch (e.key) {
        case "ArrowRight":
            xv = speed;
            yv = 0;
            break;
        case "ArrowLeft":
            xv = -speed;
            yv = 0;
            break;
        case "ArrowUp":
            yv = -speed;
            xv = 0;
            break
        case "ArrowDown":
            yv = speed;
            xv = 0;
            break
        case " ":
            xv = 0;
            yv = 0;
            break;
    }
}
setTimeout(bs, 1000, 5);
function bs(i) {
    if (i > 0) {
        document.getElementById("bsx").innerHTML = i;
        setTimeout(bs, 1000, i - 1);
    } else start();
}