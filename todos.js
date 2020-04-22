const todo = [{
    text: 'wash clothe',
    status: true
}, 
{
    text: 'make meals',
    status: true
},
{
    text: 'panick shopping',
    status: false
},
{
    text: 'spread news',
    status: true
},
{
    text: 'Move to new house',
    status: false
}]


//my method
// let i = 0;
// function getTodo (todo) {    
//     todo.forEach(function (todo) {
//         if (todo.status === false)
//         {
//             i = i + 1  
//         }       
//     });
// }
// getTodo(todo)
// console.log(i)
// const welcomeText = document.createElement('h1')
// welcomeText.textContent = `You have ${i} todo's left`
// document.querySelector('body').appendChild(welcomeText)
// var x;
// for (var z = 0;  z < todo.length; z++) {
//     x = document.createElement('p')
//     x.textContent = `${todo[z].text}`   
//     document.querySelector('body').appendChild(x)   
// }
//my method




// tutors method to search todo's

var filters = {
    searchText: '',
    hideCompleted: false
}
function searchTodo (todo, filters) {
    
    const filteredText =  todo.filter (function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    const incompleteTodos = filteredText.filter(function (todo) {
        return !todo.status
    })
    // to clear the div before redering stuff in it
    document.querySelector('#todo').innerHTML = ''
    const summary = document.createElement('h2')
    summary.textContent = `you have ${incompleteTodos.length} todos left`
    document.querySelector('#todo').appendChild(summary)

    
    if (!filters.hideCompleted) {
        filteredText.forEach (function (todo) {
            const p = document.createElement ('p')
            p.textContent = todo.text
            document.querySelector('#todo').appendChild(p)
        })
    }
    else {
        incompleteTodos.forEach (function (todo) {
            const i = document.createElement('p')
            i.textContent = todo.text
            document.querySelector('#todo').appendChild(i)
        })
    }
        

        
    
}
searchTodo (todo, filters)

document.querySelector('#search-todo').addEventListener('input', function (e) {
    filters.searchText =  e.target.value
    searchTodo (todo, filters)
    
})


//checkbox 
document.querySelector('#hideCompletedTodos').addEventListener('change', function(e) {
    filters.hideCompleted =  e.target.checked
    searchTodo (todo, filters)
})

// tutors method to search todo's


//forms 
document.querySelector('#todoForm').addEventListener('submit', function (e) {
    e.preventDefault()
    const a = e.target.elements.addNew.value
    // console.log(a)
    const b = {
        text: a,
        status: false
    }
    todo.push(b)
    searchTodo (todo, filters)
    e.target.elements.addNew.value = ''
})



// todo.forEach (function (todo) {
//     const p = document.createElement ('p')
//     p.textContent = todo.text
//     document.querySelector('#todo').appendChild(p)
// })


// document.querySelector('#add-todo').addEventListener('click', function(e) {
//     alert ('You are about to add another To- Do')
// })





//to remove any p tag with 'the' in it.
// const theRemover = document.querySelectorAll('p')
// theRemover.forEach(function(theRemover) {
//    if (theRemover.textContent.includes('the') ) {
//        theRemover.remove()
//    }
// })