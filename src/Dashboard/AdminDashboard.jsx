import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/Admincss.css";

function AdminDashboard({ adminName = "Administrator" }) {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("role");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("loginData");
    navigate("/login");
  };

  const menuItems = [
    { key: "overview", label: "Overview" },
    { key: "students", label: "Students" },
    { key: "teachers", label: "Teachers" },
    { key: "departments", label: "Departments" },
    { key: "fees", label: "Fees" },
    { key: "exams", label: "Exams" },
    { key: "notices", label: "Notices" },
    { key: "reports", label: "Reports" },
    { key: "profile", label: "Profile" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Students</h3>
                <p>2,486</p>
                <span>Currently enrolled students</span>
              </div>

              <div className="stat-card">
                <h3>Total Teachers</h3>
                <p>148</p>
                <span>Active faculty members</span>
              </div>

              <div className="stat-card">
                <h3>Departments</h3>
                <p>12</p>
                <span>Academic departments managed</span>
              </div>

              <div className="stat-card">
                <h3>Pending Approvals</h3>
                <p>27</p>
                <span>Requests awaiting admin action</span>
              </div>
            </div>

            <div className="content-grid">
              <div className="dashboard-card">
                <h3>Recent Activities</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Activity</th>
                      <th>User</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>09:15 AM</td>
                      <td>Student admission approved</td>
                      <td>Admin Office</td>
                      <td className="status approved">Completed</td>
                    </tr>
                    <tr>
                      <td>10:40 AM</td>
                      <td>Faculty attendance updated</td>
                      <td>HR Team</td>
                      <td className="status approved">Completed</td>
                    </tr>
                    <tr>
                      <td>12:00 PM</td>
                      <td>Fee payment pending review</td>
                      <td>Accounts</td>
                      <td className="status pending">Pending</td>
                    </tr>
                    <tr>
                      <td>01:30 PM</td>
                      <td>Exam hall allocation submitted</td>
                      <td>Exam Cell</td>
                      <td className="status approved">Completed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="dashboard-card">
                <h3>Quick Updates</h3>
                <ul>
                  <li>Semester fee reconciliation closes on Friday.</li>
                  <li>Exam seating plan review is scheduled tomorrow.</li>
                  <li>Department audit reports are due this week.</li>
                  <li>Staff meeting starts at 4:00 PM in the seminar hall.</li>
                </ul>
              </div>
            </div>
          </>
        );

      case "students":
        return (
          <div className="dashboard-card">
            <h3>Student Management</h3>
            <table>
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Students</th>
                  <th>New Admissions</th>
                  <th>Attendance Avg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CSE</td>
                  <td>620</td>
                  <td>84</td>
                  <td>91%</td>
                </tr>
                <tr>
                  <td>IT</td>
                  <td>470</td>
                  <td>63</td>
                  <td>89%</td>
                </tr>
                <tr>
                  <td>ECE</td>
                  <td>510</td>
                  <td>58</td>
                  <td>88%</td>
                </tr>
                <tr>
                  <td>MECH</td>
                  <td>390</td>
                  <td>45</td>
                  <td>86%</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "teachers":
        return (
          <div className="dashboard-card">
            <h3>Teacher Management</h3>
            <table>
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Faculty Count</th>
                  <th>Present Today</th>
                  <th>Leaves</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CSE</td>
                  <td>32</td>
                  <td>30</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>IT</td>
                  <td>24</td>
                  <td>22</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>ECE</td>
                  <td>28</td>
                  <td>27</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>MECH</td>
                  <td>21</td>
                  <td>20</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "departments":
        return (
          <div className="dashboard-card">
            <h3>Departments</h3>
            <div className="course-grid">
              <div className="course-card">
                <h4>Computer Science</h4>
                <p>Strong academic performance with high project participation.</p>
              </div>
              <div className="course-card">
                <h4>Information Technology</h4>
                <p>Good placement record and active technical clubs.</p>
              </div>
              <div className="course-card">
                <h4>Electronics & Communication</h4>
                <p>Consistent results with ongoing lab upgrades.</p>
              </div>
              <div className="course-card">
                <h4>Mechanical Engineering</h4>
                <p>Industry training activities scheduled for this month.</p>
              </div>
            </div>
          </div>
        );

      case "fees":
        return (
          <div className="dashboard-card">
            <h3>Fee Collection Status</h3>
            <table>
              <thead>
                <tr>
                  <th>Department</th>
                  <th>Total Due</th>
                  <th>Collected</th>
                  <th>Pending</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>CSE</td>
                  <td>₹48,00,000</td>
                  <td>₹44,20,000</td>
                  <td>₹3,80,000</td>
                  <td className="status pending">In Progress</td>
                </tr>
                <tr>
                  <td>IT</td>
                  <td>₹35,00,000</td>
                  <td>₹33,10,000</td>
                  <td>₹1,90,000</td>
                  <td className="status approved">Healthy</td>
                </tr>
                <tr>
                  <td>ECE</td>
                  <td>₹39,00,000</td>
                  <td>₹36,50,000</td>
                  <td>₹2,50,000</td>
                  <td className="status pending">Follow-up</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "exams":
        return (
          <div className="dashboard-card">
            <h3>Exam Administration</h3>
            <table>
              <thead>
                <tr>
                  <th>Exam</th>
                  <th>Date</th>
                  <th>Departments</th>
                  <th>Hall Allocation</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mid Semester</td>
                  <td>12 Jun 2026</td>
                  <td>All UG</td>
                  <td>Completed</td>
                </tr>
                <tr>
                  <td>Lab Practical</td>
                  <td>18 Jun 2026</td>
                  <td>CSE, IT, ECE</td>
                  <td>In Progress</td>
                </tr>
                <tr>
                  <td>Internal Review</td>
                  <td>22 Jun 2026</td>
                  <td>Final Year</td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "notices":
        return (
          <div className="dashboard-card">
            <h3>Administrative Notices</h3>
            <ul>
              <li>University inspection team will visit next Monday.</li>
              <li>Department budget submissions are due by 15 June.</li>
              <li>Hostel maintenance requests must be cleared this week.</li>
              <li>Transport route revision meeting is scheduled tomorrow.</li>
            </ul>
          </div>
        );

      case "reports":
        return (
          <div className="dashboard-card">
            <h3>Reports Overview</h3>
            <table>
              <thead>
                <tr>
                  <th>Report</th>
                  <th>Owner</th>
                  <th>Updated On</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Attendance Summary</td>
                  <td>Academic Office</td>
                  <td>03 Jun 2026</td>
                  <td className="status approved">Ready</td>
                </tr>
                <tr>
                  <td>Fee Collection Report</td>
                  <td>Accounts</td>
                  <td>03 Jun 2026</td>
                  <td className="status approved">Ready</td>
                </tr>
                <tr>
                  <td>Faculty Workload Report</td>
                  <td>HR Cell</td>
                  <td>02 Jun 2026</td>
                  <td className="status pending">Updating</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "profile":
        return (
          <div className="dashboard-card">
            <h3>Admin Profile</h3>
            <div className="profile-grid">
              <div className="profile-item">
                <span>Name</span>
                <strong>{adminName}</strong>
              </div>
              <div className="profile-item">
                <span>Admin ID</span>
                <strong>ADM2026UNI001</strong>
              </div>
              <div className="profile-item">
                <span>Role</span>
                <strong>System Administrator</strong>
              </div>
              <div className="profile-item">
                <span>Department</span>
                <strong>Administration</strong>
              </div>
              <div className="profile-item">
                <span>Email</span>
                <strong>admin@hogwartsuniversity.edu</strong>
              </div>
              <div className="profile-item">
                <span>Office</span>
                <strong>Main Block - A101</strong>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="dashboard-card">
            <h3>No Data</h3>
            <p>No content available for this section.</p>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <button
        type="button"
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <aside className={`dashboard-sidebar ${sidebarOpen ? "show" : ""}`}>
        <div className="sidebar-header">
          <h2>Admin Portal</h2>
          <p>Hogwarts University</p>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <button
              type="button"
              key={item.key}
              className={activeTab === item.key ? "active" : ""}
              onClick={() => {
                setActiveTab(item.key);
                setSidebarOpen(false);
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-topbar">
          <div>
            <h1>Admin Dashboard</h1>
            <p>Welcome back, {adminName}</p>
          </div>

          <div className="topbar-right">
            <input type="text" placeholder="Search..." />
            <button type="button" className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </header>

        <section className="dashboard-content">
          {renderContent()}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;