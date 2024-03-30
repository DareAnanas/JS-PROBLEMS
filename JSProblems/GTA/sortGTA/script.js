let permutations = [
    [1, 5, 6, 2],
    [1, 5, 2, 6],
    [1, 6, 5, 2],
    [1, 6, 2, 5],
    [1, 2, 5, 6],
    [1, 2, 6, 5],
    [5, 1, 6, 2],
    [5, 1, 2, 6],
    [5, 6, 1, 2],
    [5, 6, 2, 1],
    [5, 2, 1, 6],
    [5, 2, 6, 1],
    [6, 1, 5, 2],
    [6, 1, 2, 5],
    [6, 5, 1, 2],
    [6, 5, 2, 1],
    [6, 2, 1, 5],
    [6, 2, 5, 1],
    [2, 1, 5, 6],
    [2, 1, 6, 5],
    [2, 5, 1, 6],
    [2, 5, 6, 1],
    [2, 6, 1, 5],
    [2, 6, 5, 1],
];

let combinations = [
    [1, 5, 6],
    [1, 5, 2],
    [1, 5, 7],
    [1, 6, 5],
    [1, 6, 2],
    [1, 6, 7],
    [1, 2, 5],
    [1, 2, 6],
    [1, 2, 7],
    [1, 7, 5],
    [1, 7, 6],
    [1, 7, 2],
    [5, 1, 6],
    [5, 1, 2],
    [5, 1, 7],
    [5, 6, 1],
    [5, 6, 2],
    [5, 6, 7],
    [5, 2, 1],
    [5, 2, 6],
    [5, 2, 7],
    [5, 7, 1],
    [5, 7, 6],
    [5, 7, 2],
]

for (let i = 0; i < combinations.length; i++) {
    combinations[i] = combinations[i].sort();
}

console.log(combinations);