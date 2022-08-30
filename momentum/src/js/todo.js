import imageThreePoints from '../assets/svg/three-points.svg'

const todoButton = document.querySelector('.todo-button')
const todoBody = document.querySelector('.todo-body')
const newTodo = document.querySelector('.new-todo')
const emptyTitle = document.querySelector('.empty-title')
const todoInput = document.getElementById('todo-input')
const todoItems = document.querySelector('.todo-items')
let isOpen = false

const todo = () => {
    const todoItem = document.querySelectorAll('.todo-item')
    if (isOpen === false) {
        todoBody.style.display = 'flex'
        if (todoItem.length === 1) {
            todoInput.style.display = 'flex'
        }
        isOpen = true
    } else if (isOpen === true) {
        todoBody.style.display = 'none'
        todoInput.style.display = 'none'
        isOpen = false
    }
}

const addInputTodo = () => {
    newTodo.style.display = 'none'
    emptyTitle.style.display = 'none'
    todoInput.style.display = 'flex'
}

const addTodoItem = (e) => {
    if (e.key === 'Enter') {
        const li = document.createElement('li')
        const p = document.createElement('p')
        const input = document.createElement('input')
        const buttonContainer = document.createElement('div')
        const button = document.createElement('button')
        const addButtonRemove = document.createElement('button')

        li.classList.add('todo-item')
        li.style.display = 'flex'
        li.style.alignItems = 'center'
        li.style.padding = '5px'
        li.style.textAlign = 'left'
        p.textContent = todoInput.value
        p.style.paddingLeft = '10px'
        input.type = 'checkbox'
        input.classList.add('todo-checkbox')
        input.style.float = 'left'
        buttonContainer.classList.add('button-container')
        buttonContainer.style.display = 'flex'
        buttonContainer.style.alignItems = 'center'
        buttonContainer.style.marginLeft = 'auto'
        buttonContainer.style.height = '40px'
        button.classList.add('item-settings')
        button.classList.add('off')
        button.style.backgroundImage = `url("${imageThreePoints}")`
        button.style.filter = 'invert(100%)'
        button.style.border = 'none'
        button.style.width = '15px'
        button.style.height = '15px'
        button.style.borderRadius = '30px'
        button.style.cursor = 'pointer'
        addButtonRemove.classList.add('button-remove')
        addButtonRemove.classList.add('on')
        addButtonRemove.textContent = 'Delete To do'
        addButtonRemove.style.width = '90px'
        addButtonRemove.style.height = '30px'
        addButtonRemove.style.position = 'relative'
        addButtonRemove.style.right = '10px'
        addButtonRemove.style.borderRadius = '5px'
        addButtonRemove.style.opacity = '.8'
        addButtonRemove.style.transition = '300ms'
        addButtonRemove.style.color = 'white'
        addButtonRemove.style.backgroundColor = 'black'
        addButtonRemove.style.border = 'solid 1px'
        addButtonRemove.style.cursor = 'pointer'
        addButtonRemove.style.display = 'none'
        li.append(input)
        li.append(p)
        li.append(buttonContainer)
        buttonContainer.append(addButtonRemove)
        buttonContainer.append(button)
        todoItems.append(li)
        todoInput.value = ''
    }
}

const checking = () => {
    const todoItem = document.querySelectorAll('.todo-item')
    const todoCheckbox = document.querySelectorAll('.todo-checkbox')

    for (let i = 0; i < todoItem.length; i++) {
        todoCheckbox[i].checked ? todoItem[i].style.textDecoration = 'line-through' : todoItem[i].style.textDecoration = 'none'
    }
}

const toggleSettingItem = (el) => {
    const itemSettings = document.querySelectorAll('.item-settings')
    const addButtonRemove = document.querySelectorAll('.button-remove')
    if (el.target && el.target.matches('.item-settings')) {
        let changeItem = el.target
        changeItem.classList.toggle('on');
        changeItem.classList.toggle('off');
        for (let i = 0; i < itemSettings.length; i++) {
            if (itemSettings[i].className === 'item-settings on') {
                addButtonRemove[i].style.display = ''

            } else if (itemSettings[i].className === 'item-settings off') {
                addButtonRemove[i].style.display = 'none'
            }
        }
    }
}

const removeItem = (el) => {
    const addButtonRemove = document.querySelectorAll('.button-remove')
    const todoItem = document.querySelectorAll(".todo-item")
    if (el.target && el.target.matches('.button-remove')) {
        let changeItem = el.target
        changeItem.classList.toggle('on');
        changeItem.classList.toggle('off');
        for (let i = 0; i < addButtonRemove.length; i++) {
            if (addButtonRemove[i].className === 'button-remove off') {
                todoItem[i].remove(addButtonRemove)
            }
        }
        if (todoItem.length === 1) {
            newTodo.style.display = ''
            emptyTitle.style.display = ''
            todoInput.style.display = 'none'
        }
    }
}

todoButton.addEventListener('click', todo)
newTodo.addEventListener('click', addInputTodo)
todoInput.addEventListener('keypress', addTodoItem)
todoItems.addEventListener('click', checking)
todoItems.addEventListener('click', toggleSettingItem)
todoItems.addEventListener('click', removeItem)