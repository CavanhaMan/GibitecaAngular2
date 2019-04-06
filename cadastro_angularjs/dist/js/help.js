var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
// abre o modal
function abremodal() {
    modal.style.display = "block";
}
// fechar pelo X
span.onclick = function() {
    modal.style.display = "none";
}
// fechar pelo botao "voltar"
btnCancelar.onclick = function() {
    modal.style.display = "none";
}
// fechar clicando fora do modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}