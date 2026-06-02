import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

/* Demo credentials (no real backend) */
const CREDENTIALS = {
  student: { email: "student@hogwarts.edu", password: "student123" },
  teacher: { email: "teacher@hogwarts.edu", password: "teacher123" },
  admin:   { email: "admin@hogwarts.edu",   password: "admin123"   },
};

const ROLE_ICONS = { student: "🎓", teacher: "👨‍🏫", admin: "🛡️" };
const ROLE_LABELS = { student: "Student", teacher: "Teacher", admin: "Admin" };

function Login() {
  const [role, setRole]         = useState("student");
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd]   = useState(false);
  const [error, setError]       = useState("");
  const [loading, setLoading]   = useState(false);
  const navigate = useNavigate();

  const handleRoleChange = (r) => {
    setRole(r);
    setError("");
    setEmail("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) { setError("Please fill in all fields."); return; }
    setLoading(true);
    setTimeout(() => {
      const cred = CREDENTIALS[role];
      if (email === cred.email && password === cred.password) {
        localStorage.setItem("role", role);
        localStorage.setItem("userEmail", email);
        navigate(`/${role}-dashboard`);
      } else {
        setError("Invalid email or password. Please check and try again.");
        setLoading(false);
      }
    }, 900);
  };

  return (
    <main className="page form-wrap">
      <PageTitle title="Login" />
      <div className="form-card">
        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <div style={{
            fontSize: "2.6rem", marginBottom: "10px",
            width: "68px", height: "68px", borderRadius: "18px",
            background: "linear-gradient(135deg,var(--secondary-light),var(--secondary))",
            display: "grid", placeItems: "center", margin: "0 auto 12px"
          }}>🎓</div>
          <h2>Portal Login</h2>
          <p>Sign in to your Hogwarts University account</p>
        </div>

        {/* Role selector */}
        <div className="role-tabs">
          {["student", "teacher", "admin"].map((r) => (
            <button
              key={r}
              className={role === r ? "active" : ""}
              onClick={() => handleRoleChange(r)}
              type="button"
            >
              {ROLE_ICONS[r]} {ROLE_LABELS[r]}
            </button>
          ))}
        </div>

        {/* Demo hint */}
        <div style={{
          background: "rgba(212,175,55,0.1)", border: "1px solid rgba(212,175,55,0.25)",
          borderRadius: "12px", padding: "10px 14px", marginBottom: "18px", fontSize: "0.83rem", color: "var(--muted)"
        }}>
          <strong style={{ color: "var(--secondary)" }}>Demo credentials — </strong>
          Email: <code style={{ color: "var(--secondary-light)" }}>{CREDENTIALS[role].email}</code> &nbsp;|&nbsp;
          Password: <code style={{ color: "var(--secondary-light)" }}>{CREDENTIALS[role].password}</code>
        </div>

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleLogin} noValidate>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email" value={email} onChange={(e) => setEmail(e.target.value)}
              placeholder={CREDENTIALS[role].email} autoComplete="username"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPwd ? "text" : "password"}
                value={password} onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password" autoComplete="current-password"
                style={{ paddingRight: "48px" }}
              />
              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                style={{
                  position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                  background: "none", border: "none", color: "var(--muted)", cursor: "pointer", fontSize: "1rem"
                }}
              >
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="form-actions">
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer", fontSize: "0.9rem", color: "var(--muted)" }}>
              <input type="checkbox" style={{ width: "auto", marginRight: "0" }} /> Remember me
            </label>
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="main-btn" disabled={loading}>
            {loading ? "Signing in…" : `Sign In as ${ROLE_LABELS[role]}`}
          </button>
        </form>

        <p style={{ textAlign: "center", marginTop: "20px", fontSize: "0.9rem", color: "var(--muted)" }}>
          Need help?{" "}
          <Link to="/contact" style={{ color: "var(--secondary-light)", textDecoration: "none" }}>
            Contact Support
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
