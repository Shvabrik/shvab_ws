const img = document.body.querySelector('main div.Contaner2 div.Left div.ShvabClicker img');
const text = document.body.querySelector('main div.Contaner2 div.Left div.ShvabClicker h3');

const count = () => {
    let counter = 0;
    return function() {
        counter += 1
        text.innerHTML = 'count: ' + counter;
    };
}

img.addEventListener('click', count());