const words = document.querySelectorAll('.sGraduacao1');
const questions = document.querySelectorAll('.question');

words.forEach((word, index) => {
  word.addEventListener('click', () => {
    // Esconder todas as perguntas
    questions.forEach(question => question.style.display = 'none');
    
    // Mostrar apenas a pergunta correspondente à palavra clicada
    questions[index].style.display = 'block';
  });
});


document.getElementById('curso').addEventListener('input', function() {
  if (this.value.length > 2) {
    document.getElementById('cursos').setAttribute('open', 'open');
  } else {
    document.getElementById('cursos').removeAttribute('open');
  }
});