import { useState } from "react";

export const CreateSubmit = ({todos, setTodos}) => {
   const [newTodos, setNewTodos ] = useState("");
   
   const handleSubmit = (e) => {
      e.preventDefault();
      
      if(!newTodos.trim()){
         return;
      }
      
      setTodos([{id: crypto.randomUUID(), text: newTodos}, ...todos]);
      setNewTodos("");
   }
   
   const handleInputChange = (e) => {
      setNewTodos(e.target.value);
   }
    return (
        <>
               <form onSubmit={handleSubmit}>
                  <input type="text" placeholder="리스트를 입력하세요" value={newTodos} onChange={handleInputChange} />
                  <button type="submit">등록</button>
               </form>
        </>
    );
}