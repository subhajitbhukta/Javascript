const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML="<span>Please give a valid height</span>"
    }else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML="<p>Please give a valid weight</p>"
    }else{
      const bmi=(weight / ((height * height) / 10000)).toFixed(2)
      results.innerHTML=`${bmi}`
    }

    // if(bmi<18.6){

    // }else if{

    // }
})