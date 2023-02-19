
const flipArr = (img) => {
    for (let j = 0; j < img.length; j++) {
        img[j] = (img[j] == 0) ? 1 : 0;
    }
}
const flipAndInvertImage = function (image) {
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse();
        flipArr(image[i])
    }
    return image;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]))