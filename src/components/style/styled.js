import styled from "styled-components";

export const StBox = styled.div`
  display: flex; // flex 선언
  flex-direction: column; // 세로로 정렬
  justify-content: center; // 세로 가운데 정렬
  align-items: center; // 가로 가운데 정렬
  height: 100vh; // 100vh는 화면 전체 높이의 100%를 의미
`

export const CompletedText = styled.p`
   text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
`

export const TodoButton = styled.button`
  background-color: ${(props) => (props.completed ? 'red' : 'green')};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`

export const DeleteButton = styled.button`
  background-color: red;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
`