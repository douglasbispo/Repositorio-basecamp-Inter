let array = [0, 1, 3, 4, 6, 80, 33, 23, 90];

function numerosPares(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            array[i] = 0;
        }
    }

    if (!array) return -1;
    if (!array.length) return -1;

    return array;
}

console.log(numerosPares(array));