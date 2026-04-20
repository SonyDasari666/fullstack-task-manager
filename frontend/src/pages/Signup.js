import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("https://task-backend-rfhc.onrender.com/api/auth/signup", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2>✨ Signup</h2>

        <form onSubmit={handleSignup}>
          <input style={styles.input} placeholder="Name" onChange={e => setName(e.target.value)} />
          <input style={styles.input} placeholder="Email" onChange={e => setEmail(e.target.value)} />
          <input style={styles.input} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />

          <button style={styles.button}>Signup</button>
        </form>

        <p>Already have account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

const styles = {
  container: { height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
  card: { width: "320px", padding: "30px", background: "white", borderRadius: "15px", textAlign: "center", boxShadow: "0 8px 25px rgba(0,0,0,0.2)" },
  input: { width: "100%", padding: "12px", margin: "10px 0", borderRadius: "8px", border: "1px solid #ccc" },
  button: { width: "100%", padding: "12px", background: "#764ba2", color: "white", border: "none", borderRadius: "8px", cursor: "pointer" }
};

export default Signup;