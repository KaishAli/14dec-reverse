let input = document.getElementById('in');

let btn = document.createElement('button')

btn.innerText = "Click to reverse ";



let div =  document.getElementById('container');
div.appendChild(btn);

let answ = document.createElement("p");

div.appendChild(answ);


btn.addEventListener("click",reverseNum);


function reverseNum(){
    let rev_num = "";
    let num = (input.value);
    for(let i = num.length-1;i>=0;i--){
        rev_num += num[i];
    }
    if(parseInt(rev_num)){
        answ.innerText = "Your Reversed Number is: "+ rev_num;
    }else {
        answ.innerText = "Your Reversed String is: "+ rev_num;
    }
}