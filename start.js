var data = [
    {
        img:"./assets/imagem.png",
        country: "Alaska - USA",
        place: "Kenai Fjords Park",
        describle:
        " srhgfehjytgrbwf fehjrgf iuyhgfuyrgfu ywerh f rfge iy g yegr",
    },
    {
        img:"./assets/github.png",
        country: "Alasfewka - USA",
        place: "Kenai Fdsjords Park",
        describle:
        " srhgfehjytgrbwf fehjrgf iuyhgfuyrgfu ywerh f rfge iy g yegr",
    },
    {
        img:"./assets/logoDark.png",
        country: "Alaskwefa - USA",
        place: "Kenai Fjfeords Park",
        describle:
        " srhgfehjytgrbwf fehjrgf iuyhgfuyrgfu ywerh f rfge iy g yegr",
    },
    {
        img:"./assets/instagram.png",
        country: "Alaseffewka - USA",
        place: "Kenai Fjefords Park",
        describle:
        " srhgfehjytgrbwf fehjrgf iuyhgfuyrgfu ywerh f rfge iy g yegr",
    }
]




const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");



introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for (let i = 0; i < data.length; i++) {
    introduce.innerHTML += `
        < div class="wrapper">
                    <span>
                        <h5 class="country" style="--idx: 0">${data[i].country}</h5>
                    </span>
                    <span>
                        <h1 class="place" style="--idx: 1">${data[i].place}</h1>
                    </span>
                    <span>
                        <p class="describle" style="--idx: 2">${data[i].describle}</p>
                    </span>
                    <span>
                        <button class="discover-button" style="--idx: 3">Discover now</button>
                    </span>
        </div >
    `;

    ordinalNumber.innerHTML += `<h2>0${i+1} </h2>`;
        
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumnbnaiListWrapper = document.querySelector(
    "thumbnail-list .wrapper"
);

thumnbnaiListWrapper .innerHTML += `
    <div class="thumbnail zoom">
        <img src="${data[0].img}" alt="">
    </div>
    `;
for (let i = 1; i < data.length; i++){
    thumnbnaiListWrapper .innerHTML += `
    <div class="thumbnail" style="--idx: ${i-1}">
        <img src="${data[i].img}" alt="">
    </div>
    `; 
}

const nextBtn = document.querySelector(".navigation .next-button");
var currentIndex = 0;

nextBtn.addEventListener("click", () => {
    nextBtn.disabled = true;

    var clone = thumnbnaiListWrapper.children[0].cloneNode(true);
    clone.classList.remove("zoom");
    thumnbnaiListWrapper.appendChild(clone);
    thumnbnaiListWrapper.children[1].classList.add("zoom");

    setTimeout(() => {
        thumnbnaiListWrapper.children[0].remove();
        nextBtn.disabled = false;
    });

    for (let i = 2; i < thumnbnaiListWrapper.childElementCount; i++) {
        thumnbnaiListWrapper.children[i].style.setProperty('--idx', `${i - 2}`);
    }

    if (currentIndex < data.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    for (let i = 0; i < data.length; i++) {
        introduce.children[i].classList.remove("active");
        ordinalNumber.children[i].classList.remove("active");
    }

    introduce.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].classList.add("active");
    ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});
