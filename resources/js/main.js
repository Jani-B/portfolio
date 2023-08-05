function menu() {
    let x = document.getElementById('myTopnav');
    if (x.className === 'navigation tab') {
        x.className += ' responsive tab';
        let menuChange = document.getElementById('hamb');
        menuChange.innerHTML = 'X';
    } else {
        x.className = 'navigation tab';
        let menuChange = document.getElementById('hamb');
        menuChange.innerHTML = '☰';
    }
};

