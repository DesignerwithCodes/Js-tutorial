const name = "mayuresh"
const stream ="CSE"
console.log(name + stream);
// console.log('hello my name is ${name} and my stream is ${stream}');

const gamename = new String("Mayur-P")
console.log(gamename[0]);
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf("u"));

const newstring =gamename.slice(0,4)
console.log(newstring);

const newstring_1 = "   Mayuresh   " 
// can be use for user signup 
console.log(newstring_1.trim());

const url ="https://mayur.com/mayur%20pawar"
console.log(url.replace('%20','-'))


console.log(url.includes('mayur'));




