//forEach
let colors = ['red', 'orange', 'green', 'blue'];
colors.forEach(function(color){
    console.log(color);
})

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(function(number){
    sum+=number;
});
console.log(sum);

//another way to write the above code
sum = 0;
function adder(num){
    sum+=num;
}
numbers.forEach(adder);
console.log(sum);