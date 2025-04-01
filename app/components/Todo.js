import EditForm from "./EditForm";
import styles from "../page.module.css";

//  Todo 元件:負責渲染單個待辦事項，並根據 isEditing 切換顯示模式
export default function Todo({
  todo,
  deleteTodo,
  toggleCompleted,
  toggleIsEditing,
  editTodo
}) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div
      className={`${styles.todo} ${todo.isCompleted ? styles.completed : ""}`} // 如果 todo.isCompleted 為 true，則加入 styles.completed 樣式
    >
      <div className={styles.checkbox}>
        <i
          className={`bi ${
            todo.isCompleted ? "bi-check-square-fill" : "bi-square"
          }`}
          onClick={() => toggleCompleted(todo.id)}
          style={{ cursor: "pointer", marginRight: "10px" }}
        ></i>
        <p> {todo.content}</p>
      </div>
      <div>
        <i
          className="bi bi-pencil"
          style={{ cursor: "pointer" }}
          onClick={() => {
            toggleIsEditing(todo.id);
          }}
        ></i>
        <i
          className="bi bi-x"
          style={{ cursor: "pointer", marginLeft: "10px" }}
          onClick={() => {
            deleteTodo(todo.id);
          }}
        ></i>
      </div>
    </div>
  );
}
