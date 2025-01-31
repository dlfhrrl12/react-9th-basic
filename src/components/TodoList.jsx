import { useState } from "react";
import { CreateSubmit } from "./CreateSubmit";
import { CompletedText, DeleteButton, StBox, TodoButton } from "./style/styled";


const SAMPLE_TODOS = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Build a Todo App" },
  { id: 3, text: "Deploy to Production" },
 ];

export const TodoList = () => {
  
  const [todos, setTodos] = useState(SAMPLE_TODOS);
  
  const handleUpdate = (id) => {
    const updatedTodos = todos.map((todo) => {
      if(todo.id === id) { return {...todo, completed: !todo.completed } }
      return todo;
    });
    setTodos(updatedTodos);
    }
  /**------------- delete -----------
   * const handleDelete = (id) => {
   *    const filteredTodos = todos.filter((todo) => {
   *      if(todo.id === id){
   *      return false;  
   *    }
   *    return true;
   *  });
   *  setTodos(filteredTodos);
   * }
   * 
   * 
   */
    const handleDelete = (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    }


    return (
      <StBox>
        <CreateSubmit todos={todos} setTodos={setTodos}/>
        <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id}>
          <CompletedText completed={completed}>{text}</CompletedText> 
          <div>
            <TodoButton completed={completed} onClick={() => handleUpdate(id)}>
              {completed ? '취소하기' : '완료하기'}
            </TodoButton>
            <DeleteButton onClick={() => handleDelete(id)}>
              삭제하기
            </DeleteButton>
          </div>
        </li>
      ))}
    </ul>
      </StBox>
    );
}
