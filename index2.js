document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("classifier").innerHTML += 
    `<form onsubmit="outputThis(event)" >
    <label> Is this sentence talking about hardware or software? Enter it and find out</label>
    <input type="text" id="textbox" >

    <input type="submit"  value="submit" value="">
   
    </form>
    Sentence: I fixed the power supply.<br>
   `
  
});
const network = new brain.recurrent.LSTM();
const trainingData = dataset.map(item=>({
    input: item.text,
    output: item.category
}))
network.train(trainingData,{
    iterations:50
})



function outputThis(event){
    event.preventDefault()
    console.log("this happened")
    let phrase = document.getElementById("textbox").value
let space = document.getElementById('output')
space.innerHTML+=`${network.run(phrase)}`
}

