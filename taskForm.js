function addNewTaskForm() {
	
	const newForm = document.createElement("form")
	newForm.id = "add-task-form"
	newForm.autocomplete = "off"
	newForm.innerHTML = 
		`<label>Select List:</label>
		<select></select>
		<label>Task Description:</label>
		<input type="text" id="new-task-description" placeholder="description"></input>
		<label>Priority Level:</label>
		<input type="text" id="new-task-priority" placeholder="priority"></input>
		<input type="submit" value="(+) add">
		`
	const formContainer = document.getElementById("form-container")
	formContainer.appendChild(newForm)
}