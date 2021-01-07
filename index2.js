
const network = new brain.recurrent.LSTM();
const trainingData = dataset.map(item=>({
    input: item.text,
    output: item.category
}))
network.train(trainingData,{
    iterations:50
})
const output = network.run('I fixed the power supply.')
console.log(`Category: ${output}`)
console.log("stuck")