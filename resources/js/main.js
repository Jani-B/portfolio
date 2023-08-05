function myFunction () {
    let x = document.getElementById('myTopnav');
    if (x.className === 'navigation') {
        x.className += ' responsive';
    } else {
        x.className = 'navigation';
    }
}