document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const emailInput = document.getElementById("floatingInput");
        const passwordInput = document.getElementById("floatingPassword");

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (emailValue === "" && passwordValue === "") {
            alert("Por favor, preencha o campo de Email e Senha.");
        } else if (emailValue === "") {
            alert("Por favor, preencha o campo de Email.");
        } else if (passwordValue === "") {
            alert("Por favor, preencha o campo de Senha.");
        } else {
            // Faça aqui o que quiser com os valores do email e senha
            // Por exemplo, você pode enviar os dados para o servidor ou realizar outras ações.
            console.log("Email:", emailValue);
            console.log("Senha:", passwordValue);
        }
    });

    cadastroButton.addEventListener("click", function () {
        window.location.href = "cadastro_usuario.html";
    });
});
