document.addEventListener("DOMContentLoaded", function () {

	const formContainer = document.getElementById("form-container")
	const newListTitle = document.getElementById("add-list-input")
	const listsContainer = document.getElementById("lists-container")

	formContainer.addEventListener("submit", (e) => {
		e.preventDefault()
		if (e.target.id === "add-list-form") {
			let list = new List(newListTitle.value)
			list.appendToLists(listsContainer)
			let taskForm = $('#add-task-form')
			if (taskForm.length === 0){
				addNewTaskForm()
			}
			list.appendToSelect()
			newListTitle.value = ""
		} else if (e.target.id === "add-task-form") {
			let description = document.getElementById("new-task-description")
			let priority = document.getElementById("new-task-priority")
			let list = allLists[e.target.elements[0].value]
			let task = new Task(description.value, priority.value, list)
			task.appendLiToList()
			description.value = ""
			priority.value = ""
		}
	})

	listsContainer.addEventListener("click", (e) => {
		if (e.target.className === "delete-list"){
			$(`div#list-${e.target.dataset.id}`).remove()
			$(`option#option-${e.target.dataset.id}`).remove()
			allLists.splice(e.target.dataset.id, 1)
		} else if (e.target.className === "delete-item") {
			e.target.parentElement.remove()
			allTasks.splice(e.target.dataset.id,1)
			allLists[e.target.dataset.id].tasks.splice(e.target.dataset.id,1)
		}
	})
})