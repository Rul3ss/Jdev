const modal = document.getElementById('detalhes');
const fechar = document.getElementById('fecharModal');

modal.addEventListener('shown.bs.modal', () => {
  fechar.focus();
});

modal.addEventListener('hidden.bs.modal', () => {
  console.log('Diálogo fechado');
});
