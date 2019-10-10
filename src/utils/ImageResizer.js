export const resizeImage = (imageFile, options) => {
    const { maxSize } = options;

    const imageElement = document.createElement("img");
    const imageURL = imageFile && window.URL.createObjectURL(imageFile);
    imageElement.src = imageURL;

    const limitSize = (initialSize, maxSize) => {
        const { width, height } = initialSize;
        const { width: maxWidth, height: maxHeight } = maxSize;

        let limitedWidth = width;
        let limitedHeight = height;

        if (width > maxWidth) {
            limitedWidth = maxWidth;
            limitedHeight = height * (maxWidth / width);
        } else if (height > maxHeight) {
            limitedHeight = maxHeight;
            limitedWidth = width * (maxHeight / height);
        }

        return {
            width: limitedWidth,
            height: limitedHeight,
        };
    };

    return new Promise(resolve => {
        imageElement.onload = () => {
            const initialSize = {
                width: imageElement.width,
                height: imageElement.height,
            };

            const { width: limitedWidth, height: limitedHeight } = limitSize(initialSize, maxSize);

            const canvas = document.createElement("canvas");
            canvas.width = limitedWidth;
            canvas.height = limitedHeight;

            const context = canvas.getContext("2d");
            context.drawImage(imageElement, 0, 0, limitedWidth, limitedHeight);

            resolve(canvas);
        };
    });

    // canvas.toBlob(blob => console.log("blob :", blob));
    // canvas.toBlob(blob => console.log("blob :", blob));
};

export default {
    resizeImage,
};
