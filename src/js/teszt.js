let tartoElem = document.getElementsByClassName('tarto');

if (kerdesekEsValaszok[0].tipus === 'check') {
    tartoElem[0].innerHTML = elsoCheckBeir(kerdesekEsValaszok);
} else if (kerdesekEsValaszok[0].tipus === 'radio') {
    tartoElem[0].innerHTML = elsoRadioBeir(kerdesekEsValaszok);
}

function kovetkezo(i) {
    if (i === kerdesekEsValaszok.length - 1) {
        if (kerdesekEsValaszok[i].tipus === 'check') {
            tartoElem[0].innerHTML = utolsoCheckBeir(kerdesekEsValaszok);
        } else if (kerdesekEsValaszok[i].tipus === 'radio') {
            tartoElem[0].innerHTML = utolsoRadioBeir(kerdesekEsValaszok);
        }
    } else {
        if (kerdesekEsValaszok[i].tipus === 'check') {
            tartoElem[0].innerHTML = checkBeir(kerdesekEsValaszok, i);
        } else if (kerdesekEsValaszok[i].tipus === 'radio') {
            tartoElem[0].innerHTML = radioBeir(kerdesekEsValaszok, i);
        }
    }
}

function elozo(i) {
    if (i === 0) {
        if (kerdesekEsValaszok[i].tipus === 'check') {
            tartoElem[0].innerHTML = elsoCheckBeir(kerdesekEsValaszok);
        } else if (kerdesekEsValaszok[i].tipus === 'radio') {
            tartoElem[0].innerHTML = elsoRadioBeir(kerdesekEsValaszok);
        }
    } else {
        if (kerdesekEsValaszok[i].tipus === 'check') {
            tartoElem[0].innerHTML = checkBeir(kerdesekEsValaszok, i);
        } else if (kerdesekEsValaszok[i].tipus === 'radio') {
            tartoElem[0].innerHTML = radioBeir(kerdesekEsValaszok, i);
        }
    }
}

function megoldasFelfed() {
    let joMegoldas = document.getElementById('jo-valaszok');
    let megoldas = document.getElementById('megoldas');
    let elrejtes = document.getElementById('elrejtes');
    joMegoldas.style.display = 'block';
    megoldas.style.display = 'none';
    elrejtes.style.display = 'inline';
}

function elrejtes() {
    let joMegoldas = document.getElementById('jo-valaszok');
    let megoldas = document.getElementById('megoldas');
    let elrejtes = document.getElementById('elrejtes');
    joMegoldas.style.display = 'none';
    megoldas.style.display = 'inline';
    elrejtes.style.display = 'none';
}
