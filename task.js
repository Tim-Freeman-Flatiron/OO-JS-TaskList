let allTasks = []
class Task {
	constructor(description, priority, list) {
		this.description = description
		this.priority = priority
		this.list = list
		this.id = list.tasks.length
		list.tasks.push(this)
		allTasks.push(this)
	}

	createLi() {
		let li = document.createElement('li')
		li.dataset.id = this.id
		li.className = 'list-item'
		li.innerHTML =
		`<button data-id=${this.id} class="delete-item">x</button>
		${this.description}, ${this.priority} 
		`
		return li
	}

	appendLiToList() {
		$(`div#list-${this.list.id} ul`).append(this.createLi())
	}

}