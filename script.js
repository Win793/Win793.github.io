// สมัครสมาชิก
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  localStorage.setItem('ggshop_user', JSON.stringify({ username, password }));
  alert('สมัครสมาชิกสำเร็จ!');
  window.location.href = 'login.html';
});

// เข้าสู่ระบบ
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUsername').value;
  const password = document.getElementById('loginPassword').value;
  const user = JSON.parse(localStorage.getItem('ggshop_user'));
  if (user && username === user.username && password === user.password) {
    alert('เข้าสู่ระบบสำเร็จ!');
    window.location.href = 'index.html';
  } else {
    alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
  }
});
