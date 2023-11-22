
const userTextField = document.querySelector("#userTextField");

userTextField.addEventListener("click", (event)=> { 
    event.preventDefault();
    const userText = prompt('Введите текст');
    userTextField.textContent = userText;
    console.log('Текст в блоке с id userTextField изменён на', userText);
})