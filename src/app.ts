class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement
        this.hostElement = document.getElementById('app')! as HTMLDivElement

        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLFormElement

        // Adds the 'user-input' id to the form div
        this.element.id = 'user-input'

        // Page Input Elements
        this.titleInputElement = document.querySelector('#title') as HTMLInputElement
        this.descriptionInputElement = document.querySelector('#description') as HTMLInputElement
        this.peopleInputElement = document.querySelector('#people') as HTMLInputElement

        this.attach()
    }
    
    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element)
    }
}

const projectInput = new ProjectInput()