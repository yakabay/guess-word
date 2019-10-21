const countWater = (array, accumulator = 0) => {
    const croppedArrayFromLeftSide = cropArrayFromLeftSide(array);
    const croppedArrayFromBothSides = cropArrayFromLeftSide(croppedArrayFromLeftSide.reverse());

    const result = accumulator + calculateZeroes(croppedArrayFromBothSides);

    const decrementedArray = croppedArrayFromBothSides.map(item => item > 0 ? item - 1 : 0);
    if (decrementedArray.length) {
        return countWater(decrementedArray, result);
    }

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