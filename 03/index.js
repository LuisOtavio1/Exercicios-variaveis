let valorTenis = 130;
let meuDinheiro = 80;
let pct = (meuDinheiro * 100)/ valorTenis;
let cupomDesconto = 100 - pct;
console.log(`O cupom de desconto terá que ser de ${Math.ceil(cupomDesconto)}%`);
