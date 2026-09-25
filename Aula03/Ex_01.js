// Exercício 1 – Sistema de Login

const usuario = {
    login: "admin",
    senha: "1234",
    tipo: "administrador"
};

console.log(`O login do ${usuario.tipo} é ${usuario.login} e a senha é ${usuario.senha}, muito fraca por sinal.`);

// Exercício 2 – Cadastro de Aluno

const aluno = {
    nome: "Lucas",
    curso: "Desenvolvimento de Sistemas",
    turma: "2º DSI1-Sesi"
};

console.log(`O aluno ${aluno.nome} está matriculado no curso de ${aluno.curso}, na turma ${aluno.turma}.`);

// Exercício 3 – Professor
const professor = {
    nome: "Carlos",
    disciplina: "JavaScript",
    turno: "Manhã"
};

console.log(`O professor ${professor.nome} ministra a disciplina de ${professor.disciplina} no turno da ${professor.turno}.`);

// Exercício 4 – Empresa
const empresa = {
    nome: "Tech Solutions",
    area: "Tecnologia",
    cidade: "Fortaleza"
};

console.log(`A empresa ${empresa.nome} atua na área de ${empresa.area} e fica em ${empresa.cidade}.`);


// Exercício 5 – Computador
const computador = {
    marca: "Dell",
    processador: "Intel i5",
    memoria: "8GB"
};

console.log(`O computador da marca ${computador.marca} possui processador ${computador.processador} e memória de ${computador.memoria}.`);

// Exercício 6 – Livro
const livro = {
    titulo: "JavaScript Básico",
    autor: "Ana Silva",
    paginas: 200
};

console.log(`O livro ${livro.titulo} foi escrito por ${livro.autor} e possui ${livro.paginas} páginas.`);


// Exercício 7 – Filme
const filme = {
    nome: "Matrix",
    genero: "Ficção",
    ano: 1999
};

console.log(`O filme ${filme.nome} é do gênero ${filme.genero} e foi lançado em ${filme.ano}.`);


// Exercício 8 – Jogo
const jogo = {
    nome: "Minecraft",
    plataforma: "PC",
    genero: "Sandbox"
};

console.log(`O jogo ${jogo.nome} roda na plataforma ${jogo.plataforma} e pertence ao gênero ${jogo.genero}.`);

// Exercício 09 – Escola
const escola = {
    nome: "EEEP",
    cidade: "Fortaleza",
    turno: "manhã"
};

console.log(`A escola ${escola.nome} funciona na cidade de ${escola.cidade} no turno da ${escola.turno}.`);

 // Exercício 10 – Conta

const conta = {
    usuario: "eduardo",
    senha: "1234",
    nome: "Eduardo Silva",
    email: "eduardo@email.com",
    nivel: "administrador",
    curso: "Desenvolvimento de Sistemas",
    turma: "DS 2",
    idade: 18
};

console.log("Nome do usuário:", conta.usuario);
console.log("Nome completo:", conta.nome);
console.log("E-mail:", conta.email);
console.log("Curso:", conta.curso);
console.log("Turma:", conta.turma);
console.log("Idade:", conta.idade);
console.log("Nível de acesso:", conta.nivel);
console.log("Senha:", conta.senha);

console.log(
    `O usuário ${conta.usuario}, de ${conta.idade} anos, está matriculado no curso de ${conta.curso}, turma ${conta.turma}. Seu nível de acesso é ${conta.nivel} e seu e-mail é ${conta.email}. A senha cadastrada é ${conta.senha}.`
);
