
    const container = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.slide');

    let offset = 0;

    let slideID = 0;

    setInterval(() => {
        offset = slides[0].offsetWidth;
        container.style.transition = "left ease-in-out 500ms";
        container.style.left = -offset + 'px';
        setTimeout(() => {
            container.style.transition = "none";
            slides[slideID].style.order = slides.length - 1;
            container.style.left = 0;
            slideID++;
            if (slideID === slides.length) {
                slideID = 0;
                slides.forEach(slide => {
                    slide.style.order = "initial";
                });
            }
        }, 500);
    }, 3000);

const mangaTop = [
    {title: "Claymore", content: "Claymore Lo primero que nos llamó la atención de Claymore es el nivel de detalle en su ilustración. Además, la atmósfera es bastante oscura y madura y hace que te veas inmerso en la historia, que va de monstruos, personajes femeninos muy poderosos y muchos giros inesperados. Comenzamos con el anime primero y luego leímos el manga, que fue una completa locura. ¡Estamos muy, muy ansiosos por terminar el anime!", img: "https://i.ibb.co/W37VdjG/Whats-App-Image-2023-12-07-at-21-22-26.jpg"},

    {title: "Made in Abyss ", content: "Con un estilo de dibujo muy aniñado y lleno de belleza, Made in Abyss se adentra en las sorpresas y terrores que yacen en el abismo, un pozo sin fin en alguna parte remota del planeta. Repleto de misterio, fantasía y un arte muy detallado, Made in Abyss es una de esas series de manga que definitivamente se quedará con nosotros. La dualidad entre la dulzura del dibujo y la morbosidad de la historia es una de las cosas que más destacamos y que mas apreciamos al leerlo. La trama, por supuesto, no se queda atrás. Si te gustan las historias de supervivencia y el misterio, te lo recomendamos.", img: "https://i.ibb.co/b2z86CQ/Whats-App-Image-2023-12-07-at-21-23-41.jpg"},

    {title: "Beastars", content: "Beastars tiene todo lo que se puede esperar de un buen manga y más. La psicología de los personajes, el drama y la profundidad propia de la historia se van entrelazando hasta formar una trama compleja que invita a la reflexión. La premisa es sencilla: En una sociedad conformada únicamente por animales de todo tipo, ¿se puede suprimir el instinto cazador y diferenciar entre el deseo y el apetito?", img: "https://i.ibb.co/qBMHhS6/Whats-App-Image-2023-12-07-at-21-25-33.jpg"},

    {title: "Aku no Ana", content: "Amor, deseo, lujuria, pasión, adoración, admiración, sufrimiento y mucha locura. Esta incomparable obra se sumerge en el estado anímico y psicológico de los personajes, haciendo que estos se relacionen de formas erráticas guiados por sus emociones, las críticas y la sociedad. Sin dudas fue interesante leer una historia que mezcla tan bien el realismo con elementos perturbadores que mantienen la tensión todo el tiempo. ¡Fue una de las lecturas más rápidas!", img: "https://i.ibb.co/kJSxKjd/Whats-App-Image-2023-12-07-at-21-25-52.jpg"},

    {title: "Pseudo Harem", content: "Pseudo Harem Pseudo Harem llegó a nuestros corazones para endulzarlos. El romance, la ternura y la comedia se unen para crear una historia que nos encantó de principio a fin. La trama es sencilla y amena, lo cual convierte a este manga en un gran compañero de las tardes lluviosas con pochoclos (como nos gusta a nosotros). AVISO: Si sos adolescente, vas a querer serlo de nuevo (o no).", img: "https://i.ibb.co/g4NDT01/Whats-App-Image-2023-12-07-at-21-26-21.jpg"},

    {title: "Tomodachi o Tsukurou", content: "Ella quiere tener amigos, pero su primer encuentro con estas nuevas posibles amistades se ve atravesado por la presencia de quizás el chico más extraño del mundo. ¿Podrá aprender a hacer amigos o se contagiará de esta rareza? Tomodachi o Tsukurou es nuestra recomendación para todos los que estén con ganas de leer algo ligero, gracioso y absurdo.", img: "https://i.ibb.co/PjhF3JD/Whats-App-Image-2023-12-07-at-21-26-53.jpg"},

    {title: "Mahou Shoujo Site", content: "Esta serie de manga le da un giro completo al género con la historia de varias chicas que obtienen poderes y la posibilidad de vengarse de quienes les hicieron daño. Bajo la premisa de que la magia no siempre es una herramienta para el bien, veremos la evolución de este shonen de terror que se adentra en lo más oscuro de la psicología humana. Luego de haber leído Mahou Shoujo Site (más de una vez), podríamos decir que definirlo como sangriento, impactante y visualmente impecable es quedarse corto. ¡Mejor leerlo!", img: "https://i.ibb.co/gPvSSzw/Whats-App-Image-2023-12-07-at-21-27-26.jpg"},

    {title: "Dorohedoro", content: "Perdió su identidad y su rostro, y ahora se ve como un caimán. ¿Por qué pasó esto y quién es en realidad? Con un estilo de dibujo muy único, detallado y gran habilidad para el uso del negro, se plantea esta trama original, con personajes atrapantes, intrigantes y dotados de un interesante humor negro. Nos gustaron mucho las habilidades de cada personaje, la forma en la que se entrelazan los acontecimientos y el mundo surrealista en el que todo se desarrolla.", img: "https://i.ibb.co/hVsLYTC/Whats-App-Image-2023-12-07-at-21-28-01.jpg"},
]
    

function showHide(){
    const card_container = document.getElementById('card-content');
    if(card_container.style.visibility == 'hidden'){
        card_container.style.visibility = "visible";
    }else{
        card_container.style.visibility = "hidden";
    }
}