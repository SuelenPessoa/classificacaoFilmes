let filmes = [
    {titulo: 'como treinar seu dragão', classificacao: '0'},
    {titulo: 'Vidro', classificacao: '12'},
    {titulo: 'Batman O Cavaleiro das trevas', classificacao: '14'},
    {titulo: 'Resident Evil', classificacao: '16'},
    {titulo: 'Anjos da Noite', classificacao: '18'},
];

let idade = Number(prompt('Por favor digite sua idade : '));

for (let item in filmes){
    if (idade >= filmes[item].classificacao){
        console.log(filmes[item].titulo);
    }
}