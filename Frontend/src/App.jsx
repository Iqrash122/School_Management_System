import { Routes, Route } from "react-router-dom";

// AUTH
import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";

// LAYOUT
import DashboardLayout from "./layouts/DashboardLayout";

// DASHBOARD
import DashBoard from "./pages/dashboard/index";

// STUDENTS
import StudentsIndex from "./pages/students/index";
import StudentsCreate from "./pages/students/create";
import StudentsUpdate from "./pages/students/update";

// TEACHER
import TeacherIndex from "./pages/teacher/index";
import TeacherCreate from "./pages/teacher/create";
import TeacherUpdate from "./pages/teacher/update";

// CLASS
import ClassIndex from "./pages/class/index";
import ClassCreate from "./pages/class/create";
import ClassUpdate from "./pages/class/update";
import Section from "./pages/class/section/index";
import SectionCreate from "./pages/class/section/create";
import EditSection from "./pages/class/section/update";
// SUBJECTS
import SubjectsIndex from "./pages/subjects/index";
import SubjectsCreate from "./pages/subjects/create";
import SubjectsUpdate from "./pages/subjects/update";

// EXAM
import ExamIndex from "./pages/exam/index";
import ExamCreate from "./pages/exam/create";
import ExamUpdate from "./pages/exam/update";

// ATTENDANCE
import AttendanceIndex from "./pages/attendance/index";
import AttendanceCreate from "./pages/attendance/create";
import AttendanceUpdate from "./pages/attendance/update";

// ACCOUNTANT
import AccountantIndex from "./pages/accounts/index";
import AccountantCreate from "./pages/accounts/create";
import AccountantUpdate from "./pages/accounts/update";

import "./App.css";

function App() {
  return (
    <Routes>
      {/* AUTH ROUTES (NO SIDEBAR/TOPBAR) */}
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* DASHBOARD LAYOUT */}
      <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<DashBoard />} />
        {/* STUDENTS */}
        <Route path="/students" element={<StudentsIndex />} />
        <Route path="/students/create" element={<StudentsCreate />} />
        <Route path="/students/update/:id" element={<StudentsUpdate />} />
        {/* TEACHER */}
        <Route path="/teacher" element={<TeacherIndex />} />
        <Route path="/teacher/create" element={<TeacherCreate />} />
        <Route path="/teacher/update/:id" element={<TeacherUpdate />} />
        {/* CLASS */}
        <Route path="/class" element={<ClassIndex />} />
        <Route path="/class/create" element={<ClassCreate />} />
        <Route path="/class/:id/edit" element={<ClassUpdate />} />  
        <Route path="/class/section" element={<Section />} />
        <Route path="/class/section/create" element={<SectionCreate />} />
        <Route path="/class/section/edit/:id" element={<EditSection />} />
        {/* SUBJECTS */}
        <Route path="/subjects" element={<SubjectsIndex />} />
        <Route path="/subjects/create" element={<SubjectsCreate />} />
        <Route path="/subjects/update/:id" element={<SubjectsUpdate />} />
        {/* EXAM */}
        <Route path="/exam" element={<ExamIndex />} />
        <Route path="/exam/create" element={<ExamCreate />} />
        <Route path="/exam/update/:id" element={<ExamUpdate />} />
        {/* ATTENDANCE */}
        <Route path="/attendance" element={<AttendanceIndex />} />
        <Route path="/attendance/create" element={<AttendanceCreate />} />
        <Route path="/attendance/update/:id" element={<AttendanceUpdate />} />
        {/* ACCOUNTANT */}
        <Route path="/accounts" element={<AccountantIndex />} />
        <Route path="/accounts/create" element={<AccountantCreate />} />
        <Route path="/accounts/update/:id" element={<AccountantUpdate />} />
      </Route>
    </Routes>
  );
}

export default App;
