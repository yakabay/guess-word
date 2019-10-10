export const resizeImage = (imageFile, options) => {
    const { maxWidth, maxHeight } = options;

    const imageElement = document.createElement("img");
    imageElement.src = window.URL.createObjectURL(imageFile);

    return new Promise(resolve => {
        imageElement.onload = () => {
            let { width, height } = imageElement;

            if (width > height) {
                if (width > maxWidth) {
                    height *= maxWidth / width;
                    width = maxWidth;
                }
            } else {
                if (height > maxHeight) {
                    width *= maxHeight / height;
                    height = maxHeight;
                }
            }

            const canvas = document.createElement("canvas");
            canvas.width = width;
            canvas.height = height;

            const context = canvas.getContext("2d");
            context.drawImage(imageElement, 0, 0, width, height);

            resolve(canvas);
        };
    });

    // canvas.toBlob(blob => console.log("blob :", blob));
    // canvas.toBlob(blob => console.log("blob :", blob));
};

export default {
    resizeImage,
};
