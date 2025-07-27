import React from 'react'

const CreateTodo = () => {

    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [completed, setCompleted] = React.useState(false);

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
                value={title}
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            /><br/>
            <label style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                <input
                    type="checkbox"
                    style={{ marginRight: "8px" }}
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                /> Completed
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

                onClick={() => {
                    fetch('http://localhost:3000/todo', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            title: title,
                            description: description,
                            completed: completed
                        }),
                    }).then(async (res) => {
                        const data = await res.json();
                        if (res.status === 201) {
                            console.log('Todo created successfully:', data);
                            alert('Todo created successfully');
                            setTitle('');
                            setDescription('');
                            setCompleted(false);
                        } else {
                            console.error('Error creating todo:', data);
                        }
                    }).catch((error) => {
                        console.error('Error:', error);
                    });
                }}
            >
                Add Todo
            </button>
        </div>
    )
}

export default CreateTodo
