function checkBeir(tomb, j) {
    let szoveg = `<div id="elsoCheck">`;
    szoveg = `<div id="felso-gombok">`;
    szoveg += `<button onclick="elozo(${j - 1})">Előző</button>`;
    szoveg += `<button onclick="kovetkezo(${j + 1})">Következő</button>`;
    szoveg += `</button>`;
    szoveg += `</div>`;
    szoveg += `<div id="tartalom">`;
    szoveg += `<h3>${j + 1}. ${tomb[j].kerdes}</h3>`;
    if (tomb[0].kep !== '') {
        szoveg += `<img src="${tomb[j].kep}" />`;
    }
    szoveg += `<form>`;
    for (let i = 0; i < tomb[j].valaszok.length; i++) {
        szoveg += `<input type="checkbox" id="${i}">
		<label for="${i}">${tomb[j].valaszok[i]}</label><br>`;
    }
    szoveg += `</form>`;
    szoveg += `</div>`;
    szoveg += `<div id="also-gombok">`;
    szoveg += `<button onclick="megoldasFelfed()" id="megoldas">Megoldás</button>`;
    szoveg += `<button style="display: none" onclick="elrejtes()" id="elrejtes">Elrejtés</button>`;
    szoveg += `</div>`;
    szoveg += `<div id="jo-valaszok">`;
    szoveg += `<h4>Helyes Válaszok</h4>`;
    szoveg += '<ul>';
    for (let i = 0; i < tomb[j].helyesValaszok.length; i++) {
        szoveg += `<li>${tomb[j].helyesValaszok[i]}</li>`;
    }
    szoveg += '</ul>';
    szoveg += `</div>`;
    szoveg += `</div>`;

    return szoveg;
}
