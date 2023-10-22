const special_signs = document.querySelectorAll('label#special_signs button');

special_signs.forEach(sign => {
  sign.addEventListener('click', function () {

    document.getElementById('input').value += sign.innerText;

  })
});
