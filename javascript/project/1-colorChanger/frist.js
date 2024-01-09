const buttons=document.querySelectorAll('.button')
const body=document.querySelector('body')

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.id=== "grey"){
            body.style.backgroundColor = "grey"
            body.style.transition= "all linear 2s 0s"
        }else if (e.target.id=== "white") {
            body.style.backgroundColor = "white"
            body.style.transition= "all linear 2s 0s"
        }else if (e.target.id=== "blue") {
            body.style.backgroundColor = "blue"
            body.style.transition= "all linear 2s 0s"
        } else if(e.target.id=== "yellow") {
            body.style.backgroundColor = "yellow"
            body.style.transition= "all linear 2s 0s"
        }
    })
})