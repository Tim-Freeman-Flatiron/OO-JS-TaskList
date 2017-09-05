const allLists = []

class List {
	constructor(title) {
		this.title = title
		this.tasks = []
		this.id = allLists.length
		allLists.push(this)
	}
	createNode() {
		let list = document.createElement('div')
		list.id = `list-${this.id}`
		list.className = 'list'
		list.innerHTML = 
		`<h2 data-id="${this.id}">
				<button data-id=${this.id} class="delete-list">x</button>
				${this.title}
			</h2>
			<ul data-id="${this.id}"></ul>
		`
		return list
	}

	appendToLists(parentDiv) {
		let node = this.createNode()
		parentDiv.appendChild(node)
	}

	appendToSelect() {
		document.getElementsByTagName('select')[0].appendChild(this.createSelectOption())
	}

	createSelectOption() {
		const option = document.createElement("option")
		option.value = `${this.id}`
		option.id = `option-${this.id}`
		option.dataset.id = `${this.id}`
		option.innerText = `${this.title}`
		return option
	}



}