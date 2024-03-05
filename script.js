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



const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function updateTime(){
    var now = new Date();

    document.getElementById("time").innerText =
        zeroPadding (now.getHours(), 2) + ":" +
        zeroPadding(now.getMinutes(), 2) + ":" +
        zeroPadding(now.getSeconds(), 2);

    document.getElementById("date").innerText =
        now.getFullYear() + "-" +
        zeroPadding (now.getMonth() + 1, 2) 
        zeroPadding (now.getDate(), 2) + " "+ 
        WEEK[now.getDay()];

}


updateTime();
setInterval(updateTime, 1000);

function zeroPadding(num, digit) {
     return String(num). padStart (digit, '0');

}






document.body.addEventListener("mousemove", (event) =>{
    const {clientX, clientY} = event;

    gsap.set(".cursor",{
        x:clientX,
        y:clientY,
    });

    gsap.to(".shape",{
        x:clientX,
        y:clientY,
        stagger:-0.1
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









