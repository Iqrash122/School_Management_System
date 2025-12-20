const BASE = "http://localhost:5000/api";

async function safeJson(res) {
    const text = await res.text();
    try {
        return text ? JSON.parse(text) : {};
    } catch {
        return { raw: text };
    }
}

export const getSubjects = async () => {
    const res = await fetch(`${BASE}/subjects/get`);
    return safeJson(res);
};

export const getClasses = async () => {
    const res = await fetch(`${BASE}/classes/show`);
    return safeJson(res);
};


export const getSections = async (classId) => {
    if (!classId) return [];
    const res = await fetch(`${BASE}/sections/show?classId=${classId}`);
    return safeJson(res);
};

/* ================= EXAMS ================= */

// LIST
export const getExams = async () => {
    const res = await fetch(`${BASE}/exams`);
    return safeJson(res);
};

// SINGLE
export const getExamById = async (id) => {
    const res = await fetch(`${BASE}/exams/${id}`);
    return safeJson(res);
};

// CREATE
export const createExam = async (data) => {
    const res = await fetch(`${BASE}/exams/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return safeJson(res);
};

// UPDATE
export const updateExam = async (id, data) => {
    const res = await fetch(`${BASE}/exams/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return safeJson(res);
};

// DELETE
export const deleteExam = async (id) => {
    const res = await fetch(`${BASE}/exams/${id}`, { method: "DELETE" });
    return safeJson(res);
};




// attendence apis



// api.js
export const getStudentsByClassSection = async (classId, sectionId) => {
    if (!classId || !sectionId) return [];
    const res = await fetch(
        `${BASE}/students/by-class-section?classId=${classId}&sectionId=${sectionId}`
    );

    if (!res.ok) {
        console.error("Failed to fetch students:", res.status, res.statusText);
        return []; // empty array to avoid crash
    }

    return await res.json();
};

export const markAttendance = async (data) => {
    const res = await fetch("http://localhost:5000/api/attendance/mark", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return res.json();
};

export const getAttendance = async (classId, sectionId, date) => {
    const res = await fetch(
        `${BASE}/attendance/view?classId=${classId}&sectionId=${sectionId}&date=${date}`
    );
    return res.json();
};

// services/api.js
export const getAttendanceForMonth = async ({ classId, sectionId, month, session }) => {
    const res = await fetch(
        `${BASE}/attendance/month?classId=${classId}&sectionId=${sectionId}&month=${month}&session=${session}`
    );
    return res.json();
};