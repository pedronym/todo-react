
# Todo App - React

Just a small exercise to grasp the basics of the react way of doing things.

This project also uses Bulma to give me a sane baseline of styles although it has some minor custom SCSS.

## How to run

`npm start` for development with webpack livereload

`npm build` to generate a production ready version

## File Structure

### App entry point:

`src/index.js`

### Main component responsible for managing the other components state:

`src/App.js`


### TodoInput

`components/TodoInput`

Handles the input field. When the value inside the input is submitted it calls the add() method passed as props from App.js and clears the field.

### TodoList

`components/TodoList`

Represents the todo listing and updates itself when the todos array changes.

### TodoFilters

`components/TodoFilters`

Changes the visibility of the todos. The available filters are 'All', 'Active' and 'Completed'

### Storage

`components/Storage`

Uses LocalStorage to save and get the todos

######

Still some features I would like to add:

- CSS and component transitions

- Draggable TodoListItem instances

- Add Due Date option to TodoListItem instances

- Add Todo sort by date