// const brain = require('brain.js')
document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("data").innerHTML += `
${a}
${b} `
});
const net = new brain.NeuralNetwork({hiddenLayers :[3]});
const data = [
    {input : [1,0,0], output: [1]},
    {input : [0,1,1], output: [0]},
    {input : [1,0,1], output: [1]},
    {input : [1,1,1], output: [1]}
];
net.train(data);
// this is a method which takes in the data and trains the network
let a = net.run([0,0,0]);
let b = net.run([0,1,0]);
console.log(net.run([1,0,1]));
console.log(net.run([0,0,1]));
