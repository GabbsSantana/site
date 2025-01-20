const $checkboxes = document.querySelectorAll('input[type="checkbox"]');

$checkboxes.forEach(($checkbox) => {
    $checkbox.addEventListener('change', (event) => {
        if (event.currentTarget.checked) {
            // Desmarque todos os outros checkboxes
            $checkboxes.forEach(($otherCheckbox) => {
                if ($otherCheckbox !== event.currentTarget) {
                    $otherCheckbox.checked = false;
                }
            });
        }
    });
});



const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const infoDivs = document.querySelectorAll('.info-div');

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            // Desmarca as outras caixas de seleção
            checkboxes.forEach((cb, idx) => {
                if (idx !== index) {
                    cb.checked = false;
                }
            });

            // Exibe informações correspondentes e oculta as outras
            infoDivs.forEach((div, idx) => {
                div.style.display = idx === index ? 'block' : 'none';
            });
        } else {
            // Oculta informações quando a caixa de seleção é desmarcada
            infoDivs[index].style.display = 'none';
        }
    });
});

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');



const jump = () =>{
    mario.classList.add('jump');

    setTimeout(()=>{

        mario.classList.remove('jump');

    },700 );

}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','');


    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
    
        mario.style.animation = 'none';
        mario.style.bottom = `${pipePosition}px`;
    
        mario.src = './assetsGame/game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    
    }

}, 10)

document.addEventListener('keydown', jump);

$('#jogo1Checkbox').on('change', function() {
    if ($(this).is(':checked')) {
      $('.info-div').hide(); // Esconde todas as seções de informações
      $('.info-div:eq(0)').show(); // Mostra a seção de informações do jogo 1
      $('.info-div:eq(0)')[0].scrollIntoView({ behavior: 'smooth' }); // Rola a página até a seção de informações do jogo 1
    }
  });
  
  $('#jogo2Checkbox').on('change', function() {
    if ($(this).is(':checked')) {
      $('.info-div').hide();
      $('.info-div:eq(1)').show();
      $('.info-div:eq(1)')[0].scrollIntoView({ behavior: 'smooth' });
    }
  });
