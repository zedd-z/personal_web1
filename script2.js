// const swh = document.getElementById('switch');

// swh.addEventListener('click', (e) => {
//     if (swh.classList.contains('dark')) {
//         swh.classList.remove('dark');
//     } else {
//         swh.classList.add('dark');
//     }
// });

function switchClass(){
    const body = document.querySelector('body');
    // if (body.classList.contains('dark')) {
    //     body.classList.remove('dark');
    // } else {
    //     body.classList.add('dark');
    // }
    body.classList.toggle('dark');
}



let isChecked = false;

function onBtnDown() {
    const tl = gsap.timeline();
    tl.to("#rope-end", { duration: 0.2, y: 160 }, "start");
    tl.to("#rope", { duration: 0.2, morphSVG: "#rope-extended" }, "start");
}

function onBtnUp() {
    const tl = gsap.timeline();
    tl.to(
        "#rope",
        { duration: 0.4, morphSVG: "#rope-compressed", ease: "bounce.out" },
        "up"
    );
    tl.to(
        "#rope",
        { duration: 0.2, morphSVG: "#rope-original", ease: "bounce.out" },
        "down"
    );
    tl.to("#rope-end", { duration: 0.4, y: 90, ease: "bounce.out" }, "up");
    tl.to("#rope-end", { duration: 0.2, y: 120, ease: "bounce.out" }, "down");

    isChecked = !isChecked;

    let x = 0;
    let backgroundColor = "#827D96";
    let size = "100px";

    if (isChecked) {
        x = 160;
        backgroundColor = "#FFFFFF";
        size = "500px";
    }

    tl.to(".knob", { x, duration: 1 }, "up");
    tl.to(".top", { backgroundColor, duration: 1 }, "up");
    tl.to(".light", { width: size, height: size, duration: 1 }, "up");
}

const bbbtn = document.getElementById("bbtn");
btn.addEventListener("mousedown", onBtnDown);
btn.addEventListener("mouseup", onBtnUp);