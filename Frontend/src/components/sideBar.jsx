import { useState } from "react";

export default function sideBar() {
  const [open, isOpen] = useState(false);
  const [teacherOpen, isTeacherOpen] = useState(false);
  const [classOpen, isClassOpen] = useState(false);
  const [subjectOpen, isSubjectOpen] = useState(false);
  const [examOpen, isExamOpen] = useState(false);
  const [attendenceOpen, isAttendenceOpen] = useState(false);
  const [accOpen, isAccOpen] = useState(false);
  return (
    <div>
      <aside class="flex flex-col text-zinc-100 w-72 min-h-screen bg-zinc-800">
        <a href="#" class="flex items-center h-16 gap-3 bg-zinc-900 px-7">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 transform rotate-45"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z"
            />
          </svg>
          <span class="font-bold">The Dark Knight</span>
        </a>
        <nav class="flex flex-col flex-grow gap-2 py-5 px-4">
          <div class="relative flex items-center w-full rounded-full hover:bg-zinc-900 group">
            <a href="#" class="flex items-center flex-grow h-12 gap-6 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-zinc-400 group-hover:text-indigo-500"
              >
                <path d="M5.127 3.502L5.25 3.5h9.5c.041 0 .082 0 .123.002A2.251 2.251 0 0012.75 2h-5.5a2.25 2.25 0 00-2.123 1.502zM1 10.25A2.25 2.25 0 013.25 8h13.5A2.25 2.25 0 0119 10.25v5.5A2.25 2.25 0 0116.75 18H3.25A2.25 2.25 0 011 15.75v-5.5zM3.25 6.5c-.04 0-.082 0-.123.002A2.25 2.25 0 015.25 5h9.5c.98 0 1.814.627 2.123 1.502a3.819 3.819 0 00-.123-.002H3.25z" />
              </svg>
              <span class="text-sm font-semibold">Dashboard</span>
            </a>
          </div>

          {/* students  */}
          <div class="relative flex items-center w-full rounded-full bg-zinc-900 group">
            <a href="#" class="flex items-center flex-grow h-12 gap-6 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-indigo-500"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
              <span class="text-sm font-semibold">Students</span>
            </a>
            <button
              class="absolute flex items-center justify-center w-5 h-5 rounded-full right-3 hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => isOpen(!open)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class={`w-5 h-5 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {open && (
            <div class="flex flex-col w-full pl-10">
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">New Post</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Drafts</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Published</span>
              </a>
            </div>
          )}

          {/* Teachers  */}

          <div class="relative flex items-center w-full rounded-full bg-zinc-900 group">
            <a href="#" class="flex items-center flex-grow h-12 gap-6 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-indigo-500"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
              <span class="text-sm font-semibold">Teacher</span>
            </a>
            <button
              class="absolute flex items-center justify-center w-5 h-5 rounded-full right-3 hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => isTeacherOpen(!teacherOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class={`w-5 h-5 transition-transform duration-300 ${
                  teacherOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {teacherOpen && (
            <div class="flex flex-col w-full pl-10">
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">New Post</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Drafts</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Published</span>
              </a>
            </div>
          )}

          {/* class  */}

          <div class="relative flex items-center w-full rounded-full bg-zinc-900 group">
            <a href="#" class="flex items-center flex-grow h-12 gap-6 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-indigo-500"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
              <span class="text-sm font-semibold">Class</span>
            </a>
            <button
              class="absolute flex items-center justify-center w-5 h-5 rounded-full right-3 hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => isClassOpen(!classOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class={`w-5 h-5 transition-transform duration-300 ${
                  classOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {classOpen && (
            <div class="flex flex-col w-full pl-10">
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">New Post</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Drafts</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Published</span>
              </a>
            </div>
          )}

          {/* subjetcs  */}

          <div class="relative flex items-center w-full rounded-full bg-zinc-900 group">
            <a href="#" class="flex items-center flex-grow h-12 gap-6 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-indigo-500"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
              <span class="text-sm font-semibold">Subjects</span>
            </a>
            <button
              class="absolute flex items-center justify-center w-5 h-5 rounded-full right-3 hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => isSubjectOpen(!subjectOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class={`w-5 h-5 transition-transform duration-300 ${
                  subjectOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {subjectOpen && (
            <div class="flex flex-col w-full pl-10">
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">New Post</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Drafts</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Published</span>
              </a>
            </div>
          )}

          {/* exam  */}
          <div class="relative flex items-center w-full rounded-full bg-zinc-900 group">
            <a href="#" class="flex items-center flex-grow h-12 gap-6 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-indigo-500"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
              <span class="text-sm font-semibold">Exam</span>
            </a>
            <button
              class="absolute flex items-center justify-center w-5 h-5 rounded-full right-3 hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => isExamOpen(!examOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class={`w-5 h-5 transition-transform duration-300 ${
                  examOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {examOpen && (
            <div class="flex flex-col w-full pl-10">
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">New Post</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Drafts</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Published</span>
              </a>
            </div>
          )}

          {/* attendence  */}

          <div class="relative flex items-center w-full rounded-full bg-zinc-900 group">
            <a href="#" class="flex items-center flex-grow h-12 gap-6 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-indigo-500"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
              <span class="text-sm font-semibold">Attendence</span>
            </a>
            <button
              class="absolute flex items-center justify-center w-5 h-5 rounded-full right-3 hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => isAttendenceOpen(!attendenceOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class={`w-5 h-5 transition-transform duration-300 ${
                  attendenceOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {attendenceOpen && (
            <div class="flex flex-col w-full pl-10">
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">New Post</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Drafts</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Published</span>
              </a>
            </div>
          )}

          {/* accountant  */}

          <div class="relative flex items-center w-full rounded-full bg-zinc-900 group">
            <a href="#" class="flex items-center flex-grow h-12 gap-6 px-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-4 h-4 text-indigo-500"
              >
                <path d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z" />
                <path d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z" />
              </svg>
              <span class="text-sm font-semibold">Accountant</span>
            </a>
            <button
              class="absolute flex items-center justify-center w-5 h-5 rounded-full right-3 hover:bg-zinc-100 hover:text-zinc-900"
              onClick={() => isAccOpen(!accOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class={`w-5 h-5 transition-transform duration-300 ${
                  accOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>

          {accOpen && (
            <div class="flex flex-col w-full pl-10">
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">New Post</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Drafts</span>
              </a>
              <a
                href="#"
                class="relative flex items-center h-12 pl-5 rounded-full hover:bg-zinc-900 font-light text-zinc-200
						   after:block after:w-2 after:h-2 after:rounded-sm after:bg-zinc-600 after:absolute after:-left-4"
              >
                <span class="text-sm">Published</span>
              </a>
            </div>
          )}


        </nav>
      </aside>
    </div>
  );
}
