const inp = document.querySelector("#inp");
const but= document.querySelector('#but');
const duplicateField=document.querySelector('#duplicateField');

inp.addEventListener("keypress", (event)=> { 
    if (event.code != 'Enter') return;
    event.preventDefault();
    const userText = inp.value;
    inp.value='';
    duplicateField.textContent = userText;

})

but.addEventListener("click", (event)=> { 
    event.preventDefault();
    const userText = inp.value;
    inp.value='';
    duplicateField.textContent = '';
    console.log(userText);
})

