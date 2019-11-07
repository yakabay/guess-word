const solution = (array) =>  {
    const i = array.length - 1;
    return decreaseNumber(array, i);
};

const decreaseNumber = (array, i) => {
    let next = i - 1;

    if (next === -1) {
        next = array.length - 1;
    }

    while (array[i] > array[next]) {
        console.log(array, `X[${i}] - X[${next}] :`, `${array[i]} - ${array[next]}`);
        array[i] = array[i] - array[next];
        next--;

        if (next === -1) {
            next = array.length - 1;
        }

        if (next === i) {
            next = i - 1;
        }
    }

    if (array[i] < array[next]) {
       return decreaseNumber(array, next);
    }

    console.log(array, "- array");
    return array.reduce( (accumulator, currentValue) => {
        return accumulator + currentValue;
    });
};

export default solution;