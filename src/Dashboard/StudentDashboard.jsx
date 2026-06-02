import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const TIMETABLE = [
  { day: "Monday",    slots: ["Data Structures (CSE-101)", "Digital Electronics (CSE-102)", "—", "Operating Systems (CSE-103)", "Lab: DS Lab"] },
  { day: "Tuesday",   slots: ["Computer Networks (CSE-104)", "—", "DBMS (CSE-105)", "Data Structures (CSE-101)", "Lab: Networks Lab"] },
  { day: "Wednesday", slots: ["Operating Systems (CSE-103)", "Computer Networks (CSE-104)", "—", "Digital Electronics (CSE-102)", "Lab: DBMS Lab"] },
  { day: "Thursday",  slots: ["DBMS (CSE-105)", "Data Structures (CSE-101)", "—", "Computer Networks (CSE-104)", "Library / Self Study"] },
  { day: "Friday",    slots: ["Digital Electronics (CSE-102)", "—", "Operating Systems (CSE-103)", "DBMS (CSE-105)", "Sports / Activity"] },
];

const ATTENDANCE = [
  { subject: "Data Structures (CSE-101)",       conducted: 42, attended: 39, pct: 93 },
  { subject: "Digital Electronics (CSE-102)",   conducted: 38, attended: 32, pct: 84 },
  { subject: "Operating Systems (CSE-103)",     conducted: 40, attended: 28, pct: 70 },
  { subject: "Computer Networks (CSE-104)",     conducted: 36, attended: 36, pct: 100 },
  { subject: "Database Management (CSE-105)",   conducted: 44, attended: 30, pct: 68 },
];

const MARKS = [
  { subject: "Data Structures",      ct1: 28, ct2: 30, model: 85, ext: null },
  { subject: "Digital Electronics",  ct1: 22, ct2: 25, model: 78, ext: null },
  { subject: "Operating Systems",    ct1: 18, ct2: 20, model: 62, ext: null },
  { subject: "Computer Networks",    ct1: 30, ct2: 29, model: 90, ext: null },
  { subject: "Database Management",  ct1: 20, ct2: 24, model: 70, ext: null },
];

const FEES = [
  { desc: "Tuition Fee — Semester 5",  amount: "₹45,000", due: "01 Aug 2025",  status: "Paid",    date: "28 Jul 2025" },
  { desc: "Hostel Fee — July–Dec 2025",amount: "₹18,000", due: "01 Aug 2025",  status: "Paid",    date: "30 Jul 2025" },
  { desc: "Exam Fee — Nov 2025",        amount: "₹2,200",  due: "20 Sep 2025",  status: "Paid",    date: "15 Sep 2025" },
  { desc: "Tuition Fee — Semester 6",  amount: "₹45,000", due: "01 Jan 2026",  status: "Due",     date: "—" },
  { desc: "Hostel Fee — Jan–Jun 2026", amount: "₹18,000", due: "01 Jan 2026",  status: "Due",     date: "—" },
];

const NOTICES = [
  { date: "30 May 2026", text: "Internal Assessment II results published. Contact your subject faculty for clarifications." },
  { date: "22 May 2026", text: "End-semester examination timetable released. Hall ticket download opens 5 June 2026." },
  { date: "15 May 2026", text: "Semester 6 fee payment deadline: 01 June 2026. Late fee ₹500 after due date." },
  { date: "10 May 2026", text: "Internship drive for 6th semester students: XYZ Technologies — Registration open till 12 May." },
  { date: "02 May 2026", text: "Library book return deadline extended to 15 May 2026." },
];

const TABS = ["Overview", "Timetable", "Attendance", "Marks", "Fees", "Notices"];

function PctBar({ pct }) {
  const color = pct >= 75 ? "var(--success)" : pct >= 65 ? "var(--secondary)" : "var(--danger)";
  return (
    <div style={{ background: "rgba(255,255,255,0.08)", borderRadius: "99px", height: "8px", overflow: "hidden", width: "120px" }}>
      <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: "99px" }} />
    </div>
  );
}

