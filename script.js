// let numbers = [5, 25, 89, 120, 36]
// numbers.push('javascrip', 'python');
// numbers.unshift('html', 'css')
// console.log(numbers.length)

// let numbers = [5, 25, 89, 120, 36]
// numbers.push('javascrip', 'python');
// numbers.unshift('html', 'css')
// numbers.shift()
// numbers.pop()
// console.log(numbers)

// let fruits = ['orange', 'banana', 'pear']
// console.log(fruits.length)

// let fruits = ['orange', 'banana', 'pear']
// fruits.push('apple', 'pinapple');
// fruits.unshift('watermelon');
// console.log(fruits.length)

// let fruits = ['orange', 'banana', 'pear']
// fruits.push('apple', 'pinapple');
// fruits.unshift('watermelon');
// fruits.splice(2, 0, 'mango');
// fruits.pop();
// fruits.shift();
// console.log(fruits.length)

// let cars = {
//     name: 'toyota',
//     age: 10,
//     type: 'sedan',
//     country: 'japan'
// };

// Object.keys(cars).forEach((x) => {
//     console.log(x);
    
// });


// let fruits = {
//     name: 'banana',
//     color: 'yellow',
//     price: 5
// };
// Object.values(fruits).forEach( y =>{
//     console.log(y);
// })

// let arrey = [12, 25, 3, 6, 8, 14, 7, 23]
// let newarrey = arrey.map( x => x / 3);
// console.log(newarrey);

// let arrey = [12, 25, 3, 6, 8, 14, 7, 23]
// let newarrey = arrey.map( y => Math.pow(y, 3))
// console.log(newarrey);


// let arrey = ['hello', 125, 'javascript', 'html', 43, 'css', 'scss', 'bootstrap', 88, 59, 'python'];
// let newarrey = arrey.filter(z => z > -1);
// console.log(newarrey);


let newdiv = document.createElement('div')
newdiv.setAttribute('id', 'testdiv');
newdiv.style.width = '250px';
newdiv.style.height = '200px';
newdiv.style.backgroundColor = 'green';
document.getElementById('test').appendChild(newdiv)


 let newateg = document.createElement('a');
 newateg.setAttribute('class', 'wraper');
 newateg.setAttribute('href','https://www.google.com');
 newateg.setAttribute('target', '_blank');
 newateg.textContent = 'GOOGLE';
 newateg.style.textDecoration = 'none';
 newateg.style.color = 'red';
 newateg.style.fontSize = '30px';

document.getElementById('testdiv').appendChild(newateg)


let newfooter = document.createElement('footer');
newfooter.setAttribute('class', 'footer-box');
newfooter.setAttribute('id', 'footerid');
newfooter.style.backgroundColor = 'aqua';
newfooter.style.width = '500px';
newfooter.style.height = '300px'

document.body.appendChild(newfooter)