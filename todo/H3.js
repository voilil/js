const input = document.querySelector("#input");
const btn = document.querySelector("#btn");
const result = document.querySelector("#result");
var el = total.getElementsByTagName('total');

btn.addEventListener('click', (e) => {
    if (input.value === '') return
    createDeleteElements(input.value)
    input.value = ''
})
function  createDeleteElements(value) {
    i++
    const li = document.createElement('li')
    const btn = document.createElement('button')

    li.className = 'li'
    li.textContent = value

    btn.className = 'btn'
    btn.textContent = 'add'
    li.appendChild(btn)

    btn.addEventListener('click', (e) => {
        i--
        total.textContent = i
        result.removeChild(li)
    })

    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })

    total.textContent = i
    result.appendChild(li)
}