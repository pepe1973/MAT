let rejtettek = document.getElementsByClassName('rejtett');
let felfedGombok = document.getElementsByClassName('felfed-gomb');
// let mindenFelfedGomb = document.getElementsByClassName('mindenfelfed-gomb');
let rejtoGombok = document.getElementsByClassName('elrejt-gomb');
// let mindenRejtoGomb = document.getElementsByClassName('mindenelrejt-gomb');

function felfed(index) {
    rejtettek[index].style.display = 'block';
    felfedGombok[index].style.display = 'none';
    rejtoGombok[index].style.display = 'inline';
}

function elrejt(index) {
    rejtettek[index].style.display = 'none';
    felfedGombok[index].style.display = 'inline';
    rejtoGombok[index].style.display = 'none';
}

function mindenFelfed() {
    for (let index = 0; index < rejtettek.length; index++) {
        rejtettek[index].style.display = 'block';
        felfedGombok[index].style.display = 'none';
        rejtoGombok[index].style.display = 'inline';
    }
}

function mindenElrejt() {
    for (let index = 0; index < rejtettek.length; index++) {
        rejtettek[index].style.display = 'none';
        felfedGombok[index].style.display = 'inline';
        rejtoGombok[index].style.display = 'none';
    }
}
