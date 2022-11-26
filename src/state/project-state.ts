namespace App {
  // Project State Management

  // Generic Custom type for Listeners
  type Listener<T> = (items: T[]) => void;

  // Reusable State Class
  class State<T> {
    protected listeners: Listener<T>[] = []; // An array of function references.
    // 'protected' keyword is another access modifier similar to 'private' but also allows for access in inheriting classes.

    addListeners(listenerFn: Listener<T>) {
      this.listeners.push(listenerFn);
    }
  }

  export class ProjectState extends State<Project> {
    private constructor() {
      super();
    }

    private projects: Project[] = [];
    private static instance: ProjectState;

    static getInstance() {
      if (this.instance) {
        return this.instance;
      }
      this.instance = new ProjectState();
      return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
      const newProject = new Project(
        Math.random().toString(),
        title,
        description,
        numOfPeople,
        ProjectStatus.Active
      );

      this.projects.push(newProject);
      this.updateListeners();
    }

    moveProject(projectId: string, newStatus: ProjectStatus) {
      const project = this.projects.find((prj) => prj.id === projectId);
      if (project && project.status !== newStatus) {
        project.status = newStatus;
        this.updateListeners();
      }
    }

    private updateListeners() {
      for (const listenerFn of this.listeners) {
        listenerFn(this.projects.slice());
      }
    }
  }
  // Global Project State instance
  export const projectState = ProjectState.getInstance(); // This ensures only one instance of this state manager is created.
}
