document.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("classifier").innerHTML += 
    `<form onsubmit="outputThis(event)" >
    <label> Is this sentence talking about hardware or software? Enter it and find out</label>
    <input type="text" id="textbox" value="" >

    <input type="submit"  value="submit" >
   
    </form>
    
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
    console.log(phrase)
let space = document.getElementById('output')
let result = network.run(phrase)
console.log(result)
space.innerHTML=` ${phrase}: sounds like a ${result} sentence`
}

