# Códigos de exemplo — Aula 15

## Exemplo 2 — index.html — estrutura pedida

<nav aria-label="Navegação principal">
  <ul>
    <li><a href="index.html" aria-current="page">Home</a></li>
    <li><a href="sobre.html">Sobre</a></li>
    <li><a href="projetos.html">Projetos</a></li>
    <li><a href="contato.html">Contato</a></li>
  </ul>
</nav>

## Exemplo 3 — style.css — estados do link

.menu a:hover {
  color: #FFC857;
  background: rgba(255,200,87,.12);
}

.menu a:active { transform: translateY(1px); }


## Exemplo 4 — style.css — foco visível

.menu a:focus-visible {
  outline: 3px solid #FFC857;
  outline-offset: 3px;
  border-radius: 4px;
}

## Exemplo 5 — style.css — menu sem bolinhas

.menu {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  padding: 0;
}

.menu a { text-decoration: none; }

.menu a:hover,
.menu a:focus {
  color: #FFC857;
  text-decoration: underline;
}

## Exemplo 6 — style.css — ::before e ::after com content

.menu a::before {
  content: "";      /* obrigatório, mesmo vazio */
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #FF3D7F;
}

.aviso::after {
  content: " →";   /* também pode carregar texto */
}

## Exemplo 7 — style.css — linha que cresce no hover

.menu a { position: relative; }

.menu a::after {
  content: "";
  position: absolute;
  left: 0; bottom: -4px;
  width: 0; height: 3px;
  background: #FFC857;
  transition: width .25s ease;
}

.menu a:hover::after,
.menu a:focus-visible::after { width: 100%; }

## Exemplo 8 — index.html — as três peças

<input type="checkbox" id="menu-toggle" class="menu-toggle">

<label for="menu-toggle" class="menu-botao"
       aria-label="Abrir menu de navegação">☰</label>

<nav aria-label="Navegação principal">
  <ul class="menu"> ... </ul>
</nav>

## Exemplo 9 — style.css — o coração do hack

/* escondido na tela, mas ainda alcançável pelo Tab */
.menu-toggle { position: absolute; opacity: 0; }

.menu { display: none; }

/* checkbox marcado → o menu aparece */
.menu-toggle:checked ~ nav .menu {
  display: block;
}


## Exemplo 10 — style.css — fechado no mobile, aberto no desktop

.menu-toggle { position: absolute; opacity: 0; }
.menu { display: none; }

.menu-toggle:checked ~ nav .menu { display: block; }

@media (min-width: 768px) {
  .menu-botao { display: none; }
  .menu { display: flex; gap: 1.5rem; }
}

## Exemplo 11 — index.html — cabeçalho do portfólio

<header class="topo">
  <a class="marca" href="index.html">Seu Nome</a>
  <!-- 1. o estado: aberto ou fechado -->
  <input type="checkbox" id="menu-toggle" class="menu-toggle">
  <!-- 2. o botão que alterna o estado -->
  <label for="menu-toggle" class="menu-botao" aria-label="Abrir menu de navegação">☰</label>
  <!-- 3. a lista de caminhos -->
  <nav aria-label="Navegação principal">
    <ul class="menu">
      <li><a href="index.html" aria-current="page">Home</a></li>
      <li><a href="sobre.html">Sobre</a></li>
      <li><a href="projetos.html">Projetos</a></li>
      <li><a href="contato.html">Contato</a></li>
    </ul>
  </nav>
</header>

## Exemplo 12 — style.css — lista, estados e enfeite

.menu { list-style: none; gap: 1.5rem; margin: 0; padding: 0; }

.menu a {
  position: relative; display: inline-block;
  padding: .35rem .25rem; color: #E8E6F5;
  text-decoration: none; transition: color .2s;
}

.menu a:hover, .menu a:focus-visible {
  color: #FFC857; outline: 3px solid #FFC857;
  outline-offset: 3px;
}
.menu a:active { transform: translateY(1px); }
.menu a[aria-current="page"] { color: #FF3D7F; }

.menu a::after {
  content: ""; position: absolute; left: 0; bottom: -4px;
  width: 0; height: 3px; background: #FFC857;
  transition: width .25s ease;
}
.menu a:hover::after, .menu a:focus-visible::after { width: 100%; }

## Exemplo 13 — style.css — responsivo (mobile first)


/* mobile first: fechado, com hambúrguer visível */
.menu-toggle { position: absolute; opacity: 0; width: 1px; }
.menu-botao { font-size: 1.8rem; cursor: pointer; }
.menu { display: none; }

/* marcado → aberto (irmão geral ~) */
.menu-toggle:checked ~ nav .menu { display: block; }

/* foco no hambúrguer vindo do teclado */
.menu-toggle:focus-visible + .menu-botao {
  outline: 3px solid #FFC857; outline-offset: 3px;
}

/* 768px+: horizontal, sem hambúrguer */
@media (min-width: 768px) {
  .menu-botao { display: none; }
  .menu { display: flex; }
}
