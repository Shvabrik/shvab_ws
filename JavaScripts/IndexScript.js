const chooseANewPicture = () => {
    let randImg = document.getElementById('RandImg');
    console.log(randImg.src = `Assets/Images/RAND_IMG_${Math.floor(Math.random() * 5)}.JPEG`);
}

chooseANewPicture();

const count = () => {
    let text = document.getElementById('Counter');
    let counter = 0;
    return () => {
        let audio = new Audio(`Assets/Sounds/SND_${Math.floor(Math.random() * 13)}.wav`);
        audio.play();
        text.innerHTML = `count: ${counter += 1}`;
    } 
}

document.getElementById('ShvabClicker').addEventListener('click', count());



const resizeFontSize = (text, direction) => {
    const k = text.computedStyleMap().get('font-size').value / text.getBoundingClientRect()[direction];
    let resize = new ResizeObserver((mutations) => text.style.fontSize = k * mutations[0].contentRect[direction] - 20 + 'px');
    resize.observe(text.parentNode);
}

resizeFontSize(document.querySelector('div.FillerBlock h2'), 'height');



const BrainFuckInterpreter = () => {
    document.getElementById('TextOutput').value = `Sorry i haven't made an interpreter yet :(\n${document.getElementById('BrainFuckInput').value} was not interpreted`;
    setTimeout(() => document.getElementById('TextOutput').value = "Hi!", 2000);
}

document.getElementById('RunBrainFuck').addEventListener('click', BrainFuckInterpreter);





$('body *').on('touchstart', function (){});
