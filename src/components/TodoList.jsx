import { useState } from "react";
import { CreateSubmit } from "./CreateSubmit";
import { CompletedText, StBox, TodoButton } from "./style/styled";


const SAMPLE_TODOS = [
   { id: 1, text: "Buy milk" },
   { id: 2, text: "Clean the house" },
   { id: 3, text: "Go for a run" },
   { id: 4, text: "Finish homework" },
   { id: 5, text: "Call mom" },
   { id: 6, text: "Buy groceries" },
   { id: 7, text: "Walk the dog" },
   { id: 8, text: "Read a book" },
   { id: 9, text: "Do laundry" },
   { id: 10, text: "Write code" },
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
  



    return (
      <StBox>
        <CreateSubmit todos={todos} setTodos={setTodos}/>
        <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id}>
          <CompletedText completed={completed}>{text}</CompletedText> {/* 스타일 적용 */}
          <div>
            <TodoButton completed={completed} onClick={() => handleUpdate(id)}>
              {completed ? '취소하기' : '완료하기'}
            </TodoButton> {/* 스타일 적용 */}
          </div>
        </li>
      ))}
    </ul>
      </StBox>
    );
}
