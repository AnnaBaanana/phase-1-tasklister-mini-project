//locate our submit event and its value
const handleSubmit = function() {
  const form = document.querySelector('form')
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTask = e.target[0].value
    const list = document.querySelector('#tasks')
    const li = document.createElement('li')
    const btn = document.createElement('button')
    const ddl = document.createElement('SELECT')
    const opt1 = document.createElement('option')
    const opt2 = document.createElement('option')
    li.textContent = newTask
    btn.textContent = " X"
    opt1.text = "High"
    opt2.text = "Medium"
    ddl.add(opt1)
    ddl.add(opt2)
    btn.className = "button"
    li.append(btn, ddl)
    btn.addEventListener('click', () => {
      li.remove()
    })
    list.append(li)
    form.reset()
  })
}

handleSubmit()

