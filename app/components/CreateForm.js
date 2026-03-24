"use client";

import { useState } from "react";
import styles from "../page.module.css";

// CreateForm 將新創建的待辦事項添加到待辦清單中
export default function CreateForm({ addTodo }) { 
  const [content, setContent] = useState(""); 

// 表單提交處理
  const handleSubmit = (e) => {
    e.preventDefault(); // 取消事件的預設行為，這樣頁面才不會重新加載
    addTodo(content);
    setContent("");
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
      <button type="submit">
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
}
