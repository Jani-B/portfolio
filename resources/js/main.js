function menu() {
    let x = document.getElementById('myTopnav');
    if (x.className === 'navigation tab') {
        x.className += ' responsive tab';
    } else {
        x.className = 'navigation tab';
    }
};

