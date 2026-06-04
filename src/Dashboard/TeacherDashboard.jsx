import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/TeacherDashboardcss.css";

function TeacherDashboard({ teacherName = "Prof. Johnson" }) {
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
    { key: "classes", label: "My Classes" },
    { key: "attendance", label: "Attendance" },
    { key: "assignments", label: "Assignments" },
    { key: "timetable", label: "Timetable" },
    { key: "performance", label: "Performance" },
    { key: "notices", label: "Notices" },
    { key: "messages", label: "Messages" },
    { key: "profile", label: "Profile" }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return (
          <>
            <div className="stats-grid">
              <div className="stat-card">
                <h3>Total Classes</h3>
                <p>5</p>
                <span>Classes handled this semester</span>
              </div>

              <div className="stat-card">
                <h3>Total Students</h3>
                <p>186</p>
                <span>Across all assigned sections</span>
              </div>

              <div className="stat-card">
                <h3>Pending Reviews</h3>
                <p>12</p>
                <span>Assignments waiting for evaluation</span>
              </div>

              <div className="stat-card">
                <h3>Attendance Updated</h3>
                <p>93%</p>
                <span>Class records updated this week</span>
              </div>
            </div>

            <div className="content-grid">
              <div className="dashboard-card">
                <h3>Today’s Schedule</h3>
                <table>
                  <thead>
                    <tr>
                      <th>Time</th>
                      <th>Class</th>
                      <th>Subject</th>
                      <th>Room</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>09:00 AM</td>
                      <td>III CSE A</td>
                      <td>Data Structures</td>
                      <td>Lab 2</td>
                    </tr>
                    <tr>
                      <td>11:00 AM</td>
                      <td>III CSE B</td>
                      <td>Database Systems</td>
                      <td>Room 204</td>
                    </tr>
                    <tr>
                      <td>02:00 PM</td>
                      <td>II IT A</td>
                      <td>Web Technology</td>
                      <td>Room 307</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="dashboard-card">
                <h3>Recent Updates</h3>
                <ul>
                  <li>Internal assessment marks upload deadline is Friday.</li>
                  <li>Faculty meeting scheduled for 10 June at 3:00 PM.</li>
                  <li>Project viva timetable has been released.</li>
                  <li>Attendance audit will begin next week.</li>
                </ul>
              </div>
            </div>
          </>
        );

      case "classes":
        return (
          <div className="dashboard-card">
            <h3>My Classes</h3>
            <div className="course-grid">
              <div className="course-card">
                <h4>III CSE A</h4>
                <p>Data Structures and Lab guidance for 62 students.</p>
              </div>
              <div className="course-card">
                <h4>III CSE B</h4>
                <p>Database Systems with practical evaluation support.</p>
              </div>
              <div className="course-card">
                <h4>II IT A</h4>
                <p>Web Technology with frontend and backend modules.</p>
              </div>
              <div className="course-card">
                <h4>II CSE A</h4>
                <p>Operating Systems fundamentals and record assessments.</p>
              </div>
            </div>
          </div>
        );

      case "attendance":
        return (
          <div className="dashboard-card">
            <h3>Attendance Summary</h3>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Students</th>
                  <th>Present</th>
                  <th>Absent</th>
                  <th>Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>III CSE A</td>
                  <td>62</td>
                  <td>58</td>
                  <td>4</td>
                  <td>94%</td>
                </tr>
                <tr>
                  <td>III CSE B</td>
                  <td>60</td>
                  <td>55</td>
                  <td>5</td>
                  <td>92%</td>
                </tr>
                <tr>
                  <td>II IT A</td>
                  <td>64</td>
                  <td>59</td>
                  <td>5</td>
                  <td>92%</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "assignments":
        return (
          <div className="dashboard-card">
            <h3>Assignment Tracking</h3>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Assignment</th>
                  <th>Due Date</th>
                  <th>Submitted</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>III CSE A</td>
                  <td>Tree Traversal Program</td>
                  <td>06 Jun 2026</td>
                  <td>54/62</td>
                  <td className="status pending">Review Pending</td>
                </tr>
                <tr>
                  <td>III CSE B</td>
                  <td>SQL Joins Practice</td>
                  <td>08 Jun 2026</td>
                  <td>60/60</td>
                  <td className="status submitted">Completed</td>
                </tr>
                <tr>
                  <td>II IT A</td>
                  <td>React Component Task</td>
                  <td>10 Jun 2026</td>
                  <td>49/64</td>
                  <td className="status pending">Ongoing</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "timetable":
        return (
          <div className="dashboard-card">
            <h3>Weekly Timetable</h3>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>9-10</th>
                  <th>10-11</th>
                  <th>11-12</th>
                  <th>1-2</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>III CSE A</td>
                  <td>III CSE B</td>
                  <td>Free Hour</td>
                  <td>II IT A</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>II CSE A</td>
                  <td>III CSE A</td>
                  <td>Meeting</td>
                  <td>III CSE B</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>III CSE B</td>
                  <td>II IT A</td>
                  <td>Free Hour</td>
                  <td>Lab</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>III CSE A</td>
                  <td>II CSE A</td>
                  <td>III CSE B</td>
                  <td>Project Review</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>II IT A</td>
                  <td>III CSE A</td>
                  <td>Seminar</td>
                  <td>Lab</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "performance":
        return (
          <div className="dashboard-card">
            <h3>Class Performance</h3>
            <table>
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Average Mark</th>
                  <th>Top Score</th>
                  <th>Pass %</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>III CSE A</td>
                  <td>78%</td>
                  <td>96</td>
                  <td>95%</td>
                </tr>
                <tr>
                  <td>III CSE B</td>
                  <td>81%</td>
                  <td>98</td>
                  <td>97%</td>
                </tr>
                <tr>
                  <td>II IT A</td>
                  <td>74%</td>
                  <td>91</td>
                  <td>89%</td>
                </tr>
              </tbody>
            </table>
          </div>
        );

      case "notices":
        return (
          <div className="dashboard-card">
            <h3>Faculty Notices</h3>
            <ul>
              <li>NAAC documentation review starts this week.</li>
              <li>Semester question paper submission due by 14 June.</li>
              <li>Lab equipment audit scheduled for Saturday.</li>
              <li>Mentor meeting reports must be submitted before Monday.</li>
            </ul>
          </div>
        );

      case "messages":
        return (
          <div className="dashboard-card">
            <h3>Messages</h3>
            <ul>
              <li>Principal: Please finalize internal marks by this weekend.</li>
              <li>HOD: Submit your course coverage report today.</li>
              <li>Exam Cell: Hall arrangement duty list has been published.</li>
              <li>Student Coordinator: Request for extra project guidance hour.</li>
            </ul>
          </div>
        );

      case "profile":
        return (
          <div className="dashboard-card">
            <h3>Teacher Profile</h3>
            <div className="profile-grid">
              <div className="profile-item">
                <span>Name</span>
                <strong>{teacherName}</strong>
              </div>
              <div className="profile-item">
                <span>Faculty ID</span>
                <strong>TCH2026CSE021</strong>
              </div>
              <div className="profile-item">
                <span>Department</span>
                <strong>Computer Science and Engineering</strong>
              </div>
              <div className="profile-item">
                <span>Designation</span>
                <strong>Assistant Professor</strong>
              </div>
              <div className="profile-item">
                <span>Email</span>
                <strong>teacher@hogwartsuniversity.edu</strong>
              </div>
              <div className="profile-item">
                <span>Cabin</span>
                <strong>Block B - 203</strong>
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
    <div className="teacher-dashboard">
      <button
        type="button"
        className="mobile-menu-btn"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <aside className={`dashboard-sidebar ${sidebarOpen ? "show" : ""}`}>
        <div className="sidebar-header">
          <h2>Teacher Portal</h2>
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
            <h1>Teacher Dashboard</h1>
            <p>Welcome back, {teacherName}</p>
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

export default TeacherDashboard;