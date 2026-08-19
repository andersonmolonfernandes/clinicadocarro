import {
  Droplets,
  Sparkles,
  Shield,
  ScanEye,
  GlassWater,
  Hammer,
  type LucideIcon,
} from "lucide-react";
import type { ReactElement } from "react";
import { EngineShineIcon, HeadlightShineIcon, SeatShineIcon } from "./icons";

import polimentoImg from "@/assets/services/polimento-automotivo-joinville.jpg";
import vitrificacaoImg from "@/assets/services/vitrificacao-ceramica-joinville.jpg";
import higienizacaoImg from "@/assets/services/higienizacao-interna-automotiva-joinville.jpg";
import faroisImg from "@/assets/services/restauracao-farois-joinville.jpg";
import cristalizacaoImg from "@/assets/services/cristalizacao-vidros-joinville.jpg";
import lavacaoImg from "@/assets/services/lavacao-premium-cera-joinville.jpg";
import motorImg from "@/assets/services/limpeza-tecnica-motor-joinville.jpg";
import martelinhoAntes from "@/assets/services/martelinho-de-ouro-antes-joinville.jpg";
import martelinhoDepois from "@/assets/services/martelinho-de-ouro-depois-joinville.jpg";
import vidrosAntes from "@/assets/services/polimento-vidros-antes-joinville.jpg";
import vidrosDepois from "@/assets/services/polimento-vidros-depois-joinville.jpg";
import couroAntes from "@/assets/services/vitrificacao-de-couro-antes-joinville.jpg";
import couroDepois from "@/assets/services/vitrificacao-de-couro-depois-joinville.jpg";
import plasticosAntes from "@/assets/services/revitalizacao-de-plasticos-antes-joinville.jpg";
import plasticosDepois from "@/assets/services/revitalizacao-de-plasticos-depois-joinville.jpg";

export const SITE_URL = "https://clinicadocarro.vercel.app";

export type ServiceIcon =
  | LucideIcon
  | ((props: { className?: string }) => ReactElement);

export type Faq = { pergunta: string; resposta: string };

