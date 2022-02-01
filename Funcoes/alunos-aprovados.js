const alunos = [
    {
        nome: "Douglas",
        nota: 10,
        turma: "3A",
    },
    {
        nome: "Carlos",
        nota: 4,
        turma: "2B",
    },
    {
        nome: "Sandra",
        nota: 7,
        turma: "3A",
    },
    {
        nome: "João",
        nota: 5,
        turma: "1B",
    },
    {
        nome: "Saulo",
        nota: 5.9,
        turma: "1A",
    },
]

function alunosAprovados(alunos, media) {
    let aprovados = [];
    let reprovados = [];

    for (let i = 0; i < alunos.length; i++) {
        const { nota, nome } = alunos[i];

        if (nota >= media) {
            aprovados.push("'" + nome + "'");
        }
        else {
            reprovados.push("'" + nome + "'")
        }
    }

    return `    Os alunos aprovados foram: 
    [${aprovados}]
    Os alunos reprovados foram:
    [${reprovados}]`;
}

console.log(alunosAprovados(alunos, 6));