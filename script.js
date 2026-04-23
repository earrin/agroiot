// Простейший JavaScript для сайта Agro IoT

document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт Agro IoT загружен успешно!');

    const featureItems = document.querySelectorAll('#features li');
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            alert('Возможность: ' + this.textContent);
        });
    });

    const header = document.querySelector('header');
    header.style.opacity = '0';
    header.style.transition = 'opacity 1s';
    setTimeout(() => {
        header.style.opacity = '1';
    }, 100);
});