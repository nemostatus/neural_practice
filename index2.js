document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("classifier").innerHTML += 
    `<form>
    <label> Is this sentence talking about hardware or software? Enter it and find out</label>
    <input type="text" id="textbox">

    <input type="submit" id="textbox" value="submit">
   
    </form>
    Sentence: I fixed the power supply.<br>
     - Category: ${output}`
   
});
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
