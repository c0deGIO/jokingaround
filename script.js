document.addEventListener("DOMContentLoaded", () => {

    // This code centers the "Yes", "No" buttons because I suck at CSS

    let marg = 100;
    var x = Math.round((window.innerWidth - marg) / 2 - 100);
    document.getElementById('yes').style.left = `${x}px`;
    //console.log(x);
    x = Math.round((window.innerWidth + marg) / 2);
    document.getElementById('no').style.left = `${x}px`;
    //console.log(x);

});

function fyes() {
    window.location.href = "/yes";
}

function fno() {
    console.log("No1");
    let btnNo = document.getElementById('no');
    var x = Math.round(Math.random() * (window.innerWidth - 200));
    var y = Math.round(Math.random() * (window.innerHeight - 150));
    x = 25 + x;
    y = 25 + y;
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
}
