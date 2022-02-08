document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form")
  form.addEventListener("submit", (events) => {
    events.preventDefault()
    handleToDo(events.target.newTaskDescription.value)

   form.reset()
  })
});

function handleToDo(todo) {
  //create a p element
  let p = document.createElement("p")
  p.textContent = `${todo} `

  
  // create the 'done' button and add function
  let bttn = document.createElement("button")

  bttn.addEventListener("click", () => {
    p.remove()
  })

  bttn.textContent = "Done"




//add to todo list 
  p.appendChild(bttn)
  document.querySelector("#list").appendChild(p)

  console.log(p)

}

