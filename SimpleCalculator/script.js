const button = document.querySelector('button');

button.addEventListener('click',()=>{

    //read the data 
    const input1 = document.getElementById('first');  //access the input
    const number1 =  Number(input1.value);                     // get the value 

    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);


    if(isNaN(number1) || isNaN(number2)){  //when num is not of number type
        return;
    }
    //output the result
    const result =(number1+number2);

    const res = document.getElementById('result');
    res.textContent = "Result: "+result;


})