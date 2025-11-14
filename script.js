let count = 0;
let rotateX = 0;
let rotateY = 0;

const cube = document.getElementById("cube");

const faces = {
    front: document.getElementById("front"),
    back: document.getElementById("back"),
    right: document.getElementById("right"),
    left: document.getElementById("left"),
    top: document.getElementById("top"),
    bottom: document.getElementById("bottom")
};

const incSound = document.getElementById("incSound");
const decSound = document.getElementById("decSound");

function updateFaces(value) {
    for (let side in faces) {
        faces[side].innerHTML = value;
    }
}

document.getElementById("inc").addEventListener("click", () => {
    incSound.currentTime = 0;
    incSound.play();

    count++;
    rotateY += 90;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    updateFaces(count);
});

document.getElementById("dec").addEventListener("click", () => {
    decSound.currentTime = 0;
    decSound.play();

    count--;
    rotateY -= 90;

    cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    updateFaces(count);
});
