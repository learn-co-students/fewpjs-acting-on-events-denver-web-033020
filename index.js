let dodger = document.getElementById("dodger")

console.log(dodger.style.left);

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }else {
        (e.key === "ArrowRight")
        moveDodgerRight();
    }
});



function moveDodgerLeft() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 5}px`;
    }

    console.log(dodger.style.left)
};

function moveDodgerRight() {
    let leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);

    if (left < 361) {
        dodger.style.left = `${left + 5}px`;
    }
    console.log(dodger.style.left)
}