function StudentDashboard() {
  const [tab, setTab] = useState("Overview");
  const navigate = useNavigate();
  const email = localStorage.getItem("userEmail") || "student@hogwarts.edu";

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("userEmail");
    navigate("/login");
  };

  return (
    <main className="page">
      <PageTitle title="Student Dashboard" />

      {/* Header */}
      <div className="dashboard-top">
        <div>
          <h2>🎓 Student Dashboard</h2>
          <p style={{ color: "var(--muted)", fontSize: "0.92rem" }}>
            Welcome, <strong style={{ color: "var(--secondary)" }}>Hermione Granger</strong> — {email}
          </p>
        </div>
        <button className="logout-btn" onClick={handleLogout}>Sign Out</button>
      </div>

      {/* Profile Summary Card */}
      <div className="dashboard-card" style={{ marginBottom: "24px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "16px" }}>
        {[
          { label: "Register No.", value: "2022CSE047" },
          { label: "Department",   value: "Computer Science" },
          { label: "Semester",     value: "Semester 6" },
          { label: "Section",      value: "Section B" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ color: "var(--muted)", fontSize: "0.82rem", marginBottom: "4px" }}>{label}</p>
            <p style={{ color: "var(--white)", fontWeight: "700" }}>{value}</p>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "24px" }}>
        {TABS.map((t) => (
          <button key={t} onClick={() => setTab(t)} style={{
            padding: "9px 18px", borderRadius: "99px", border: "1px solid var(--border)",
            background: tab === t ? "linear-gradient(135deg,var(--secondary-light),var(--secondary))" : "transparent",
            color: tab === t ? "#111827" : "var(--muted)", cursor: "pointer", fontWeight: tab === t ? "700" : "400",
            transition: "0.2s"
          }}>{t}</button>
        ))}
      </div>

      {/* Overview */}
      {tab === "Overview" && (
        <div>
          <div className="dashboard-grid" style={{ marginBottom: "22px" }}>
            {[
              { label: "Overall Attendance", value: "83%",    icon: "📊" },
              { label: "CGPA",               value: "8.42",   icon: "🏆" },
              { label: "Active Subjects",    value: "5",      icon: "📚" },
              { label: "Pending Fees",       value: "₹63,000",icon: "💳" },
              { label: "Backlogs",           value: "0",      icon: "✅" },
              { label: "Upcoming Exams",     value: "5",      icon: "📅" },
            ].map(({ label, value, icon }) => (
              <div className="dashboard-card" key={label}>
                <p style={{ fontSize: "1.6rem" }}>{icon}</p>
                <div className="stat-number">{value}</div>
                <p style={{ color: "var(--muted)", fontSize: "0.88rem" }}>{label}</p>
              </div>
            ))}
          </div>
          <div className="dashboard-card">
            <h3 style={{ marginBottom: "14px" }}>📢 Recent Notices</h3>
            {NOTICES.slice(0, 3).map((n, i) => (
              <div key={i} style={{ paddingBottom: "12px", marginBottom: "12px", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                <span style={{ color: "var(--secondary)", fontSize: "0.8rem", fontWeight: "600" }}>{n.date} — </span>
                <span style={{ color: "var(--muted)", fontSize: "0.92rem" }}>{n.text}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Timetable */}
      {tab === "Timetable" && (
        <div className="dashboard-card">
          <h3 style={{ marginBottom: "20px" }}>📅 Class Timetable — Semester 6</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.88rem" }}>
              <thead>
                <tr>
                  <th style={thStyle}>Day</th>
                  {["8:30–9:20", "9:20–10:10", "10:10–10:30 (Break)", "10:30–11:20", "11:20–1:00 (Lab)"].map((h) => (
                    <th key={h} style={thStyle}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TIMETABLE.map((row) => (
                  <tr key={row.day}>
                    <td style={{ ...tdStyle, color: "var(--secondary)", fontWeight: "700" }}>{row.day}</td>
                    {row.slots.map((s, i) => (
                      <td key={i} style={{ ...tdStyle, color: s === "—" ? "var(--border)" : "var(--white)" }}>{s}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Attendance */}
      {tab === "Attendance" && (
        <div className="dashboard-card">
          <h3 style={{ marginBottom: "20px" }}>📊 Attendance — Semester 6</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr>
                  {["Subject", "Conducted", "Attended", "Percentage", "Status"].map((h) => <th key={h} style={thStyle}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {ATTENDANCE.map((row) => {
                  const status = row.pct >= 75 ? "✅ Safe" : row.pct >= 65 ? "⚠️ Shortage" : "❌ Critical";
                  const color  = row.pct >= 75 ? "var(--success)" : row.pct >= 65 ? "var(--secondary)" : "var(--danger)";
                  return (
                    <tr key={row.subject}>
                      <td style={tdStyle}>{row.subject}</td>
                      <td style={tdStyle}>{row.conducted}</td>
                      <td style={tdStyle}>{row.attended}</td>
                      <td style={tdStyle}>
                        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                          <span style={{ color, fontWeight: "700" }}>{row.pct}%</span>
                          <PctBar pct={row.pct} />
                        </div>
                      </td>
                      <td style={{ ...tdStyle, color }}>{status}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "0.82rem", marginTop: "14px" }}>
            * Minimum 75% attendance required for examination eligibility.
          </p>
        </div>
      )}

      {/* Marks */}
      {tab === "Marks" && (
        <div className="dashboard-card">
          <h3 style={{ marginBottom: "20px" }}>📝 Internal Marks — Semester 6</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr>
                  {["Subject", "CT 1 (/30)", "CT 2 (/30)", "Model (/100)", "End Sem"].map((h) => <th key={h} style={thStyle}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {MARKS.map((row) => (
                  <tr key={row.subject}>
                    <td style={tdStyle}>{row.subject}</td>
                    <td style={{ ...tdStyle, color: row.ct1 >= 20 ? "var(--success)" : "var(--secondary)" }}>{row.ct1}</td>
                    <td style={{ ...tdStyle, color: row.ct2 >= 20 ? "var(--success)" : "var(--secondary)" }}>{row.ct2}</td>
                    <td style={{ ...tdStyle, color: row.model >= 75 ? "var(--success)" : "var(--secondary)" }}>{row.model}</td>
                    <td style={{ ...tdStyle, color: "var(--muted)" }}>Awaited</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Fees */}
      {tab === "Fees" && (
        <div className="dashboard-card">
          <h3 style={{ marginBottom: "20px" }}>💳 Fee Details</h3>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.9rem" }}>
              <thead>
                <tr>
                  {["Description", "Amount", "Due Date", "Status", "Paid On"].map((h) => <th key={h} style={thStyle}>{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {FEES.map((row) => (
                  <tr key={row.desc}>
                    <td style={tdStyle}>{row.desc}</td>
                    <td style={{ ...tdStyle, color: "var(--white)", fontWeight: "600" }}>{row.amount}</td>
                    <td style={tdStyle}>{row.due}</td>
                    <td style={{ ...tdStyle, color: row.status === "Paid" ? "var(--success)" : "var(--danger)", fontWeight: "700" }}>
                      {row.status === "Paid" ? "✅ Paid" : "❌ Due"}
                    </td>
                    <td style={tdStyle}>{row.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Notices */}
      {tab === "Notices" && (
        <div className="dashboard-card">
          <h3 style={{ marginBottom: "20px" }}>📢 Notice Board</h3>
          {NOTICES.map((n, i) => (
            <div key={i} style={{ padding: "14px 0", borderBottom: i < NOTICES.length - 1 ? "1px solid var(--border)" : "none" }}>
              <span style={{ color: "var(--secondary)", fontSize: "0.82rem", fontWeight: "700" }}>{n.date}</span>
              <p style={{ color: "var(--muted)", marginTop: "4px", lineHeight: "1.65" }}>{n.text}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

const thStyle = {
  padding: "11px 14px", textAlign: "left",
  borderBottom: "2px solid var(--border)", color: "var(--secondary)",
  fontSize: "0.82rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.5px"
};
const tdStyle = {
  padding: "11px 14px", color: "var(--muted)",
  borderBottom: "1px solid rgba(255,255,255,0.05)"
};

export default StudentDashboard;
