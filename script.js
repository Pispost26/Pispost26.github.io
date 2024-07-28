console.log("¡Bienvenido a mi portafolio!");

// Funcionalidad para resaltar el enlace de navegación activo
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('active'));
        this.classList.add('active');
    });
});

// Animación de clic en la imagen bb.png
const image = document.querySelector('.background-overlay img');
if (image) {
    image.addEventListener('click', () => {
        image.classList.toggle('clicked');
    });
}



document.addEventListener('DOMContentLoaded', function () {
    const skillBars = document.querySelectorAll('.skill-bar');

    skillBars.forEach(bar => {
        const progressBar = bar.querySelector('.progress-bar');
        const value = bar.getAttribute('data-value');
        progressBar.style.width = value;
        progressBar.textContent = value;

        bar.addEventListener('mouseenter', () => {
            progressBar.style.backgroundColor = '#1de9b6';
        });

        bar.addEventListener('mouseleave', () => {
            progressBar.style.backgroundColor = '#03a9f4';
        });
    });
});

function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() { 
        modal.style.display = "none";
    }
}

