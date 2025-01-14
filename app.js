
const imageCon = document.querySelector(".image-container");

const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x=0;
let timer=1000;

prevEl.addEventListener("click",()=>{
 x=x+45;
 clearTimeout(timer);
 updateImage();
});
nextEl.addEventListener("click",()=>{
 x=x-45;
 clearTimeout(timer);
 updateImage();
});

function updateImage(){
 imageCon.style.transform=`perspective(1000px) rotateY(${x}deg)`;
 timer=setTimeout(()=>{
 x=x-45;
 updateImage();
 },3000);
}
updateImage();


$( function() {
    $( '#cbp-fwslider' ).cbpFWSlider();
    });

    const carouselItems = document.querySelectorAll('.carousel-item');
    const title = document.getElementById('carousel-title');
    const description = document.getElementById('carousel-description');

    const texts = [
        { title: "Рогожка", description: "Рогожка имеет характерный шахматный рисунок переплетений нитей, по структуре похожа на мешковину." },
        { title: "Велюр", description: "Мягкая и бархатистая ткань с ворсом, которая может быть изготовлена из различных волокон, включая хлопок и полиэстер." },
        { title: "Замша", description: "Мягкий и приятный на ощупь материал, получаемый из кожи животных. Она имеет ворсистую поверхность, которая придает ей уникальный внешний вид." },
        { title: "Флок", description: "Текстильный материал с коротким ворсом." },
        { title: "Шенил", description: "Ткань с характерным ворсом, который образуется благодаря специальной технологии производства. Шенил обладает приятной текстурой и хорошей драпируемостью." }
    ];

    // Обновляем текст при смене слайда
    document.getElementById('carouselExampleCaptions').addEventListener('slide.bs.carousel', function (event) {
        const index = event.to;
        title.textContent = texts[index].title;
        description.textContent = texts[index].description;
    });