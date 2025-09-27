// Toggle mostrar/ocultar contraseña
const togglePassword = document.getElementById("togglePassword");
const passwordInput = document.getElementById("password");

togglePassword.addEventListener("click", () => {
  const isPassword = passwordInput.getAttribute("type") === "password";
  passwordInput.setAttribute("type", isPassword ? "text" : "password");

  // Cambiar icono
  togglePassword.src = isPassword
    ? "imagenes/ojoclose.png"   // 👁️ cerrado cuando se muestra el texto
    : "imagenes/ojoopen.png";   // 👁️ abierto cuando se oculta el texto
});

// Validación básica de formulario
const form = document.getElementById("loginForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = passwordInput.value.trim();

  if (email === "" || password === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }

  console.log("Email/Usuario:", email);
  console.log("Contraseña:", password);
  alert("Inicio de sesión simulado con éxito.");
});