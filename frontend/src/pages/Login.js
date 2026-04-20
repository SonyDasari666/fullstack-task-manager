import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
     
    const res = await fetch("https://task-backend-rfhc.onrender.com/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>🔐 Login</h2>

        <form onSubmit={handleLogin}>
          <input style={styles.input} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input style={styles.input} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

          <button style={styles.button}>Login</button>
        </form>

        <p>New user? <Link to="/">Signup</Link></p>
      </div>
    </div>
  );
}

const styles = {
  container: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
  card: { width: "320px", padding: "30px", background: "white", borderRadius: "15px", textAlign: "center", boxShadow: "0 8px 25px rgba(0,0,0,0.2)" },
  input: { width: "100%", padding: "12px", margin: "10px 0", borderRadius: "8px", border: "1px solid #ccc" },
  button: { width: "100%", padding: "12px", background: "#667eea", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }
};

export default Login;