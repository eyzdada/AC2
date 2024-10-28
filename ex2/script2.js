let numeros = [2, 5, 8, 13, 16, 21];

let novo = numeros.map(num => {
    if (num % 2 !== 0) {
        let aleatorio = Math.floor(Math.random() * 10) + 1;
        return num * aleatorio;
    }
    return num; 
});

console.log(novo);