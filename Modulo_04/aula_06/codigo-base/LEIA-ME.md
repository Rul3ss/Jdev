# Códigos-base — Dominando o Espaço I e II

Todos os arquivos de apoio dos dois encontros estão nesta pasta, sem subpastas. A numeração dos arquivos é contínua entre as aulas e corresponde à identificação na janela de código dos slides e nas apostilas.

| Identificação | Aula / exercício | Tema | Tipo | Arquivo |
| --- | --- | --- | --- | --- |
| Código 1 | 21 / 01 | Barra de topo com Flexbox | Fragmento para inserir | `codigo-01.html` (vai no index.html), `codigo-01.css` (vai no style.css) |
| Código 2 | 21 / 02 | Filtros que crescem e quebram linha | Fragmento para inserir | `codigo-02.html` (index.html), `codigo-02.css` (style.css) |
| Código 3 | 21 / 03 | Galeria em grade | Fragmento para inserir | `codigo-03.html` (index.html), `codigo-03.css` (style.css) |
| Código 4 | 21 / 04 | Página com grid-template-areas | Fragmento para inserir | `codigo-04.html` (index.html), `codigo-04.css` (style.css) |
| Código 1 | 22 / 01 | Mobile-first: a base e um breakpoint | Fragmento para inserir | `codigo-05.css` (style.css) |
| Código 2 | 22 / 02 | `container > row > col` com o gutter g-3 | Fragmento para inserir | `codigo-06.html` (index.html) |
| Código 3 | 22 / 03 | col-12, col-md-6 e col-lg-4 | Fragmento para inserir | `codigo-07.html` (index.html) |
| Código 4 | 22 / 04 | Gere, revise e salve: pedido para o v0.dev | Prompt de IA | `codigo-08.txt` |

## Como utilizar

- A identificação reinicia em cada encontro, como está nas apostilas: a terça vai do Código 1 ao 4 e a quinta recomeça no Código 1. Na pasta, a numeração é contínua para não haver dois arquivos com o mesmo nome: a terça usa os códigos 1 a 4 e a quinta usa os códigos 5 a 8.
- Quando um código tem HTML e CSS, existem dois arquivos com o mesmo número. O `.html` é o fragmento do index.html e o `.css` é o fragmento do style.css.
- Códigos 1 a 4 (terça): crie a pasta meu-layout com index.html e style.css ligados por um link no head, como pede o exercício 01, e vá acrescentando os códigos na mesma página. Cada exercício continua o anterior.
- Códigos 5 a 7 (quinta): crie a pasta agenda-v2 com index.html e style.css. O código 5 entra no style.css; os códigos 6 e 7 entram no index.html, no lugar do bloco equivalente que já existe na página.
- Os fragmentos HTML não substituem a página inteira: insira-os no local indicado no exercício e preserve o que já foi construído.
- Código 8 é um prompt para adaptar antes de usar IA. Anote em registro.txt o que foi pedido, o que o v0.dev devolveu e a decisão (aceitar, rejeitar ou ajustar).
- Os códigos 6 e 7 usam as classes da grade do Bootstrap 5.3, carregado por CDN na página do projeto, e precisam de internet. Os códigos 1 a 5 são só HTML e CSS próprios, sem biblioteca.
- Os quadros "Resumo do dia" (apostila da terça) e "Resumo: o mesmo ajuste de duas formas" (apostila da quinta) não têm arquivo próprio: são conferência rápida e todo o código deles já está nos códigos 1 a 5.
- Cada print aparece uma única vez nos slides, na página "Exemplo: ..." que vem logo depois da conferência. A página de conferência traz só o checklist (resultado esperado, como testar e entrega); a página seguinte mostra o print grande com a explicação do posicionamento. Use a página "Exemplo" para discutir no projetor antes de voltar ao código.
- No Código 1 da quinta o seletor de exemplo é `.lista`: aplique a regra ao contêiner dos seus cartões — na aula 21 ele foi nomeado `.galeria`. Se o seletor não combinar com a sua classe, nada muda ao estreitar a janela.
- No exercício 04 da terça o Código 4 traz a grade de duas colunas; a media query que empilha as áreas está escrita no passo a passo do exercício, na apostila e no slide. Ao colar, mantenha o `grid-template-columns: 1fr`, senão a coluna fixa de 200px do menu continua valendo.
- Siga o objetivo, os passos, os testes e a entrega indicados em cada exercício.
