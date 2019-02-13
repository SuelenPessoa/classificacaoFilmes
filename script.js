let filmes = [{
    nome: "capitãoAmérica", classificacao: 16
},{nome: "barbie", classificacao: 14
},{
    nome:"residentEvil", classificacao: 18
},{
    nome: "mulherMaravilha", classificacao: 18
},{
    nome: "minions", classificacao: 14
}];

let acc = "";
let idade =Number(prompt("Voce pode assistir"));

if (idade <=filmes[0].classificacao){
    acc += `você pode assistir ${filmes[0].nome} 
     `;
};

if (idade >=filmes[1].classificacao){
    acc +=  `você pode assistir ${filmes[1].nome}
    `;
};

if (idade <=filmes[2].classificacao){   
    acc += `você pode assistir ${filmes[2].nome}
    ` ;
};

if (idade <=filmes[3].classificacao){
     acc +=  `você pode assistir ${filmes[3].nome}
     `;
};
  
if (idade <=filmes[4].classificacao){   
    acc +=  `você pode assistir ${filmes[4].nome}
    `;
}
    alert(acc);