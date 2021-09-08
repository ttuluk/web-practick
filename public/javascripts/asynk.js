console.log('hi');

function sayHi() {
    console.log('hi function');

}

setTimeout(sayHi, 5000);
console.log('hello');

function myInterval() {
    console.log('interval hi');
};
const intervalLink = setInterval(myInterval, 2000);

clearInterval(intervalLink)

console.log(new Date);
console.log(Date.now());

const myBd = new Date('04.28.1988');
console.log(myBd);