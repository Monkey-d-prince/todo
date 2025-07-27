
export function Todos({ todos, onMarkCompleted }) {
    return (
        <div style={{
            maxWidth: "600px",
            margin: "40px auto",
            padding: "24px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#fafafa",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
            <h2>Todo List</h2>
            {todos.map(todo => (
                <div key={todo._id} style={{
                    padding: "12px",
                    marginBottom: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    background: todo.completed ? "#e0f7fa" : "#fff"
                }}>
                    <h3>{todo.title}</h3>
                    <p>{todo.description}</p>
                    <p>Status: {todo.completed ? "Completed" : "Pending"}</p>
                    {!todo.completed && (
                        <button onClick={() => onMarkCompleted(todo._id)}>
                            Mark  Completed
                        </button>
                    )}
                </div>
            ))}
        </div>
    )
}