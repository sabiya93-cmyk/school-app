// Simple front-end demo storage (no backend)
let users = [
  {email:'admin@school.com', password:'admin123', role:'admin'}
];
let attendance = [];
let messages = [];

function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const role = document.getElementById('role').value;
  const user = users.find(u => u.email===email && u.password===password && u.role===role);
  if(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    if(role==='admin') window.location.href='admin.html';
    if(role==='teacher') window.location.href='teacher.html';
    if(role==='student') window.location.href='student.html';
  } else {
    alert('Invalid credentials');
  }
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href='index.html';
}

// Admin functions
function createUser() {
  const email = document.getElementById('newEmail').value;
  const password = document.getElementById('newPassword').value;
  const role = document.getElementById('newRole').value;
  if(email && password) {
    users.push({email, password, role});
    document.getElementById('usersList').innerHTML = 'Users: ' + users.map(u=>u.email+'('+u.role+')').join(', ');
    alert('User created!');
  } else alert('Enter email and password');
}

// Teacher functions
function markAttendance() {
  const name = document.getElementById('studentName').value;
  if(name) {
    attendance.push(name);
    document.getElementById('attendanceList').innerHTML = 'Present: ' + attendance.join(', ');
  }
}

function sendMessage() {
  const msg = document.getElementById('messageText').value;
  if(msg) {
    messages.push(msg);
    document.getElementById('messagesList').innerHTML = messages.join('<br>');
  }
}

// Student page
if(document.getElementById('attendanceList')) {
  document.getElementById('attendanceList').innerHTML = 'Present: ' + attendance.join(', ');
}
if(document.getElementById('messagesList')) {
  document.getElementById('messagesList').innerHTML = messages.join('<br>');
}
