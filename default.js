function spinLogo(x) {
    x.classList.add("spin");
}

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let image = ctx.createImageData(100, 100);
let data = image.data;

let length = 100 * 100 * 4;
for (let i = 0; i < length; i += 4) {
    data[i] = 255; // full red
    data[i + 1] = 0; // no green
    data[i + 2] = 0; // no blue
    data[i + 3] = 255; // fully opaque
}

ctx.putImageData(image, 0, 0);