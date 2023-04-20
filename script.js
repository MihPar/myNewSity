/* Инициализируем переменные */

const btn = document.querySelector('.btn')
const name = document.getElementById('name')
const lastName = document.getElementById('lastname')
const telephon = document.getElementById('telephon')
const email = document.getElementById('email')
const question = document.getElementById('question')
const ul = document.querySelector('.list')
// ul.scrollTop = 9999;

/* Событие на форму */

btn.addEventListener('click', send)

function send() {
    const nameValue = name.value
    const lastNameValue = lastName.value
    const telephonValue = telephon.value
    const emailValue = email.value
    const questionValue = question.value
    const li = document.createElement('li')
    li.innerText = `${nameValue} ${lastNameValue} 
    \n телефон: ${telephonValue}
    \n email: ${emailValue}
    \n Вопрос: ${questionValue}`
    ul.appendChild(li)
    name.value = ''
    lastName.value = ''
    telephon.value = ''
    email.value = ''
    question.value = ''
    window.scrollTo(0, document.body.scrollHeight)
}

