import React from 'react'

const CreateTodo = () => {
    return (
        <div style={{
            maxWidth: "400px",
            margin: "40px auto",
            padding: "24px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "#fafafa",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
        }}>
            <input
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px"
                }}
                type="text"
                placeholder="Title"
            /><br/>
            <input
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "12px",
                    border: "1px solid #ccc",
                    borderRadius: "4px"
                }}
                type="text"
                placeholder="Description"
            /><br/>
            <label style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                <input type="checkbox" style={{ marginRight: "8px" }} /> Completed
            </label>
            <button
                type="submit"
                style={{
                    width: "100%",
                    padding: "10px",
                    background: "#1976d2",
                    color: "#fff",
                    border: "none",
                    borderRadius: "4px",
                    fontWeight: "bold",
                    cursor: "pointer"
                }}
            >
                Add Todo
            </button>
        </div>
    )
}

export default CreateTodo
