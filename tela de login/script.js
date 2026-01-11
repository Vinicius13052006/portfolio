const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.querySelector('input[placeholder="Seu nome completo"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const senha = document.querySelectorAll('input[type="password"]')[0].value;
  const confirmarSenha = document.querySelectorAll('input[type="password"]')[1].value;

  // Validação básica
  if (!nome || !email || !senha || !confirmarSenha) {
    alert("Preencha todos os campos!");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres");
    return;
  }

  if (senha !== confirmarSenha) {
    alert("As senhas não coincidem");
    return;
  }

  // Verifica se usuário já existe
  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const existe = usuarios.find(user => user.email === email);

  if (existe) {
    alert("Esse email já está cadastrado!");
    return;
  }

  // Cria usuário
  const novoUsuario = {
    nome,
    email,
    senha // ⚠️ em projetos reais nunca salvar senha assim
  };

  usuarios.push(novoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Conta criada com sucesso!");
  form.reset();

  // Redireciona para login
  window.location.href = "login.html";
});

