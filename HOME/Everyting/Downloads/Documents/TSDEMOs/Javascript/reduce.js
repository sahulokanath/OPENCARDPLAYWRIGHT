const user = [

    { firstname: "Lokanath", lastname: "sahu", age: 26 },
    { firstname: "Raja", lastname: "sahu", age: 28 },
    { firstname: "sonu", lastname: "raj", age: 30 },
    { firstname: "sonu", lastname: "raj", age: 30 },
];

//get out ["Lokanth","Raja"] -->usign reduce 

//Here we are using chaning og filer and map
//filter will give use to whos is age <30 it will filter 
let output=user.filter(user=>user.age<30)
                .map(user=>user.firstname);//map will give user firstname 
console.log(output)

// Count the age which age is repting
let age = user.reduce(function (acc, curr) {

    //Here We are comparing the accumulator with current value of age 
    if (acc[curr.age]) {
        // the age is match update te age 
        acc[curr.age] = ++acc[curr.age]
    } else {
        acc[curr.age] = 1;
    }
    return acc;

}, {})

console.log(age)

let arr=[2,4,6,7,8,4,1];

//Here we are passing argument
let sum=arr.reduce((acc,curr)=>acc+curr ,0);

console.log(sum)