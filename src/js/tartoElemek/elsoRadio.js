function elsoRadioBeir(tomb) {
    let szoveg = `<div id="elsoCheck">`;
    szoveg = `<div id="felso-gombok">`;
    szoveg += `<button style="visibility: hidden">Előző</button>`;
    szoveg += `<button onclick="kovetkezo(1)">Következő</button>`;
    szoveg += `</button>`;
    szoveg += `</div>`;
    szoveg += `<div id="tartalom">`;
    szoveg += `<h3>1. ${tomb[0].kerdes}</h3>`;
    if (tomb[0].kep !== '') {
        szoveg += `<img src="${tomb[0].kep}" />`;
    }
    szoveg += `<form>`;
    for (let i = 0; i < tomb[0].valaszok.length; i++) {
        szoveg += `<input type="radio" id="${i}" name="${tomb[0].kerdes}">
		<label for="${i}">${tomb[0].valaszok[i]}</label><br>`;
    }
    szoveg += `</form>`;
    szoveg += `</div>`;
    szoveg += `<div id="also-gombok">`;
    szoveg += `<button onclick="megoldasFelfed()" id="megoldas">Megoldás</button>`;
    szoveg += `<button style="display: none" onclick="elrejtes()" id="elrejtes">Elrejtés</button>`;
    szoveg += `</div>`;
    szoveg += `<div id="jo-valaszok">`;
    szoveg += `<h4>Helyes Válasz</h4>`;
    szoveg += '<ul>';
    for (let i = 0; i < tomb[0].helyesValaszok.length; i++) {
        szoveg += `<li>${tomb[0].valaszok[i]}</li>`;
    }
    szoveg += '</ul>';
    szoveg += `</div>`;
    szoveg += `</div>`;

    return szoveg;
}
