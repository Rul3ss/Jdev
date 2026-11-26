// ============================================================================
// PEÇA PRONTA do kit visual (arquivo de APOIO): desenha todos os ícones do site.
// Você NÃO digita este arquivo: só copia e usa assim:
//
//     import Icone from '../Icone/Icone.jsx'
//     <Icone nome="seta" />                  ícone "seta" no tamanho padrão (20)
//     <Icone nome="seta" tamanho={16} />     ícone menor
//
// O QUE CADA COISA FAZ
//   nome     → qual desenho aparece (veja a lista abaixo). Um nome que não existe
//              aqui não desenha nada (o espaço fica vazio).
//   tamanho  → largura e altura em pixels (padrão: 20).
//   COR      → o ícone NÃO tem cor própria: ele usa a cor do TEXTO do lugar onde
//              está (stroke="currentColor"). Para mudar a cor de um ícone, mude
//              o `color` do elemento que o contém. Exemplos:
//                • ícone do botão primário  → .botao--primario { color }
//                • seta do acordeão         → .acordeao__botao .icone { color }
//                • coração curtido          → .curtir--ativo (color) e o
//                                             preenchimento em .curtir--ativo .icone { fill }
//
// ONDE CADA ÍCONE É USADO (componente e aula em que aparece)
//   sol, lua   → BotaoTema (aula 36)
//   menu, fechar → Header (aula 30)
//   seta       → Hero (aula 29), CardProjeto e Home (aula 32)
//   topo       → BotaoTopo (aula 34)
//   coracao    → CardProjeto (aula 30)
//   chevron    → ItemFormacao (aula 30)
//   alerta     → CampoFormulario e Contato (aula 33), MensagemErro (aula 35)
//   check      → Contato (aula 33)
//   busca      → ListaProjetos (aula 31)
// ============================================================================
const desenhos = {
  // SOL: mostra o BotaoTema (aula 36) quando o tema atual é ESCURO — clicar nele muda
  //   para o claro.
  sol: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  // LUA: mostra o BotaoTema (aula 36) quando o tema atual é CLARO — clicar nele muda
  //   para o escuro.
  lua: <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />,
  // MENU (três tracinhos, "hambúrguer"): botão do Header (aula 30) com o menu FECHADO.
  //   Só aparece no celular.
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  // FECHAR (X): botão do Header (aula 30) com o menu ABERTO. Trocar "menu" por "fechar"
  //   é feito pelo React (estado menuAberto).
  fechar: <path d="M6 6l12 12M18 6L6 18" />,
  // SETA para a direita: no fim de "ver projetos" (Hero, aula 29), "ver detalhes"
  //   (CardProjeto, aula 32) e dos links da Home (aula 32).
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  // SETA PARA CIMA: dentro do botão redondo BotaoTopo (aula 34), que leva de volta ao
  //   início da página.
  topo: <path d="M12 19V5M5 12l7-7 7 7" />,
  // CORAÇÃO: botão curtir do CardProjeto (aula 30). Quando curtido, a classe .curtir--
  //   ativo .icone pinta o coração por dentro (fill).
  coracao: (
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" />
  ),
  // SETINHA PARA BAIXO: botão de cada item da Formacao (ItemFormacao, aula 30). O CSS
  //   gira 180° quando o item abre.
  chevron: <path d="M6 9l6 6 6-6" />,
  // CÍRCULO COM "!": ao lado da mensagem de erro de cada campo (CampoFormulario, aula
  //   33), do alerta de erro do Contato (aula 33) e do MensagemErro (aula 35).
  alerta: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </>
  ),
  // CÍRCULO COM "V": ao lado de "Mensagem enviada!" (Contato, aula 33).
  check: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12.5l3 3 5-6" />
    </>
  ),
  // LUPA: dentro da caixa de busca (ListaProjetos, aula 31) e, bem grande, na caixa
  //   "Nenhum projeto encontrado".
  busca: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </>
  ),
}

// nome = qual ícone desenhar | tamanho = largura/altura em pixels (padrão 20)
function Icone({ nome, tamanho = 20 }) {
  return (
    <svg
      className="icone"
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {desenhos[nome]}
    </svg>
  )
}

export default Icone
