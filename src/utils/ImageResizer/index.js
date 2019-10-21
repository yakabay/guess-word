export const limitSize = (initialSize, maxSize) => {
    const { width, height } = initialSize;
    const { width: maxWidth, height: maxHeight } = maxSize;

    let limitedWidth;
    let limitedHeight;

    if (width > maxWidth && height > maxHeight) {
        const limitedWidth1 = maxWidth;
        const limitedHeight1 = height * (maxWidth / width);
        const limitedHeight2 = maxHeight;
        const limitedWidth2 = width * (maxHeight / height);
        limitedWidth = Math.min(limitedWidth1, limitedWidth2);
        limitedHeight = Math.min(limitedHeight1, limitedHeight2);
    } else if (width > maxWidth && height <= maxHeight) {
        limitedWidth = maxWidth;
        limitedHeight = height * (maxWidth / width);
    } else if (height > maxHeight && width <= maxWidth) {
        limitedHeight = maxHeight;
        limitedWidth = width * (maxHeight / height);
    } else {
        limitedWidth = width;
        limitedHeight = height;
    }

    return {
        width: limitedWidth,
        height: limitedHeight,
    };
};

export const resizeImage = (imageFile, options = { width: 1200, height: 1200 }) => {
    return new Promise(resolve => {
        const imageElement = document.createElement("img");
        const imageURL = imageFile && window.URL.createObjectURL(imageFile);

        imageElement.onload = () => {
            const initialSize = {
                width: imageElement.width,
                height: imageElement.height,
            };
            const maxSize = { width: options.width, height: options.height };
            const { width: limitedWidth, height: limitedHeight } = limitSize(initialSize, maxSize);

            const canvas = document.createElement("canvas");
            canvas.width = limitedWidth;
            canvas.height = limitedHeight;

            const context = canvas.getContext("2d");
            context.drawImage(imageElement, 0, 0, limitedWidth, limitedHeight);

            canvas.toBlob(blob => resolve(blob), "image/jpeg");
        };

        imageElement.src = imageURL;
    });
};

export default {
    resizeImage,
    limitSize,
};
