let users = [];

fetch('users.json')
  .then(response => response.json())
  .then(data => {
    users = data.users;
  })
  .catch(err => {
    console.error('Gagal memuat users.json:', err);
  });

function handleLogin() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Redirect ke halaman jika login sukses
    window.location.href = "https://example.com"; // ganti dengan web target kamu
  } else {
    errorMsg.textContent = "Username atau password salah!";
  }
}
