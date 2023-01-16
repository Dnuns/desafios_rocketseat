//Dark mode switcher

document.querySelector('.ball').addEventListener('click', () => {




    document.querySelector('.ball').classList.toggle('active');

    let darkTheme = document.querySelector('.main').classList.toggle('dark');

    console.log(localStorage.setItem('theme', JSON.stringify(darkTheme)));

});

let getTheme = JSON.parse(localStorage.getItem('theme'));

if (getTheme === true) {
    document.querySelector('.main').classList.add('dark');
    document.querySelector('.ball').classList.toggle('active');
}