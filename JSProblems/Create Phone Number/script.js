let result = document.querySelector('#result');

function createPhoneNumber(nums){
    return nums.join('').replace(/([0-9]{3})([0-9]{3})([0-9]{4})/, '($1) $2-$3');
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

result.innerHTML = 1;