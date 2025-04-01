"use client";

import { useState, useEffect, useRef } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";
import styles from "../page.module.css";

// TodoWrapper 負責管理待辦事項的狀態與邏輯，包括新增、刪除、切換完成狀態等
export default function TodoWrapper() {
  // 儲存待辦事項陣列
  const [todos, setTodos] = useState([
    {
      content: "Learn React.js",
      id: Math.random(), // 產生唯一 ID
      isCompleted: false, // 是否完成
      isEditing: false, // 是否編輯
    },
    {
      content: "Learn Golang",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
    {
      content: "Learn Docker",
      id: Math.random(),
      isCompleted: false,
      isEditing: false,
    },
    {
      content: "Learn soming else",
      id: Math.random(),
      isCompleted: true,
      isEditing: false,
    },
  ]);

  // 控制排序切換
  const [isSorted, setIsSorted] = useState(false);

  // 用來儲存滾動容器的參考
  const todoListRef = useRef(null); // useRef：獲取 DOM 節點

  // 新增待辦事項
  const addTodo = (content) => {
    setTodos([
      ...todos, // 保留原本的 todos
      {
        content,
        id: Math.random(),
        isCompleted: false,
        isEditing: false,
      },
    ]); // 創立新陣列
  };

  // 刪除待辦事項
  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        // 過濾陣列
        return todo.id !== id; // 回傳 todo.id 不等於目標 id 的項目
      })
    );
  };

  // 切換完成狀態
  const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        // 透過 map 產生新陣列，找到對應 id 的項目
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted } // 如果 id 相等，反轉 isCompleted
          : todo; // 如果不相等，保持原狀，直接回傳該 todo
      })
    );
  };

  // 切換編輯模式
  const toggleIsEditing = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo;
      })
    );
  };

  // 編輯待辦事項
  const editTodo = (id, newContent) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, content: newContent, isEditing: false } // 更新 newContent 為新的內容並關閉編輯
          : todo;
      })
    );
  };

  // 切換排序
  const handleToggleSort = () => {
    setIsSorted(!isSorted); // 當切換開關時，更新 isSorted 狀態
  };

  // 排序邏輯：根據 isSorted 決定顯示順序
  const sortedTodos = isSorted
    ? [...todos].sort((a, b) => a.isCompleted - b.isCompleted) // sort() 排序。已完成的放後面
    : todos; // 維持原本的順序

  // 計算已完成的事項數量
  // 使用 filter() 過濾出已完成的事項，然後使用 length 獲得已完成事項的數量
  const completedCount = todos.filter((todo) => todo.isCompleted).length;
  // 代表待辦事項的總數
  const totalCount = todos.length;
  // (已完成事項數量 / 總事項數量) * 100，並使用 Math.round() 將結果四捨五入至整數
  const completionRate =
    totalCount === 0 ? 0 : Math.round((completedCount / totalCount) * 100);

  // 自動滾動到最下方
  useEffect(() => {
    if (todoListRef.current) {
      // current 是用來存取 ref 中的 DOM 元素
      // 獲取滾動條當前的位置
      todoListRef.current.scrollTop = todoListRef.current.scrollHeight; // 返回容器的整個內容高度，滾動條移動到最底部
    }
  }, [todos]); // 每次 todos 更新時都會觸發滾動

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Todo List</div>
      <div className={styles.text}>Add things to do</div>
      <hr />
      {/* 顯示進度條與完成百分比 */}
      <div style={{ margin: "20px 0 10px 0" }}>
        <div className={styles.rate}>
          <div style={{ marginRight: "10px" }}>{completionRate}%</div>
          <div className={styles.strip}>
            <div
              className={styles.progressRate}
              style={{
                width: `${completionRate}%`, // 根據completionRate 的數值設定元素的寬度
              }}
            />
          </div>
        </div>
      </div>
      <div className={styles.more} ref={todoListRef}>
        {sortedTodos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              deleteTodo={deleteTodo}
              toggleCompleted={toggleCompleted}
              toggleIsEditing={toggleIsEditing}
              editTodo={editTodo}
            />
          );
        })}
      </div>
      <hr />
      <div className={`justify-content-end ${styles.checkbox}`}>
        <div className={styles.text}>Move done things to end?</div>
        <div className="form-check form-switch ms-2">
          <input
            className={`form-check-input ${styles.switch}`}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            onChange={handleToggleSort}
            checked={isSorted}
          ></input>
        </div>
      </div>
      <div className={styles.addList}>Add to list</div>
      <CreateForm addTodo={addTodo} />
    </div>
  );
}
