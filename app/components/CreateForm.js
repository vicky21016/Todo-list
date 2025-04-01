"use client";

import { useState } from "react";
import styles from "../page.module.css";

// CreateForm 將新創建的待辦事項添加到待辦清單中
export default function CreateForm({ addTodo }) { 
// useState 狀態管理
// content 儲存待辦事項輸入框中的值。setContent 更新狀態。
// 初始值設定為空字串 ""，輸入框的預設內容為空。
  const [content, setContent] = useState(""); 

// 表單提交處理
  const handleSubmit = (e) => {
    e.preventDefault(); // 取消事件的預設行為，這樣頁面才不會重新加載
    addTodo(content); // 呼叫父組件傳遞過來的 addTodo 函數，並將 content 作為參數傳遞過去，這樣父組件可以處理並添加這個待辦事項。
    setContent(""); // 清空輸入框，讓使用者可以再次輸入
  };

  return (
    // 綁定 onSubmit 事件到 handleSubmit，當表單提交時會觸發 handleSubmit 函數。
    <form className={styles.createForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入待辦事項"
        value={content} // 輸入框顯示當前的 content 值
        // 當 input 的值發生改變時執行 onChange 事件，並使用 setContent 更新 content 狀態為當前輸入框的值。
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
