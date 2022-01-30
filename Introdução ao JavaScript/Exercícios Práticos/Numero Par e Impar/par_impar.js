function evenOrOdd(array) {
    let evenNumber = [];
    let oddNumber = [];

    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenNumber.push(array[i]);
        }
        else {
            oddNumber.push(array[i]);
        }
    }

    console.log("Os números pares são: ", evenNumber,
        "\nOs números ímpares são: ", oddNumber);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

evenOrOdd(numbers);