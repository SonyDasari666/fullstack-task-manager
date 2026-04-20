import { useEffect, useState } from "react";

function Tasks() {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    const res = await fetch("https://task-backend-rfhc.onrender.com/api/tasks", {
      headers: { Authorization: token }
    });
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    if (token) fetchTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const addTask = async () => {
    if (!title.trim()) return;

    await fetch("https://task-backend-rfhc.onrender.com/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token
      },
      body: JSON.stringify({ title })
    });

    setTitle("");
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await fetch(`https://task-backend-rfhc.onrender.com/api/tasks/${id}`, {
      method: "DELETE",
      headers: { Authorization: token }
    });
    fetchTasks();
  };

  const toggleTask = async (id) => {
    await fetch(`https://task-backend-rfhc.onrender.com/api/tasks/${id}`, {
      method: "PUT",
      headers: { Authorization: token }
    });
    fetchTasks();
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>📝 Task Manager</h2>

        <div style={styles.inputBox}>
          <input style={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
          <button style={styles.addBtn} onClick={addTask}>Add</button>
        </div>

        {tasks.map(t => (
          <div key={t._id} style={styles.task}>
            <span style={{
              textDecoration: t.completed ? "line-through" : "none"
            }}>
              {t.title}
            </span>

            <div>
              <button style={styles.complete} onClick={() => toggleTask(t._id)}>
                {t.completed ? "Complete ✔" : "Incomplete ❌"}
              </button>

              <button style={styles.delete} onClick={() => deleteTask(t._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
  card: { width: "420px", padding: "25px", background: "white", borderRadius: "15px", boxShadow: "0 8px 25px rgba(0,0,0,0.2)" },
  inputBox: { display: "flex", gap: "10px", marginBottom: "15px" },
  input: { flex: 1, padding: "10px", borderRadius: "8px", border: "1px solid #ccc" },
  addBtn: { padding: "10px", background: "#007bff", color: "white", border: "none", borderRadius: "8px" },
  task: { display: "flex", justifyContent: "space-between", padding: "10px", background: "#f8f9fa", marginTop: "10px", borderRadius: "8px" },
  complete: { marginRight: "5px", background: "green", color: "white", border: "none", padding: "5px" },
  delete: { background: "red", color: "white", border: "none", padding: "5px" }
};

export default Tasks;