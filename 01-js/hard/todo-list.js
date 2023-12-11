/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  list=[]
  Constructor(){
    this.list=[]
  }
  add(todo){
    this.list.push(todo)
  }

  remove(ind){
    this.list.splice(ind,1)
  }

  update(ind,updatedTodo){
    this.list[ind]=updatedTodo
  }

  getAll(){
    return this.list
  }

  get(ind){
    return this.list[ind]
  }

  clear(){
    this.list=[]
  }
}

const todo=new Todo()
todo.add("da")
todo.add("daqq")
todo.add("dawewe")

todo.update(2,"hello")
console.log(todo.list);
console.log(todo.get(2));

module.exports = Todo;
