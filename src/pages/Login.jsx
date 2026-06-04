import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const ROLE_ICONS = { student: "🎓", teacher: "👨‍🏫", admin: "🛡️" };
const ROLE_LABELS = { student: "Student", teacher: "Teacher", admin: "Admin" };

function Login({ onLogin }) {
  const [role, setRole] = useState("student");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
    setError("");
    setIdentifier("");
    setPassword("");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    if (!identifier || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const loginData = {
        name: identifier.includes("@") ? identifier.split("@")[0] : identifier,
        email: identifier.includes("@") ? identifier : "",
        username: identifier,
        password: password,
        role: role,
        isLoggedIn: true
      };

      localStorage.setItem("loginData", JSON.stringify(loginData));
      sessionStorage.setItem("loginData", JSON.stringify(loginData));

      console.log("Login Name:", loginData.name);
      console.log("Login Role:", loginData.role);
      console.log("Login Username/Email:", loginData.username);
      console.log("Login Password:", loginData.password);

      if (onLogin) {
        onLogin(loginData);
      }

      setLoading(false);
      navigate(`/${role}-dashboard`, { state: loginData });
    }, 700);
  };

  return (
    <main className="page form-wrap">
      <PageTitle title="Login" />

      <div className="form-card">
        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <div
            style={{
              fontSize: "2.6rem",
              marginBottom: "10px",
              width: "68px",
              height: "68px",
              borderRadius: "18px",
              background: "linear-gradient(135deg,var(--secondary-light),var(--secondary))",
              display: "grid",
              placeItems: "center",
              margin: "0 auto 12px"
            }}
          >
            {ROLE_ICONS[role]}
          </div>

          <h2>Portal Login</h2>
          <p>Sign in to your college portal account</p>
        </div>

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

        {error && <div className="alert alert-error">{error}</div>}

        <form onSubmit={handleLogin} noValidate>
          <div className="form-group">
            <label>Username or Email</label>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              placeholder="Enter username or email"
              autoComplete="username"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <div style={{ position: "relative" }}>
              <input
                type={showPwd ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
                style={{ paddingRight: "48px" }}
              />

              <button
                type="button"
                onClick={() => setShowPwd(!showPwd)}
                style={{
                  position: "absolute",
                  right: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "var(--muted)",
                  cursor: "pointer",
                  fontSize: "1rem"
                }}
              >
                {showPwd ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="form-actions">
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                fontSize: "0.9rem",
                color: "var(--muted)"
              }}
            >
              <input type="checkbox" style={{ width: "auto", marginRight: "0" }} />
              Remember me
            </label>

            <Link to="/forgot-password">Forgot Password?</Link>
          </div>

          <button type="submit" className="main-btn" disabled={loading}>
            {loading ? "Signing in..." : `Sign In as ${ROLE_LABELS[role]}`}
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "0.9rem",
            color: "var(--muted)"
          }}
        >
          Need help?{" "}
          <Link
            to="/contact"
            style={{ color: "var(--secondary-light)", textDecoration: "none" }}
          >
            Contact Support
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;