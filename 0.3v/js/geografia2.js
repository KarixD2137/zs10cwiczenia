const panstwa = ["Kanada","USA","Meksyk","Kuba","Gwatemala","Kostaryka","Panama","Dominikana","Wenezuela","Kolumbia","Ekwador","Peru","Boliwia","Brazylia","Chile","Argentyna","Paragwaj","Urugwaj","Egipt","Libia","Algeria","Tunezja","Maroko","Niger","Czad","Sudan","Sudan Południowy","Etiopia","Somalia","Kenia","Demokratyczna Republika Konga","Nigeria","Namibia","Botswana","RPA","Tanzania","Mongolia","Chiny","Japonia","Korea Północna","Korea Południowa","Filipiny","Indonezja","Indie","Pakistan","Kazachstan","Iran","Irak","Arabia Saudyjska","Zjednoczone Emiraty Arabskie","Tajlandia","Wietnam","Australia","Nowa Zelandia","Papua Nowa Gwinea"]
let kilkniete_panstwo;
let ostatnie_panstwa=[]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }

// Losowanie panstwa
function wylosuj_panstwo() {

    let numer_panstwa = getRandomInt(45) + 1;

    if (numer_panstwa==ostatnie_panstwa[0] ||
        numer_panstwa==ostatnie_panstwa[1] ||
        numer_panstwa==ostatnie_panstwa[2] ||
        numer_panstwa==ostatnie_panstwa[3] ||
        numer_panstwa==ostatnie_panstwa[4] ||
        numer_panstwa==ostatnie_panstwa[5] ||
        numer_panstwa==ostatnie_panstwa[6] ||
        numer_panstwa==ostatnie_panstwa[7] ||
        numer_panstwa==ostatnie_panstwa[8] ||
        numer_panstwa==ostatnie_panstwa[9])
    {
        console.log("Wylosowane państwo " + panstwa[numer_panstwa] + "(" + Number(numer_panstwa + 1) +")" +" było już w ostatnich 10 wylosowanych")
        console.log("Ponowne losowanie...")
        wylosuj_panstwo();
    }
    else
    {
    ostatnie_panstwa.unshift(numer_panstwa);
    let div_pytanie = document.getElementById("pytanie_panstwo");
    console.log("Wylosowano: " + panstwa[numer_panstwa] +", panstwo nr " + Number(numer_panstwa + 1));
    div_pytanie.innerHTML = panstwa[numer_panstwa];
    }
}

// Sprawdzanie czy odpowiedź jest poprawna
function sprawdz() 
{
    let div_wynik = document.getElementById("div_wynik");
    let div_wynik_ = document.getElementById("div_wynik_");
    let div_pytanie = document.getElementById("pytanie_panstwo");
    

    if (kilkniete_panstwo==div_pytanie.innerHTML)
    {
        wylosuj_panstwo();
        div_wynik.innerHTML = "Dobrze ✅";
        delay(3000).then(() => div_wynik.innerHTML = " "); 
    }
    else
    {
        div_wynik.innerHTML = "Źle ❌";
        div_wynik_.innerHTML = "To panstwo to " + kilkniete_panstwo;
        delay(3000).then(() => wyczysc());
    }
}

// Czyszczenie pola z wynikiem
function wyczysc()
{
    div_wynik.innerHTML = " ";
    div_wynik_.innerHTML = " ";
}

// Pobiera numer klikniętego panstwa od użytkownika
function panstwo(numer) {
    kilkniete_panstwo = panstwa[numer-1];
    sprawdz();
}

wylosuj_panstwo()