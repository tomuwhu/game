nevek = ["Steven Howking","Yoda","Jack Sparrow","Einstein"]
window.addEventListener("load", e => {
    s = "<div class='c'>" + Array(4)
            .fill(0)
            .map((v, i) => `<div onclick="start(${i})"><img src="../pic/o${i}.pgj.png"><br>${nevek[i]}</div>`)
            .join("") + "</div>";
    document.getElementById("bsx").innerHTML = s;
});
function f(e) {
    x=e.target.getAttribute("src");
    v=x.split(".")[0].substring(5);
    document.getElementById("b1").innerHTML = `<a href="game/"><img src="${x}"></a><br>`+nevek[v]
}

xm = window.innerWidth;
ym = window.innerHeight;
tx = xm / 2 - 50;
ty = ym - 150;
xv = 0;
yv = 0;
speed = 50;
function start(x) {
    document.getElementById("bsx").style.display = "none";
    tank = document.getElementById("tank");
    tank.innerHTML = `<img src="../pic/o${x}.pgj.png">`;
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