// ここにJavaScriptコードを書く
const tarea = document.getElementById('tarea');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2')
const btn = document.getElementById('btn');
const result = document.getElementById('result');

btn.addEvebtListener('click',()=>{
    let findtxt = input1.Value;
    let reptxt = input2.Value;
    let tagtxt = tarea.value;

    findtxt = new RegExp(findtxt, '9');
    tagtxt = tagtxt,replace(findtxt, reptxt);

    result.innerText = tagtxt;
});