export type Service = {
  slug: string;
  nome: string;
  Icon: ServiceIcon;
  descricao: string;
  lista: string[];
  processo: string[];
  durabilidade?: string;
  video?: string;
  whatsapp: string;
  image?: string;
  alt?: string;
  beforeAfter?: {
    antes: string;
    depois: string;
    altAntes: string;
    altDepois: string;
    badge: string;
    BadgeIcon: LucideIcon;
  };
  destaque?: boolean;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string[];
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "polimento-tecnico",
    nome: "Polimento Técnico",
    Icon: Sparkles,
    image: polimentoImg,
    alt: "Polimento técnico automotivo em Joinville: pintura preta com brilho espelhado após correção",
    destaque: true,
    descricao:
      "Correção da pintura em 2 etapas: corte remove riscos e oxidação, refino devolve o brilho espelhado.",
    lista: [
      "Remove riscos, oxidação e marcas de lavagem",
      "Brilho espelhado profundo e uniforme",
      "Valoriza o carro na revenda",
    ],
    processo: [
      "Lavagem técnica e descontaminação",
      "Etapa 1 — corte: remoção de riscos e oxidação",
      "Etapa 2 — refino: brilho espelhado",
      "Proteção com cera, selante ou vitrificação",
    ],
    durabilidade: "6 a 12 meses (com proteção aplicada)",
    video: "https://www.instagram.com/reel/DVMh1Wnjxsw/?igsh=anM0OHp0bm1qcXNx",
    whatsapp: "Olá! Gostaria de saber mais sobre o Polimento Técnico.",
    seoTitle: "Polimento Automotivo em Joinville | Clínica do Carro",
    seoDescription:
      "Polimento automotivo em Joinville com correção de pintura em 2 etapas: remove riscos, oxidação e devolve brilho espelhado. Orçamento pelo WhatsApp.",
    h1: "Polimento Automotivo em Joinville",
    intro: [
      "O polimento automotivo é o serviço que devolve a aparência de novo à pintura do seu carro. Na Clínica do Carro — Studio Detail, em Joinville/SC, trabalhamos com correção técnica em duas etapas: primeiro o corte, que remove riscos finos, oxidação, marcas de lavagem automática e manchas de sol; depois o refino, que fecha os poros da pintura e cria aquele brilho espelhado profundo.",
      "Cada veículo passa por uma avaliação prévia da espessura e do estado do verniz, garantindo uma correção segura e sem desgaste desnecessário. O resultado é uma pintura mais viva, uniforme e com muito mais valor de revenda — especialmente em carros pretos e cores escuras, onde qualquer risco fica evidente.",
      "Para manter o resultado por muito mais tempo, recomendamos finalizar o polimento com uma proteção, como cera premium ou vitrificação cerâmica.",
    ],
    faqs: [
      {
        pergunta: "Quanto tempo dura um polimento automotivo?",
        resposta:
          "Com uma proteção aplicada logo após o serviço, o resultado do polimento se mantém de 6 a 12 meses. Com vitrificação cerâmica, a proteção tem durabilidade média de 1 a 1,5 anos.",
      },
      {
        pergunta: "O polimento desgasta a pintura do carro?",
        resposta:
          "Feito por um profissional, não. Trabalhamos com avaliação do verniz e produtos com abrasividade controlada, removendo apenas a camada mínima necessária para eliminar os riscos.",
      },
      {
        pergunta: "Quanto custa um polimento automotivo em Joinville?",
        resposta:
          "O valor depende do tamanho do veículo e do estado da pintura. Envie fotos do seu carro pelo WhatsApp e passamos um orçamento sem compromisso.",
      },
      {
        pergunta: "Quanto tempo o carro fica na oficina?",
        resposta:
          "Um polimento técnico completo normalmente leva de 1 a 2 dias, dependendo do tamanho do veículo e do nível de correção necessário.",
      },
    ],
  },
  {
    slug: "vitrificacao",
    nome: "Vitrificação",
    Icon: Shield,
    image: vitrificacaoImg,
    alt: "Aplicação de vitrificação cerâmica em carro na Clínica do Carro em Joinville",
    destaque: true,
    descricao:
      "Camada protetora que repele água, resiste a riscos e bloqueia UV. Dura até 3 anos.",
    lista: [
      "Efeito hidrofóbico — a água escorre sozinha",
      "Proteção contra UV, chuva ácida e resíduos",
      "Brilho profundo e lavagem muito mais fácil",
    ],
    processo: [
      "Carro novo: descontaminação + aplicação direta",
      "Carro usado: descontaminação + polimento + vitrificação",
      "Cura controlada da camada cerâmica",
    ],
    durabilidade: "Em média de 1 a 1,5 anos",
    video: "https://www.instagram.com/reel/DWpOqxYD6Ta/?igsh=MWZlaDlxaWJpZ3JvYw==",
    whatsapp: "Olá! Gostaria de saber mais sobre a Vitrificação.",
    seoTitle: "Vitrificação de Pintura em Joinville | Clínica do Carro",
    seoDescription:
      "Vitrificação cerâmica em Joinville: proteção hidrofóbica contra UV, chuva ácida e riscos leves, com brilho profundo e durabilidade de até 3 anos.",
    h1: "Vitrificação Cerâmica em Joinville",
    intro: [
      "A vitrificação cria uma camada cerâmica transparente sobre o verniz do seu carro. Essa camada é muito mais dura e resistente que a cera tradicional: repele água e sujeira, resiste a riscos leves e bloqueia os raios UV que desbotam a pintura ao longo dos anos.",
      "Em carros novos, a vitrificação é a melhor forma de preservar a pintura de fábrica desde o primeiro dia. Em carros usados, fazemos antes o polimento técnico — a camada cerâmica sela a pintura, então tudo que estiver embaixo dela fica registrado.",
      "No dia a dia, a diferença é enorme: a água escorre sozinha levando a sujeira junto, a lavagem fica muito mais rápida e o brilho se mantém por anos em Joinville, mesmo com chuva, sol forte e poeira.",
    ],
    faqs: [
      {
        pergunta: "Quanto tempo dura a vitrificação?",
        resposta:
          "Em média de 1 a 1,5 anos, dependendo do uso do veículo, exposição ao sol e cuidados na lavagem. Lavagens corretas ajudam a preservar a proteção.",
      },
      {
        pergunta: "Preciso polir o carro antes de vitrificar?",
        resposta:
          "Em carros usados, sim. A vitrificação sela a pintura, então riscos e oxidação precisam ser corrigidos antes. Carros novos geralmente só precisam de descontaminação.",
      },
      {
        pergunta: "Posso lavar o carro normalmente depois?",
        resposta:
          "Sim, e fica mais fácil. Recomendamos lavagem com shampoo neutro e técnica dos dois baldes, evitando lavagens automáticas com escova.",
      },
      {
        pergunta: "Vitrificação evita riscos?",
        resposta:
          "Ela aumenta a resistência a riscos leves e marcas de lavagem, mas não substitui uma película de proteção (PPF) contra impactos mais fortes.",
      },
    ],
  },
  {
    slug: "higienizacao-interna",
    nome: "Higienização Interna",
    Icon: SeatShineIcon,
    image: higienizacaoImg,
    alt: "Higienização interna automotiva em Joinville: banco de carro limpo com extratora",
    destaque: true,
    descricao:
      "Limpeza profunda de bancos, tapetes, teto e forros com extratora. Remove manchas, odores e ácaros.",
    lista: [
      "Elimina manchas, odores, ácaros e bactérias",
      "Interior com aspecto e cheiro de novo",
      "Mais conforto para quem tem alergia",
    ],
    processo: [
      "Aspiração completa e pré-tratamento",
      "Extração de bancos e tapetes",
      "Teto, forros e plásticos",
      "Finalização com proteção UV",
    ],
    durabilidade: "Recomendado a cada 6 a 12 meses",
    video: "https://www.instagram.com/reel/DbMNNBhAsb9/?igsh=MTZ5Nmo2YXgwdWIxeg==",
    whatsapp: "Olá! Gostaria de saber mais sobre a Higienização Interna.",
    seoTitle: "Higienização Automotiva em Joinville | Clínica do Carro",
    seoDescription:
      "Higienização interna automotiva em Joinville com extratora: remove manchas, odores, ácaros e bactérias de bancos, tapetes, teto e forros.",
    h1: "Higienização Automotiva Interna em Joinville",
    intro: [
      "A higienização interna vai muito além de uma aspiração. Usamos extratora profissional e produtos específicos para cada material — tecido, couro, plástico e carpete — removendo sujeira impregnada, manchas antigas, odores e microrganismos que se acumulam no estofado.",
      "É o serviço ideal para quem transporta crianças e pets, para quem tem alergia ou rinite, e para quem vai vender o carro e quer um interior com cheiro e aparência de novo.",
      "Finalizamos com proteção UV nos plásticos e painel, evitando ressecamento e desbotamento causados pelo sol.",
    ],
    faqs: [
      {
        pergunta: "Quanto tempo o carro demora para secar?",
        resposta:
          "Com extratora profissional a umidade residual é mínima. Normalmente o veículo é liberado no mesmo dia, já seco e pronto para uso.",
      },
      {
        pergunta: "A higienização remove cheiro de cigarro e de pet?",
        resposta:
          "Sim. Tratamos a origem do odor no estofado e nos forros, em vez de apenas mascarar com aromatizante.",
      },
      {
        pergunta: "Com que frequência devo higienizar o interior?",
        resposta:
          "Recomendamos a cada 6 a 12 meses, ou antes disso se o carro for usado com crianças, animais ou em ambientes de muita poeira.",
      },
      {
        pergunta: "Bancos de couro podem ser higienizados?",
        resposta:
          "Sim, com produtos próprios para couro, que limpam sem ressecar e ainda hidratam o material.",
      },
    ],
  },
  {
    slug: "restauracao-de-farois",
    nome: "Restauração de Faróis",
    Icon: HeadlightShineIcon,
    image: faroisImg,
    alt: "Restauração de faróis em Joinville: farol amarelado restaurado e transparente",
    descricao:
      "Devolve a transparência do farol como se fosse novo, com proteção à sua escolha.",
    lista: [
      "Mais segurança à noite com farol transparente",
      "Aparência de farol novo sem trocar a peça",
      "Proteção contra amarelamento",
    ],
    processo: [
      "Lixamento progressivo do policarbonato",
      "Polimento até a transparência total",
      "Vapor de polímero: até 3 anos de resistência",
      "Ou vitrificação: acabamento cristalino, em média de 1 a 1,5 anos",
    ],
    durabilidade: "Em média de 1 a 1,5 anos com vitrificação; até 3 anos com verniz UV",
    video: "https://www.instagram.com/reel/DYIubqlANtF/?igsh=MTZqc3FrNHp2b3IzZw==",
    whatsapp: "Olá! Gostaria de saber mais sobre a Restauração de Faróis.",
    seoTitle: "Restauração de Faróis em Joinville | Clínica do Carro",
    seoDescription:
      "Restauração de faróis amarelados em Joinville: lixamento, polimento e proteção que devolvem a transparência e aumentam a segurança à noite.",
    h1: "Restauração de Faróis em Joinville",
    intro: [
      "Faróis amarelados ou opacos reduzem drasticamente a iluminação da estrada à noite — além de envelhecerem a aparência do carro. A restauração recupera a transparência do policarbonato sem a necessidade de trocar a peça, com um custo muito menor.",
      "O processo passa por lixamento progressivo, polimento até a transparência total e, por fim, uma proteção à sua escolha: vapor de polímero, com até 3 anos de resistência, ou vitrificação, com acabamento cristalino de 1 a 2 anos.",
      "Sem a etapa de proteção o farol volta a amarelar em poucos meses — por isso ela é parte obrigatória do nosso serviço.",
    ],
    faqs: [
      {
        pergunta: "Vale mais a pena restaurar ou trocar o farol?",
        resposta:
          "Na maioria dos casos, restaurar. O custo é bem menor que o de um farol novo e o resultado visual e de iluminação fica muito próximo do original.",
      },
      {
        pergunta: "O farol volta a amarelar?",
        resposta:
          "Com a proteção aplicada, a transparência se mantém de 1 a 3 anos conforme o tipo escolhido e a exposição ao sol.",
      },
      {
        pergunta: "Quanto tempo leva o serviço?",
        resposta:
          "A restauração do par de faróis costuma ser feita no mesmo dia, incluindo o tempo de cura da proteção.",
      },
      {
        pergunta: "Faróis muito riscados têm solução?",
        resposta:
          "Sim, riscos e micro-fissuras superficiais são removidos no lixamento. Trincas profundas no policarbonato, porém, exigem a troca da peça.",
      },
    ],
  },
  {
    slug: "polimento-de-vidros",
    nome: "Polimento de Vidros",
    Icon: ScanEye,
    beforeAfter: {
      antes: vidrosAntes,
      depois: vidrosDepois,
      altAntes: "Para-brisa com marcas de palhetas e riscos antes do polimento de vidros",
      altDepois: "Para-brisa cristalino depois do polimento de vidros em Joinville",
      badge: "Sem trocar o vidro",
      BadgeIcon: ScanEye,
    },
    descricao:
      "Remove riscos leves, marcas de palhetas e micro riscos do vidro, devolvendo transparência total e visibilidade nítida.",
    lista: [
      "Remove marcas de palhetas e riscos leves",
      "Elimina o aspecto embaçado do vidro",
      "Visibilidade muito mais nítida e segura",
    ],
    processo: [
      "Análise dos riscos na contraluz e demarcação",
      "Polimento técnico com composto específico para vidro",
      "Refino da superfície até a transparência",
      "Limpeza e inspeção final na contraluz",
    ],
    video: "https://www.instagram.com/reel/DWcLd4HD4nA/?igsh=MWVsYXZ6emM3aWcwYw==",
    whatsapp: "Olá! Gostaria de saber mais sobre o Polimento de Vidros.",
    seoTitle: "Polimento de Vidros em Joinville | Clínica do Carro",
    seoDescription:
      "Polimento de vidros automotivos em Joinville: remove marcas de palhetas e riscos leves do para-brisa, devolvendo transparência e visibilidade segura.",
    h1: "Polimento de Vidros Automotivos em Joinville",
    intro: [
      "Marcas de palheta, micro riscos e o aspecto esbranquiçado do para-brisa comprometem a visibilidade — principalmente à noite e na contraluz, quando os faróis dos outros carros espalham a luz nos riscos.",
      "O polimento de vidros remove esses defeitos superficiais com composto específico para vidro e refino controlado, sem distorcer a superfície e sem precisar trocar a peça.",
      "Cada vidro é analisado na contraluz antes e depois do serviço, garantindo transparência real e uma direção muito mais segura no dia a dia em Joinville.",
    ],
    faqs: [
      {
        pergunta: "O polimento remove qualquer risco do vidro?",
        resposta:
          "Remove riscos superficiais, marcas de palheta e manchas. Riscos profundos, que prendem a unha, e trincas não podem ser corrigidos por polimento.",
      },
      {
        pergunta: "O polimento distorce a visão pelo para-brisa?",
        resposta:
          "Não, quando feito de forma técnica e com controle de pressão e calor — que é exatamente o nosso processo.",
      },
      {
        pergunta: "Qual a diferença entre polimento e cristalização de vidros?",
        resposta:
          "O polimento corrige a superfície do vidro; a cristalização aplica uma película hidrofóbica que faz a água escorrer. Os dois se complementam.",
      },
    ],
  },
  {
    slug: "cristalizacao-de-vidros",
    nome: "Cristalização de Vidros",
    Icon: GlassWater,
    image: cristalizacaoImg,
    alt: "Cristalização de vidros em Joinville: água formando gotas no para-brisa em dia de chuva",
    descricao:
      "Cria uma película hidrofóbica sobre o vidro: a água forma esferas e escorre sozinha, melhorando muito a visibilidade na chuva, facilitando a limpeza e aumentando a segurança ao dirigir.",
    lista: [
      "Efeito hidrofóbico — gotas escorrem sozinhas",
      "Visibilidade superior em dias de chuva",
      "Limpeza mais fácil e mais segurança ao volante",
    ],
    processo: [
      "Limpeza profunda e descontaminação do vidro",
      "Aplicação da película hidrofóbica",
      "Cura controlada e inspeção do efeito",
    ],
    durabilidade: "Até 12 meses",
    video: "https://www.instagram.com/reel/DYVkYAhAyIP/?igsh=YTE1ZmY0N3luOTJ1",
    whatsapp: "Olá! Gostaria de saber mais sobre a Cristalização de Vidros.",
    seoTitle: "Cristalização de Vidros em Joinville | Clínica do Carro",
    seoDescription:
      "Cristalização de vidros em Joinville: película hidrofóbica que faz a água escorrer sozinha, melhora a visibilidade na chuva e aumenta a segurança.",
    h1: "Cristalização de Vidros em Joinville",
    intro: [
      "A cristalização aplica uma película hidrofóbica sobre o vidro. Na chuva, a água deixa de formar aquele filme que embaça a visão: as gotas viram esferas e escorrem sozinhas com o vento, deixando o para-brisa limpo mesmo em velocidade.",
      "Em uma cidade chuvosa como Joinville, o ganho de segurança é imediato — menos uso de palheta, menos reflexo à noite e visão nítida em temporais.",
      "O tratamento também repele insetos, poeira e resíduos, tornando a limpeza dos vidros muito mais rápida no dia a dia.",
    ],
    faqs: [
      {
        pergunta: "Quanto tempo dura a cristalização de vidros?",
        resposta:
          "Até 12 meses, dependendo do uso das palhetas, da quilometragem e da exposição do veículo.",
      },
      {
        pergunta: "Ainda preciso usar o limpador de para-brisa?",
        resposta:
          "Em velocidade acima de 60 km/h a água escorre praticamente sozinha. Em baixa velocidade a palheta ainda ajuda, mas com muito menos uso.",
      },
      {
        pergunta: "Pode ser aplicada em todos os vidros?",
        resposta:
          "Sim, no para-brisa, laterais, traseiro e também nos retrovisores, que ganham muito em visibilidade na chuva.",
      },
    ],
  },
  {
    slug: "lavacao-completa-premium",
    nome: "Lavação Completa Premium + Cera",
    Icon: Droplets,
    image: lavacaoImg,
    alt: "Lavação completa premium com cera em Joinville: carro limpo e brilhante",
    descricao:
      "Lavagem completa por fora e por dentro, finalizada com cera premium que dá brilho intenso e protege a pintura por cerca de 3 a 5 meses.",
    lista: [
      "Carro impecável por dentro e por fora",
      "Sem riscos: técnica dos dois baldes",
      "Cera premium: brilho intenso e proteção da pintura",
    ],
    processo: [
      "Rodas, pneus e caixas de roda",
      "Lavagem externa completa",
      "Aspiração e limpeza interna",
      "Aplicação da cera premium na pintura",
    ],
    durabilidade: "Cera premium: 3 a 5 meses",
    video: "https://www.instagram.com/reel/DVeiGUXjwAV/?igsh=YjByZWdzMGptZWtj",
    whatsapp: "Olá! Gostaria de saber mais sobre a Lavação Completa Premium + Cera.",
    seoTitle: "Lavação Premium com Cera em Joinville | Clínica do Carro",
    seoDescription:
      "Lavação completa premium em Joinville com técnica dos dois baldes e cera de alta performance: brilho intenso e proteção da pintura por 3 a 5 meses.",
    h1: "Lavação Automotiva Premium com Cera em Joinville",
    intro: [
      "Nossa lavação premium é feita com a técnica dos dois baldes e luvas de microfibra, evitando os micro riscos circulares causados por lavagens automáticas e panos inadequados.",
      "O serviço cobre rodas, pneus, caixas de roda, toda a parte externa, além de aspiração e limpeza interna — e termina com a aplicação de uma cera premium que realça o brilho e protege a pintura por cerca de 3 a 5 meses.",
      "É a manutenção ideal entre polimentos, mantendo o carro sempre apresentável e a pintura protegida contra sol, chuva e poeira.",
    ],
    faqs: [
      {
        pergunta: "Qual a diferença para uma lavagem comum?",
        resposta:
          "Usamos técnica dos dois baldes, luvas de microfibra e produtos com pH neutro, evitando riscos, além de finalizar com cera premium — o que uma lavagem simples não inclui.",
      },
      {
        pergunta: "Quanto tempo dura a cera aplicada?",
        resposta:
          "De 3 a 5 meses, dependendo da exposição ao sol e da frequência de lavagem do veículo.",
      },
      {
        pergunta: "Preciso agendar?",
        resposta:
          "Sim, recomendamos agendar pelo WhatsApp para garantir horário e o tempo necessário de dedicação ao seu carro.",
      },
    ],
  },
  {
    slug: "limpeza-tecnica-do-motor",
    nome: "Limpeza Técnica do Motor",
    Icon: EngineShineIcon,
    image: motorImg,
    alt: "Limpeza técnica de motor em Joinville: compartimento do motor limpo e com verniz protetor",
    descricao: "Desengraxamento técnico completo, finalizado com verniz protetor.",
    lista: [
      "Motor limpo facilita manutenção e revisão",
      "Evita acúmulo de graxa e sujeira",
      "Valoriza o carro na venda",
    ],
    processo: [
      "Proteção de borrachas, plásticos e componentes",
      "Desengraxamento por partes",
      "Secagem a ar comprimido",
      "Verniz protetor final",
    ],
    video: "https://www.instagram.com/reel/DYkyhh_A_Ll/?igsh=MnB0cmdnM3p3Zncx",
    whatsapp: "Olá! Gostaria de saber mais sobre a Limpeza Técnica do Motor.",
    seoTitle: "Limpeza Técnica de Motor em Joinville | Clínica do Carro",
    seoDescription:
      "Limpeza técnica de motor em Joinville: desengraxamento seguro com proteção de componentes, secagem a ar comprimido e verniz protetor final.",
    h1: "Limpeza Técnica de Motor em Joinville",
    intro: [
      "A limpeza do compartimento do motor exige método. Antes de qualquer produto, protegemos módulos, chicotes, alternador e demais componentes sensíveis — só então fazemos o desengraxamento por partes, com produtos específicos e sem jatos de alta pressão diretos.",
      "Depois da secagem a ar comprimido, aplicamos um verniz protetor que devolve a cor de plásticos e mangueiras e dificulta o acúmulo de poeira e graxa.",
      "Além do resultado visual, um motor limpo facilita revisões, ajuda a identificar vazamentos precocemente e valoriza bastante o carro na hora da venda.",
    ],
    faqs: [
      {
        pergunta: "Lavar o motor pode causar problemas elétricos?",
        resposta:
          "Não, quando feito de forma técnica. Protegemos todos os componentes sensíveis e não usamos jato de alta pressão direto no compartimento.",
      },
      {
        pergunta: "Com que frequência devo limpar o motor?",
        resposta:
          "Uma a duas vezes por ano é suficiente para a maioria dos veículos, ou antes de vender o carro.",
      },
      {
        pergunta: "O verniz protetor mancha as peças?",
        resposta:
          "Não. Ele deixa um acabamento uniforme e acetinado, sem aspecto oleoso, e ainda dificulta o acúmulo de sujeira.",
      },
    ],
  },
  {
    slug: "martelinho-de-ouro",
    nome: "Martelinho de Ouro",
    Icon: Hammer,
    beforeAfter: {
      antes: martelinhoAntes,
      depois: martelinhoDepois,
      altAntes: "Porta de carro amassada antes do martelinho de ouro em Joinville",
      altDepois: "Porta de carro recuperada sem pintura após martelinho de ouro em Joinville",
      badge: "Sem pintura",
      BadgeIcon: Hammer,
    },
    descricao:
      "Recuperação da lataria sem pintura. Amassados e granizo removidos com a pintura original 100% preservada.",
    lista: [
      "Sem repintura e sem massa",
      "Pintura de fábrica preservada",
      "Mais rápido e mais barato que funilaria",
    ],
    processo: [
      "Mapeamento dos amassados com iluminação técnica",
      "Acesso interno à chapa",
      "Repuxo e nivelamento gradual",
      "Conferência do reflexo na contraluz",
    ],
    durabilidade: "Reparo permanente",
    whatsapp: "Olá! Gostaria de saber mais sobre o Martelinho de Ouro.",
    seoTitle: "Martelinho de Ouro em Joinville | Clínica do Carro",
    seoDescription:
      "Martelinho de ouro em Joinville: remoção de amassados e marcas de granizo sem pintura, preservando 100% a pintura original de fábrica.",
    h1: "Martelinho de Ouro em Joinville",
    intro: [
      "O martelinho de ouro (reparo de amassados sem pintura) remove amassados, marcas de granizo e batidas de porta trabalhando a chapa por dentro, com ferramentas específicas e iluminação técnica que revela cada deformação.",
      "Como não há massa nem repintura, a pintura original de fábrica é 100% preservada — o que é decisivo para o valor do veículo na revenda e evita diferenças de tonalidade entre peças.",
      "O reparo é permanente, costuma ser bem mais rápido que a funilaria tradicional e, na maioria dos casos, também mais econômico.",
    ],
    faqs: [
      {
        pergunta: "Todo amassado pode ser reparado sem pintura?",
        resposta:
          "A maioria sim, desde que a pintura não esteja trincada ou descascada e a chapa não tenha vinco muito severo. Envie fotos pelo WhatsApp para avaliarmos.",
      },
      {
        pergunta: "O martelinho de ouro danifica a pintura?",
        resposta:
          "Não. O trabalho é feito por trás da chapa, justamente para preservar integralmente a pintura de fábrica.",
      },
      {
        pergunta: "Serve para marcas de granizo?",
        resposta:
          "Sim, é a técnica mais indicada para granizo, já que permite recuperar muitos pontos de uma vez sem repintar o veículo.",
      },
      {
        pergunta: "Quanto tempo leva o reparo?",
        resposta:
          "Amassados simples podem ser resolvidos em poucas horas. Casos com muitos pontos, como granizo, podem levar de 1 a 3 dias.",
      },
    ],
  },
  {
    slug: "vitrificacao-de-couro",
    nome: "Vitrificação de Couro",
    Icon: SeatShineIcon,
    beforeAfter: {
      antes: couroAntes,
      depois: couroDepois,
      altAntes: "Couro do banco ressecado e sem brilho antes da vitrificação de couro em Joinville",
      altDepois: "Couro do banco hidratado e protegido após vitrificação de couro em Joinville",
      badge: "Couro protegido",
      BadgeIcon: Shield,
    },
    descricao:
      "Hidratação e selagem cerâmica do couro: protege contra manchas, suor e raios UV, mantendo o toque original.",
    lista: [
      "Barreira contra manchas de jeans, suor e líquidos",
      "Proteção UV: evita ressecamento e trincas",
      "Toque original preservado, sem aspecto oleoso",
    ],
    processo: [
      "Limpeza profunda do couro com produto pH neutro",
      "Hidratação e nutrição das fibras",
      "Aplicação da camada cerâmica protetora",
      "Cura e acabamento acetinado uniforme",
    ],
    durabilidade: "12 a 24 meses",
    whatsapp: "Olá! Gostaria de saber mais sobre a Vitrificação de Couro.",
    seoTitle: "Vitrificação de Couro em Joinville | Clínica do Carro",
    seoDescription:
      "Vitrificação de couro em Joinville: limpeza profunda, hidratação e selagem cerâmica que protege bancos e volante contra manchas e raios UV.",
    h1: "Vitrificação de Couro em Joinville",
    intro: [
      "A vitrificação de couro é a proteção definitiva para bancos, volante e apoios do seu carro. Na Clínica do Carro — Studio Detail, em Joinville/SC, começamos com uma limpeza profunda com produtos de pH neutro, que remove suor, oleosidade e sujeira acumulada nos poros do couro sem agredir o material.",
      "Em seguida vem a hidratação, que devolve flexibilidade às fibras, e a aplicação da camada cerâmica: uma película invisível que cria uma barreira contra manchas de tinta de jeans, líquidos, suor e principalmente contra os raios UV, que são os grandes responsáveis pelo ressecamento e pelas trincas.",
      "O acabamento é acetinado e natural — o couro continua com o toque original, mas passa a sujar muito menos e a limpeza do dia a dia se resume a um pano de microfibra levemente úmido.",
    ],
    faqs: [
      {
        pergunta: "Quanto tempo dura a vitrificação de couro?",
        resposta:
          "De 12 a 24 meses, dependendo do uso do veículo e da exposição ao sol. Bancos de uso diário e carros que ficam na rua tendem a exigir manutenção mais cedo.",
      },
      {
        pergunta: "A vitrificação deixa o couro escorregadio ou brilhante?",
        resposta:
          "Não. O acabamento é acetinado e mantém o toque natural do couro, sem aspecto oleoso ou plastificado.",
      },
      {
        pergunta: "Serve para couro sintético (courvin)?",
        resposta:
          "Sim. Aplicamos também em couro sintético e em volantes, com produto adequado a cada material.",
      },
      {
        pergunta: "Resolve manchas de tinta de calça jeans?",
        resposta:
          "Sim, a camada cerâmica dificulta a transferência da tinta e facilita muito a remoção quando ela acontece. Manchas antigas são tratadas na etapa de limpeza profunda.",
      },
    ],
  },
  {
    slug: "revitalizacao-de-plasticos",
    nome: "Revitalização de Plásticos",
    Icon: Sparkles,
    beforeAfter: {
      antes: plasticosAntes,
      depois: plasticosDepois,
      altAntes:
        "Parachoque e frisos plásticos esbranquiçados pelo sol antes da revitalização em Joinville",
      altDepois:
        "Plásticos automotivos com acabamento preto acetinado após revitalização em Joinville",
      badge: "Preto restaurado",
      BadgeIcon: Sparkles,
    },
    descricao:
      "Devolve a cor preta original de parachoques, frisos e retrovisores esbranquiçados pelo sol.",
    lista: [
      "Fim do aspecto esbranquiçado e desbotado",
      "Acabamento preto acetinado e uniforme",
      "Proteção UV que retarda o desbotamento",
    ],
    processo: [
      "Limpeza e descontaminação dos plásticos",
      "Remoção de resíduos de cera e silicone antigo",
      "Aplicação do revitalizador com proteção UV",
      "Nivelamento do acabamento e secagem",
    ],
    durabilidade: "4 a 8 meses",
    whatsapp: "Olá! Gostaria de saber mais sobre a Revitalização de Plásticos.",
    seoTitle: "Revitalização de Plásticos em Joinville | Clínica do Carro",
    seoDescription:
      "Revitalização de plásticos automotivos em Joinville: devolve o preto original de parachoques, frisos e retrovisores com proteção UV. Orçamento no WhatsApp.",
    h1: "Revitalização de Plásticos Automotivos em Joinville",
    intro: [
      "Com o tempo, o sol e a chuva deixam os plásticos externos do carro esbranquiçados e acinzentados. Parachoques texturizados, frisos, colunas, capas de retrovisor e caixas de roda são os primeiros a envelhecer — e é justamente isso que faz um carro bem cuidado parecer velho.",
      "Na Clínica do Carro — Studio Detail, em Joinville/SC, a revitalização começa pela limpeza e descontaminação, removendo silicones e ceras antigas que impedem a fixação do produto. Só depois aplicamos o revitalizador, que penetra no plástico e devolve a cor preta original com acabamento acetinado, sem aquele efeito oleoso que atrai poeira.",
      "O produto conta com filtro UV, retardando um novo desbotamento. É um serviço rápido, de excelente custo-benefício, e faz uma diferença enorme quando combinado com polimento ou lavação premium.",
    ],
    faqs: [
      {
        pergunta: "Quanto tempo dura a revitalização de plásticos?",
        resposta:
          "Em média de 4 a 8 meses, variando conforme a exposição ao sol, a frequência de lavagem e se o carro fica em garagem.",
      },
      {
        pergunta: "O produto deixa o plástico oleoso?",
        resposta:
          "Não. Usamos um revitalizador de acabamento acetinado, que não escorre com a chuva nem atrai poeira como o silicone comum.",
      },
      {
        pergunta: "Funciona em plásticos muito desbotados?",
        resposta:
          "Sim, na grande maioria dos casos recuperamos o preto original. Em plásticos com desgaste extremo, o resultado é uma melhora significativa, mas pode não ficar 100% uniforme — avaliamos por fotos no WhatsApp.",
      },
      {
        pergunta: "Serve para plásticos internos?",
        resposta:
          "Para o interior usamos produtos específicos de acabamento fosco, aplicados dentro da higienização interna.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

