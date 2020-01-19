const Jimp = require('jimp');

const addTextWatermarkToImage = async function (inputFile, outputFile, text) {
    const image = await Jimp.read(inputFile);
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
    image.print(font, 10, 10, text);
    image.quality(100).write(outputFile);
};

addTextWatermarkToImage('./test.jpg', './test-with-watermark.jpg', 'Hello world')