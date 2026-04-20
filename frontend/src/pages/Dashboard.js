import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/login");
  }, [navigate]);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1>🚀 Dashboard</h1>
        <p>Manage your tasks easily</p>

        <button style={styles.taskBtn} onClick={() => navigate("/tasks")}>
          Go to Tasks
        </button>

        <button style={styles.logout} onClick={() => {
          localStorage.clear();
          navigate("/login");
        }}>
          Logout
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
  card: { width: "350px", padding: "30px", background: "white", borderRadius: "15px", textAlign: "center", boxShadow: "0 8px 25px rgba(0,0,0,0.2)" },
  taskBtn: { width: "100%", padding: "12px", marginTop: "15px", background: "#28a745", color: "white", border: "none", borderRadius: "8px" },
  logout: { width: "100%", padding: "12px", marginTop: "10px", background: "#dc3545", color: "white", border: "none", borderRadius: "8px" }
};

export default Dashboard;