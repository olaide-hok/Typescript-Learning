// Drop and Drag Interfaces which can be used as a construct on a class
namespace App {
  export interface Draggable {
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(event: DragEvent): void;
  }

  export interface DragTarget {
    dragOverHandler(event: DragEvent): void; // Permits the drop
    dropHandler(event: DragEvent): void; // Handles the drop
    dragLeaveHandler(event: DragEvent): void; // Updates UI
  }
}
