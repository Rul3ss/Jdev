const aviso = bootstrap.Toast.getOrCreateInstance(
  document.getElementById('avisoSalvo'), { delay: 5000 }
);
document.getElementById('salvar').addEventListener('click', () => {
  document.getElementById('estadoSalvo').textContent =
    'Salvo nesta demonstração (sem persistência).';
  aviso.show();
});
