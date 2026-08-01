# Clínica do Carro - Studio Detail

{

  "prompt": {

    "objetivo": "Crie um site completo em React para uma estética automotiva chamada Clínica do Carro — Studio Detail em Joinville/SC. O objetivo do site é simples: o visitante vê os serviços e clica para falar no WhatsApp. Sem textos genéricos, sem enrolação, sem baboseira de marketing.",



    "negocio": {

      "nome": "Clínica do Carro — Studio Detail",

      "cidade": "Joinville/SC",

      "desde": "2013",

      "endereco": "Rua Alois Finder, 1401 — Aventureiro, Joinville/SC",

      "whatsapp": "https://wa.me/5547999940973",

      "whatsapp_mensagem_padrao": "Olá! Vi o site e gostaria de agendar um serviço.",

      "logo": "/logo.png"

    },



    "stack": {

      "framework": "React",

      "css": "Tailwind CSS",

      "animacoes": "Framer Motion",

      "icones": "Lucide React",

      "fontes": ["Bebas Neue", "Rajdhani:500,600,700", "Barlow:300,400,500,600", "Orbitron:500,700"],

      "estrutura": "Single page landing page — totalmente responsivo mobile first"

    },



    "cores": {

      "bg": "#0a0a0a",

      "bg_alt": "#0d0d0d",

      "bg_card": "rgba(255,255,255,0.02)",

      "green": "#00e676",

      "green_dark": "#00c853",

      "green_glow": "rgba(0,230,118,0.15)",

      "gold": "#c9a84c",

      "white": "#ffffff",

      "muted": "#888888",

      "footer_bg": "#060606"

    },



    "estilos_globais": {

      "body_background_pattern": "repeating-linear-gradient(-45deg, rgba(0,230,118,0.018), rgba(0,230,118,0.018) 1px, transparent 1px, transparent 44px)",

      "scrollbar": "width 4px, track #0a0a0a, thumb #00e676, border-radius 2px",

      "font_smoothing": "-webkit-font-smoothing: antialiased",

      "scroll_behavior": "smooth"

    },



    "animacoes_globais": {

      "entrada_elementos": "whileInView com initial={{ opacity: 0, y: 40 }} e animate={{ opacity: 1, y: 0 }}, viewport={{ once: true }}",

      "stagger": "0.08s entre elementos irmãos via staggerChildren",

      "hover_cards": "whileHover={{ y: -6 }} com spring suave",

      "transicao_padrao": "{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }",

      "particulas_hero": "12 círculos verdes 3-5px, opacity 0.3-0.6, posições aleatórias em %, animação y de -20 a 20 com repeat: Infinity, repeatType: reverse, durações entre 3s e 7s cada",

      "orb_hero": "scale de 1 para 1.15 e opacity 0.5 a 1, repeat: Infinity, repeatType: reverse, duration: 6"

    },



    "secoes": {



      "1_header": {

        "tipo": "fixo no topo — position fixed",

        "inicial": "transparente",

        "ao_scrollar": "background rgba(10,10,10,0.9), backdrop-filter blur(16px), border-bottom 1px solid rgba(0,230,118,0.15), transição 0.4s",

        "gatilho_scroll": "50px",

        "conteudo": {

          "esquerda": "<img src='/logo.png' height='52' loading='lazy' alt='Clínica do Carro' />",

          "links": ["Serviços", "Sobre", "Localização"],

          "links_estilo": "Rajdhani uppercase, cor muted, hover verde com underline animado",

          "botao": "Agendar agora — verde, ícone Calendar, link whatsapp"

        },

        "mobile": {

          "esconder": "links de navegação",

          "mostrar": "botão hamburger (ícone Menu)",

          "menu_mobile": {

            "fundo": "rgba(6,6,6,0.98) com backdrop-filter blur(20px)",

            "links_estilo": "Bebas Neue 3rem centralizados",

            "animacao": "entrada staggerada com Framer Motion",

            "fechar": "botão X no topo direito, também fecha ao clicar em qualquer link"

          }

        }

      },



      "2_hero": {

        "altura": "100vh",

        "layout": "flex center, overflow hidden, position relative",

        "camadas_fundo": [

          "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(0,230,118,0.07), transparent)",

          "Orb: div 700x700px, background radial-gradient verde, centralizado, animação scale e opacity Framer Motion",

          "12 partículas: círculos 3-5px verdes, posições aleatórias, animação y independente"

        ],

        "conteudo": {

          "label": {

            "texto": "JOINVILLE/SC — DESDE 2013",

            "fonte": "Orbitron 0.68rem",

            "cor": "#c9a84c",

            "letter_spacing": "5px",

            "animacao_delay": "0.1s"

          },

          "titulo": {

            "texto": "SEU CARRO MERECE O MELHOR",

            "destaque": "MELHOR em verde #00e676",

            "fonte": "Bebas Neue clamp(4rem, 10vw, 8rem)",

            "line_height": "0.9",

            "animacao_delay": "0.3s"

          },

          "subtitulo": {

            "texto": "Polimento, vitrificação, higienização e muito mais. Agende agora pelo WhatsApp.",

            "fonte": "Barlow 300 clamp(1rem, 1.5vw, 1.2rem)",

            "cor": "muted",

            "animacao_delay": "0.5s"

          },

          "botoes": {

            "animacao_delay": "0.7s",

            "primario": {

              "texto": "Agendar pelo WhatsApp",

              "estilo": "verde, padding 16px 36px, Rajdhani bold",

              "icone": "MessageCircle",

              "hover": "whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(0,230,118,0.4)' }}",

              "link": "https://wa.me/5547999940973?text=Olá! Vi o site e gostaria de agendar um serviço."

            },

            "secundario": {

              "texto": "Ver Serviços",

              "estilo": "outline verde, mesmo padding",

              "icone": "ChevronDown",

              "link": "#servicos"

            }

          },

          "scroll_indicator": {

            "label": "SCROLL em Orbitron",

            "icone": "ChevronDown",

            "animacao": "y: [0, 8, 0] repeat infinity"

          }

        }

      },



      "3_stats": {

        "background": "#0d0d0d",

        "border": "top e bottom 1px solid rgba(0,230,118,0.15)",

        "padding": "64px 0",

        "grid": "4 colunas desktop, 2x2 mobile",

        "animacao_contador": "useEffect + useState, contar de 0 até valor em 1800ms com requestAnimationFrame e easing easeOutQuart ao entrar na tela — once: true",

        "items": [

          { "valor": 11, "sufixo": "+", "label": "Anos de Experiência" },

          { "valor": 5000, "sufixo": "+", "label": "Carros Atendidos", "separador_milhar": true },

          { "valor": 100, "sufixo": "%", "label": "Satisfação" },

          { "valor": 8, "sufixo": "+", "label": "Serviços" }

        ],

        "numero_estilo": "Bebas Neue clamp(2.8rem, 5vw, 4.2rem), cor verde, text-shadow 0 0 30px rgba(0,230,118,0.35)",

        "label_estilo": "Barlow 0.8rem, cinza, uppercase, letter-spacing 2px"

      },



      "4_servicos": {

        "id": "servicos",

        "padding": "110px 0",

        "label": "O QUE FAZEMOS — dourado Orbitron",

        "titulo": "Serviços que fazemos — sem subtítulo",

        "grid": "3 colunas desktop, 2 colunas tablet 1024px, 1 coluna mobile, gap 20px",

        "comportamento": "apenas 1 card aberto por vez, fechar anterior ao abrir novo",

        "card_fechado": {

          "background": "rgba(255,255,255,0.02)",

          "border": "1px solid rgba(0,230,118,0.15)",

          "border_radius": "10px",

          "padding": "28px 26px",

          "layout": "flex row: ícone + nome + ChevronDown",

          "icone_container": "50x50px, bg rgba(0,230,118,0.08), border verde 15%, border-radius 10px",

          "nome_estilo": "Rajdhani 700 uppercase 1.1rem",

          "chevron": "anima rotate 180deg quando aberto",

          "hover": "whileHover={{ y: -6, borderColor: 'rgba(0,230,118,0.5)', boxShadow: '0 20px 60px rgba(0,230,118,0.12)' }}"

        },

        "card_aberto": {

          "border_color": "rgba(0,230,118,0.4)",

          "animacao_corpo": "AnimatePresence + motion.div com initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} — sem max-height",

          "conteudo": {

            "descricao": "Barlow 300 0.9rem cinza",

            "lista": "bullets círculo verde 5px, Barlow 0.88rem",

            "botao": "100% largura, border verde, cor verde, hover fundo verde texto preto, Rajdhani bold uppercase"

          }

        },

        "lista_servicos": [

          {

            "nome": "Lavação Premium",

            "icone": "Droplets",

            "descricao": "Lavagem completa por fora e por dentro. Rodas, pneus, vidros, aspiração, plásticos internos e cera protetora.",

            "lista": ["Lavagem externa completa", "Rodas e pneus", "Aspiração e limpeza interna", "Proteção dos plásticos internos", "Cera protetora na pintura"],

            "whatsapp_texto": "Olá! Gostaria de saber mais sobre a Lavação Premium."

          },

          {

            "nome": "Polimento Técnico",

            "icone": "Sparkles",

            "descricao": "Correção da pintura em 2 etapas: corte remove riscos e oxidação, refino devolve o brilho espelhado.",

            "lista": ["Etapa 1 — Corte: remove riscos e oxidação", "Etapa 2 — Refino: brilho espelhado", "Proteção com cera, selante ou vitrificação"],

            "whatsapp_texto": "Olá! Gostaria de saber mais sobre o Polimento Técnico."

          },

          {

            "nome": "Higienização Interna",

            "icone": "Wind",

            "descricao": "Limpeza profunda com extratora. Remove sujeira, ácaros, fungos e odores que você não vê mas respira.",

            "lista": ["Bancos de tecido e couro com extratora", "Tapetes e carpetes", "Painel e plásticos internos", "Porta-malas"],

            "whatsapp_texto": "Olá! Gostaria de saber mais sobre a Higienização Interna."

          },

          {

            "nome": "Vitrificação VX45",

            "icone": "Shield",

            "descricao": "Camada protetora que repele água, resiste a riscos e bloqueia UV. Dura até 3 anos.",

            "lista": ["Carro novo: aplicação direta", "Carro usado: descontaminação + polimento + vitrificação", "Durabilidade de até 3 anos"],

            "whatsapp_texto": "Olá! Gostaria de saber mais sobre a Vitrificação VX45."

          },

          {

            "nome": "Restauração de Faróis",

            "icone": "Lightbulb",

            "descricao": "A restauração devolve a transparência do farol como se fosse novo. Depois o cliente escolhe a proteção.",

            "lista": ["Vapor de polímero: camada resistente, até 3 anos", "Vitrificação: acabamento cristalino, 1 a 2 anos"],

            "whatsapp_texto": "Olá! Gostaria de saber mais sobre a Restauração de Faróis."

          },

          {

            "nome": "Vidros e Cristalização",

            "icone": "ScanEye",

            "descricao": "Remove chuva ácida e riscos. Cristalização com efeito hidrofóbico — água escorrega sozinha acima de 60km/h.",

            "lista": ["Remoção de chuva ácida", "Remoção de riscos leves e médios", "Cristalização repelente de água"],

            "whatsapp_texto": "Olá! Gostaria de saber mais sobre Vidros e Cristalização."

          },

          {

            "nome": "Limpeza de Motor",

            "icone": "Settings2",

            "descricao": "Desengraxamento técnico completo, finalizado com verniz protetor.",

            "lista": ["Desengraxamento por partes", "Secagem a ar comprimido", "Proteção de borrachas e plásticos", "Verniz protetor final"],

            "whatsapp_texto": "Olá! Gostaria de saber mais sobre a Limpeza de Motor."

          },

          {

            "nome": "Martelinho de Ouro",

            "icone": "Hammer",

            "descricao": "Reparo de amassados e granizo sem pintura. Pintura original preservada.",

            "lista": ["Amassados pequenos e médios", "Danos por granizo", "Sem repintura", "Pintura de fábrica preservada 100%"],

            "whatsapp_texto": "Olá! Gostaria de saber mais sobre o Martelinho de Ouro."

          }

        ]

      },



      "5_sobre": {

        "padding": "110px 0",

        "background": "#0d0d0d",

        "grid": "2 colunas desktop, 1 mobile, gap 72px",

        "coluna_esquerda": {

          "label": "QUEM SOMOS — dourado Orbitron",

          "titulo": "Sobre a CLÍNICA DO CARRO — CLÍNICA DO CARRO em verde",

          "texto": "Estamos em Joinville desde 2013. Aqui você encontra serviços de estética automotiva feitos com técnica e atenção aos detalhes. Sem enrolação — você agenda, a gente faz.",

          "diferenciais": [

            "Produtos de alto desempenho",

            "Técnica em cada etapa",

            "Atenção aos detalhes",

            "Resultado garantido"

          ],

          "diferenciais_estilo": "cards com ícone CheckCircle2 verde, border verde 15%, Rajdhani 600 uppercase"

        },

        "coluna_direita": {

          "tipo": "card visual",

          "background": "linear-gradient(135deg, rgba(0,230,118,0.04), rgba(0,0,0,0.6))",

          "border": "1px solid rgba(0,230,118,0.15)",

          "border_radius": "10px",

          "min_height": "400px",

          "conteudo": [

            "<img src='/logo.png' opacity 0.2 max-width 250px centralizada />",

            "texto '2013' em Bebas Neue font-size 7rem cor rgba(0,230,118,0.06)"

          ]

        }

      },



      "6_cta": {

        "padding": "100px",

        "background": "linear-gradient(135deg, #001409, #002710, #001409)",

        "overlay": "radial-gradient verde sutil no centro",

        "border": "top e bottom 2px solid #00e676",

        "alinhamento": "centralizado",

        "titulo": {

          "texto": "AGENDE AGORA PELO WHATSAPP",

          "fonte": "Bebas Neue clamp(2.5rem, 6vw, 5rem)",

          "observacao": "texto direto, sem pergunta retórica"

        },

        "subtitulo": {

          "texto": "Manda uma mensagem e a gente responde rápido.",

          "fonte": "Barlow 300 cinza"

        },

        "botao": {

          "texto": "Falar pelo WhatsApp",

          "estilo": "branco grande, texto preto, Rajdhani bold",

          "icone": "MessageCircle",

          "hover": "whileHover={{ scale: 1.04 }}",

          "link": "https://wa.me/5547999940973?text=Olá! Vi o site e gostaria de agendar um serviço.",

          "target": "_blank"

        }

      },



      "7_localizacao": {

        "padding": "110px 0",

        "card": {

          "max_width": "640px",

          "centralizado": true,

          "background": "rgba(255,255,255,0.02)",

          "backdrop_filter": "blur(12px)",

          "border": "1px solid rgba(0,230,118,0.15)",

          "border_radius": "10px",

          "padding": "60px 44px",

          "alinhamento": "centralizado"

        },

        "conteudo": {

          "icone": "MapPin verde em quadrado 60px com borda verde",

          "nome": "Clínica do Carro — Bebas Neue 2rem",

          "endereco": "Rua Alois Finder, 1401 — Aventureiro, Joinville/SC — Rajdhani cinza",

          "botoes": [

            {

              "texto": "Ver no Google Maps",

              "estilo": "outline verde",

              "icone": "Navigation",

              "link": "https://maps.google.com/?q=Rua+Alois+Finder,+1401,+Aventureiro,+Joinville,+SC",

              "target": "_blank"

            },

            {

              "texto": "WhatsApp",

              "estilo": "verde",

              "icone": "Smartphone",

              "link": "https://wa.me/5547999940973",

              "target": "_blank"

            }

          ]

        }

      },



      "8_footer": {

        "background": "#060606",

        "border_top": "1px solid rgba(0,230,118,0.15)",

        "padding": "50px 0 28px",

        "grid": "2 colunas desktop, 1 mobile",

        "coluna_esquerda": {

          "logo": "<img src='/logo.png' height='50' loading='lazy' />",

          "tagline": "Joinville/SC desde 2013 — Barlow 0.8rem cinza"

        },

        "coluna_direita": {

          "links": ["Serviços", "Sobre", "Localização", "WhatsApp"],

          "estilo": "Rajdhani uppercase cinza hover verde"

        },

        "bottom": {

          "border_top": "1px solid rgba(255,255,255,0.05)",

          "texto": "© 2025 Clínica do Carro Studio Detail — Joinville/SC",

          "estilo": "centralizado Barlow 0.78rem cinza"

        }

      }

    },



    "botao_flutuante_whatsapp": {

      "posicao": "fixed bottom 28px right 28px z-index 9999",

      "tamanho": "56x56px",

      "background": "#25D366",

      "border_radius": "50%",

      "icone": "Phone branco 26px",

      "hover": "whileHover={{ scale: 1.12 }}",

      "anel_pulsante": {

        "tipo": "div absoluto inset -6px, border-radius 50%, border 2px solid rgba(37,211,102,0.4)",

        "animacao": "animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}, transition={{ repeat: Infinity, duration: 2 }}"

      },

      "link": "https://wa.me/5547999940973",

      "target": "_blank"

    },



    "regras_obrigatorias": [

      "Sem textos genéricos de marketing em lugar nenhum",

      "Todos os botões WhatsApp abrem em target _blank",

      "loading='lazy' em todas as imagens",

      "Sem lorem ipsum em nenhum lugar",

      "Código limpo, componentizado e sem warnings",

      "Sem enrolação — objetivo é ver serviços e ir pro WhatsApp",

      "Framer Motion em TODAS as animações — nada de CSS puro para animações",

      "AnimatePresence nos acordeões de serviço para entrada e saída suave",

      "Contador dos stats com requestAnimationFrame — não usar setInterval"

    ]

  }

}

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://clinicadocarro.vercel.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/38edbbe2-7b87-4b34-8718-b39ad3df3f40).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
