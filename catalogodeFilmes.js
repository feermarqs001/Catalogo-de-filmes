
// Database

const catalogo = [
    { titulo: "Velozes e Furiosos", ano: 2001, nota: 8 },
    { titulo: "Fique Rico ou Morra Tentando", ano: 2005, nota: 6.5 },
    { titulo: "Piratas do Vale do Silício", ano: 1999, nota: 9 },
    { titulo: "A Rede Social", ano: 2010, nota: 7.5 }
];


// Functions

function mostrarCatalogoCompleto() {
    console.log("--- Meu catálogo de filmes Completo ---");
    for (const ficha of catalogo) {
        console.log(`- ${ficha.titulo} (${ficha.ano})`);
    }
}

// Função de notas de corte
function mostrarApenasOsBons(notaDeCorte) {
    console.log(`\n--- Apenas os melhores! (Nota ${notaDeCorte} ou superior) ---`);
    for (const ficha of catalogo) {
        if (ficha.nota >= notaDeCorte) {
            console.log(`- ${ficha.titulo} (nota: ${ficha.nota})`);
        }
    }
}


// Play

mostrarCatalogoCompleto();
mostrarApenasOsBons(7);