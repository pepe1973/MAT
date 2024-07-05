function utolsoCheckBeir(tomb) {
    let utolso = tomb.length - 1;
    let szoveg = `<div id="elsoCheck">`;
    szoveg = `<div id="felso-gombok">`;
    szoveg += `<button onclick="elozo(${utolso - 1})">Előző</button>`;
    szoveg += `<button style="visibility: hidden">Következő</button>`;
    szoveg += `</button>`;
    szoveg += `</div>`;
    szoveg += `<div id="tartalom">`;
    szoveg += `<h3>${utolso + 1}. ${tomb[utolso].kerdes}</h3>`;
    if (tomb[utolso].kep !== '') {
        szoveg += `<img src="${tomb[utolso].kep}" />`;
    }
    szoveg += `<form>`;
    for (let i = 0; i < tomb[utolso].valaszok.length; i++) {
        szoveg += `<input type="checkbox" id="${i}">
		<label for="${i}">${tomb[utolso].valaszok[i]}</label><br>`;
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
    for (let i = 0; i < tomb[utolso].helyesValaszok.length; i++) {
        szoveg += `<li>${tomb[utolso].helyesValaszok[i]}</li>`;
    }
    szoveg += '</ul>';
    szoveg += `</div>`;
    szoveg += `</div>`;

    return szoveg;
}
