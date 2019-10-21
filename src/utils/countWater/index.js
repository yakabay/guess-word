const countWater = (array) => {
    let result = 0;

    const runForArray = (array) => {
        const croppedArrayFromLeftSide = cropArrayFromLeftSide(array);
        const croppedArrayFromBothSides = cropArrayFromLeftSide(croppedArrayFromLeftSide.reverse());

        result += calculateZeroes(croppedArrayFromBothSides);

        const decrementedArray = croppedArrayFromBothSides.map(item => item > 0 ? item - 1 : 0);
        if (decrementedArray.length) {
            runForArray(decrementedArray);
        }
    };

    runForArray(array);

    return result
};

const cropArrayFromLeftSide = (array) => {
    if (array[0] === 0) {
        array.shift();
    }

    if (array[0] === 0) {
        cropArrayFromLeftSide(array)
    }

    return array
};

const calculateZeroes = (array) => {
    const reducer = (accumulator, currentValue) => (
        currentValue === 0 ? accumulator + 1 : accumulator
    );

    return array.reduce(reducer, 0);
};

export default countWater;