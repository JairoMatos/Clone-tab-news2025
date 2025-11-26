function status(request, response) {
  response.status(200).json({
    Gfoco: {
      participantes: {
        1: {
          nome: "jairo",
          idade: 39,
          altura: 185,
          peso_inicial: 115,
          peso_atual: 110,
          peso_alvo: "88",
          abordagem: "dieta cetogenica",
          inicio: "10/11/2025",
        },
        2: {
          nome: "ana carolina",
        },
        3: {
          nome: "caina",
        },
      },
    },
  });
}
export default status;
