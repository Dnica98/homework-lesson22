
const toDoList=[]


const addToDoInput = document.getElementById('addToDoInput')
const addToDoBtn = document.getElementById('addToDoBtn')
const toDoListWrapper = document.getElementById('toDoList')
const completedToDo = document.getElementById('completedtoDo')

const renderList = () =>{
    toDoListWrapper.innerHTML = ''
    completedToDo.innerHTML = ''

    toDoList.forEach((item)=> {
        const itemParent = document.createElement('div')
        itemParent.classList.add('listItem')
        const p = document.createElement('p')
        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'
        checkBox.checked = item.done
        p.innerText = item.title

        itemParent.appendChild(checkBox)
        itemParent.appendChild(p)


        const parent = item.done ? completedToDo : toDoListWrapper
        parent.appendChild(itemParent)
    });
}

const addToDo =() =>{
    if(toDoList.includes(addToDoInput.value)) return alert('to do name should be uniq')
    
    
    toDoList.push({title: addToDoInput.value, done: true})
    addToDoInput.value = ''
    renderList()
    
}

addToDoBtn.addEventListener('click', addToDo)



