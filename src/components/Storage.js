const STORAGE_KEY = 'todo-react';

const Storage = {
  
  getTodos() {
    const ls = window.localStorage[STORAGE_KEY];
    const todos = (ls === 'undefined') ? '[]' : ls;
    return JSON.parse(todos);
  },

  saveTodos(todos) {
    window.localStorage[STORAGE_KEY] = JSON.stringify(todos);
  }

};

export default Storage;
