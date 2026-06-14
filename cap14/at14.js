const nomePerfil = document.getElementById("nomePerfil");
const cursoPerfil = document.getElementById("cursoPerfil");
const fotoPerfil = document.getElementById("fotoPerfil");
const perfil = document.getElementById("perfil");
const biografia = document.getElementById("biografiaPerfil");

const contadorAcoes = document.getElementById("contadorAcoes");
const ultimaAcao = document.getElementById("ultimaAcao");

let totalAcoes = 0;

const nomeOriginal = nomePerfil.textContent;
const cursoOriginal = cursoPerfil.textContent;
const fotoOriginal = fotoPerfil.src;

function registrarAcao(acao) {
    totalAcoes++;
    contadorAcoes.textContent = totalAcoes;
    ultimaAcao.textContent = acao;
}

document
    .getElementById("btnAlterarNome")
    .addEventListener("click", () => {

        nomePerfil.textContent = "Maria Oliveira";

        registrarAcao("Alteração de nome");
    });

document
    .getElementById("btnAlterarCurso")
    .addEventListener("click", () => {

        cursoPerfil.textContent =
            "Curso: Análise e Desenvolvimento de Sistemas";

        registrarAcao("Alteração de curso");
    });

document
    .getElementById("btnAlterarFoto")
    .addEventListener("click", () => {

        fotoPerfil.src = "imagens/perfil2.jpg";

        registrarAcao("Alteração de foto");
    });

document
    .getElementById("btnDestacarPerfil")
    .addEventListener("click", () => {

        perfil.classList.add("destaque");

        registrarAcao("Perfil destacado");
    });

document
    .getElementById("btnRestaurar")
    .addEventListener("click", () => {

        nomePerfil.textContent = nomeOriginal;
        cursoPerfil.textContent = cursoOriginal;
        fotoPerfil.src = fotoOriginal;

        perfil.classList.remove("destaque");

        registrarAcao("Perfil restaurado");
    });

document
    .getElementById("temaSelect")
    .addEventListener("change", function () {

        document.body.classList.remove(
            "tema-escuro",
            "tema-azul"
        );

        if (this.value === "escuro") {
            document.body.classList.add("tema-escuro");
        }

        if (this.value === "azul") {
            document.body.classList.add("tema-azul");
        }

        registrarAcao("Tema alterado");
    });

// ====================================
// TAMANHO DA FONTE
// ====================================

const fonteRange = document.getElementById("fonteRange");
const valorFonte = document.getElementById("valorFonte");

fonteRange.addEventListener("input", () => {

    let tamanho = fonteRange.value;

    biografia.style.fontSize = tamanho + "px";

    valorFonte.textContent = tamanho + "px";
});

document
    .getElementById("mostrarBio")
    .addEventListener("change", function () {

        if (this.checked) {
            biografia.style.display = "block";
        } else {
            biografia.style.display = "none";
        }

        registrarAcao("Exibição da biografia");
    });

document
    .getElementById("btnAtualizarContato")
    .addEventListener("click", () => {

        const email =
            document.getElementById("emailInput").value;

        const telefone =
            document.getElementById("telefoneInput").value;

        document.getElementById("emailExibido")
            .textContent = "E-mail: " + email;

        document.getElementById("telefoneExibido")
            .textContent = "Telefone: " + telefone;

        registrarAcao("Contato atualizado");
    });