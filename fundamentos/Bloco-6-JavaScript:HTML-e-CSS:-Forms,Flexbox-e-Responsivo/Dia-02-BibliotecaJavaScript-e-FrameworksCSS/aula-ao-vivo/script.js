const button = document.getElementById('btn-nao-clique');
// console.log(button);
const myModal = new bootstrap.Modal(document.getElementById('myModal'))
// console.log(myModal);
button.addEventListener('click', function () {
  myModal.show();
})