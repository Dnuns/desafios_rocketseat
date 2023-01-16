var ball = document.querySelector('.ball').addEventListener('click', () => {
    document.querySelector('.ball').classList.toggle('active');
    document.querySelector('.main').classList.toggle('dark');
});