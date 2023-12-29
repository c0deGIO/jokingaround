document.addEventListener("DOMContentLoaded", () => {

    // This code centers the "Yes", "No" buttons because I can't use CSS properly

    let marg = 100;
    var x = Math.round((window.innerWidth - marg) / 2 - 100);
    document.getElementById('yes').style.left = `${x}px`;
    //console.log(x);
    x = Math.round((window.innerWidth + marg) / 2);
    document.getElementById('no').style.left = `${x}px`;
    //console.log(x);

});

function fyes() {
    window.location.href = "yes";
}

function fno() {
    let btnNo = document.getElementById('no');
    let cl = window;
    var x = Math.round(Math.random() * (cl.innerWidth - 200));
    var y = Math.round(Math.random() * (cl.innerHeight - 150));
    x = 25 + x;
    y = -125 + y;
    console.log(x, y, cl.innerWidth, cl.innerHeight);
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}
