import { useState } from "react";
import styles from "../page.module.css";

// EditForm 負責編輯待辦事項的內容
export default function EditForm({ todo, editTodo }) {
  const [content, setContent] = useState(todo.content);
  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, content); // 編輯指定 id 的待辦事項，並將 content（新的內容）傳遞給 editTodo 函式
  };
  return (
    <form className={styles.createForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入待辦事項"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">完成</button>
    </form>
  );
}
