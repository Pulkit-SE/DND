# DND
Project using React DND which has Image preview functionality

Run - 
1. Clone the project and run npm install command
2. npm start

Functionality supported - 
1. Reorder images by just dragging and dropping.
2. Image viewer component to preview images.

Specifications - 
I have used react-dnd library. It uses the useDrop hook to define a drop target. The accept option specifies the type of item that can be dropped on this target.
Inside the hover function, it determines whether the dragged item should be moved based on its position relative to the drop target.
It calculates the position of the dragged item and the drop target to determine whether the dragged item should be inserted before or after the current position of the drop target.
If the dragged item should be moved, it calls the moveCard function to update the position of the dragged item.
