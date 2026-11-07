/**
 * Depoimentos reais de clientes. Para adicionar um novo, copie um item
 * e edite. Use apenas avaliações reais (ex.: Google).
 */
export type Testimonial = {
  nome: string;
  estrelas: number;
  texto: string;
  servico?: string;
  fonte: string;
};

export const testimonials: Testimonial[] = [
  {
    nome: "Rodrigo P.",
    estrelas: 5,
    servico: "Vitrificação",
    fonte: "Google",
    texto:
      "Excelente atendimento e serviço de primeira! Fiz a vitrificação do meu carro na Clínica do Carro e o resultado ficou incrível, com muito brilho e acabamento impecável. Equipe atenciosa e profissional. Recomendo!",
  },
];
