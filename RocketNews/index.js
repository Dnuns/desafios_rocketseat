const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

document.querySelector('.send-btn-container').onclick = (e) => {

    let email = document.getElementById('email').value;

    if (!validateEmail(email)) {
        alert('Por favor insira um e-mail válido!')
        return
    }

    alert(`O e-mail "${email}" foi inserido com sucesso!`)

    e.preventDefault()
}