// number is positive or negative or zero

let input = document.querySelector("input")
let form = document.querySelector("form")
let output = document.getElementById("output")


function checkNum(e){
    e.preventDefault()
    let number = input.value

    if(number>0){
        output.value="Entered number "+ number +" is Positive"
    }
    else if(number==0){
        output.value="Entered number "+ number +" is Neutral(zero)"
    }
    else{
        output.value="Entered number "+ number +" is Negative"
    }
}

form.addEventListener("submit" , checkNum)

