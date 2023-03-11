nevek=["Lilcsi","Tesch","Roli","Patrik","Zsigi","Imó","Valentin","Dani","Zalán","Bende","Tomi","Philipp","Flóri","Abi","Lackó"];
window.addEventListener("load", e => {
    s = "<div class='c'>" + Array(15)
            .fill(0)
            .map((v, i) => `<div onclick="f(event)"><img src="pic/p${i}.jpg"><br>${nevek[i]}</div>`)
            .join("") + "</div>";
    document.getElementById("b1").innerHTML = s;
})
function f(e) {
    x=e.target.getAttribute("src");
    v=x.split(".")[0].substring(5);
    document.getElementById("b1").innerHTML = `<a href="game/"><img src="${x}"></a><br>`+nevek[v]
}