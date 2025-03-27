var pedido = 70.0;

function compras(compra) {
  if (compra >= 0) {
    if (compra < 50.0) {
      console.log("Frete não disponível para a sua compra.");
    } else if (compra >= 50.0 && compra <= 199.99) {
      console.log(
        "Frete disponível para sua compra, porém com custo adicional.");
    } else {
      console.log("Frete grátis disponível para a sua compra.");
    }
  }
}
compras(pedido);
