

const net = new.brain.NeuralNetwork({hiddenLayers :[3]}); //a var named net set to 
//..not sure. a neural net o 3 functions? idk im currently reading up on this 1st line
//2 input 1 output... so 1 instance of a neural net that takes 2 input  1 output
// this variable below looks like an array of objects making up the hiddenlayers
const Data = [
    {input : [0,0], output: [0]},
    {input : [0,1], output: [1]},
    {input : [1,0], output: [1]},
    {input : [1,1], output: [0]}
];
net.train(Data);
console.log(net.run([0,0]));
console.log(net.run([0,1]));
console.log(net.run([1,0]));
console.log(net.run([0,0]));