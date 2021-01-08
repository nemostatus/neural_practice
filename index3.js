ocument.addEventListener("DOMContentLoaded", function() { 
    document.getElementById("popularnames").innerHTML += 
    `<form onsubmit="checkname(event)" >
    <label> Is this baby name popular? Enter it and find out!</label>
    <input type="text" id="namestextbox" value="" autocomplete = "off" >

    <input type="submit"  value="submit" >
   
    </form>
    
   `
  
});
const network = new brain.recurrent.LSTM();
const trainingData = babynameobjects.map(item=>({
    input: item.text,
    output: item.category
}))
network.train(trainingData,{
    iterations:50
})



function checkname(event){
    event.preventDefault()
    console.log("this happened too ")
    let namephrase = document.getElementById("namestextbox").value
    console.log(namephrase)
let namespace = document.getElementById('popularnameoutput')
let nameresult = network.run(namephrase)
console.log(nameresult)
if(nameresult == ""){
    namespace.innerHTML = "The neural network could not process your order, thank you come again"
}
else{
namespace.innerHTML=` ${namephrase}: sounds like a ${nameresult} baby name.`
}
}

