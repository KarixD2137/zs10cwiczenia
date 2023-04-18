const miejsca = ["Gotlandia", "Wysypy Owcze", "Szetlandy", "Orkady", "Hebrydy", "Ibiza", "Minorka", "Majorka", "Korsyka", "Sardynia", "Sycylia", "Kreta", "Wyspy jońskie", "Cyklady", "Sporady", "Półwysep Kanin", "Półwysep Kolski", "Półwysep Skandynawski", "Półwysep Jutlandzki", "Półwysep Bretoński", "Półwysep Iberyjski", "Półwysep Apeniński", "Półwysep Bałkański", "Półwysep Peloponez", "Półwysep Krymski", "Zatoka Botnicka", "Zatoka Fińska", "Zatoka Ryska", "Zatoka Biskajska", "Morze Białe", "Morze Barentsa", "Morze Norweskie", "Morze Północne", "Morze Śródziemne", "Morze Tyrreńskie", "Morze Jońskie", "Morze Egejskie", "Morze Adriatyckie", "Morze Czarne", "Morze Azowskie", "Cieśnina Kattegat", "Cieśnina Skagerrak", "Cieśnina Kaletańska", "Cieśnina Giblartarska", "Cieśnina Mesyńska", "Cieśnina Bosfor"]
let kilkniete_miejsce;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }



// Losowanie miejsca
function wylosuj_miejsce() {
    let numer_miejsca = getRandomInt(45) + 1;
    let div_pytanie = document.getElementById("div_pytanie");
    console.log("Wylosowano miejsce nr. " + numer_miejsca);
    div_pytanie.innerHTML = miejsca[numer_miejsca];
}

// Sprawdzanie czy odpowiedź jest poprawna
function sprawdz() 
{
    let div_wynik = document.getElementById("div_wynik");
    let div_wynik_ = document.getElementById("div_wynik_");
    

    if (kilkniete_miejsce==div_pytanie.innerHTML)
    {
        wylosuj_miejsce();
        div_wynik.innerHTML = "Dobrze ✅";
        delay(3000).then(() => div_wynik.innerHTML = " "); 
    }
    else
    {
        div_wynik.innerHTML = "Źle ❌";
        div_wynik_.innerHTML = "To miejsce to " + kilkniete_miejsce;
        delay(3000).then(() => wyczysc());
    }
}

// Czyszczenie pola z wynikiem
function wyczysc()
{
    div_wynik.innerHTML = " ";
    div_wynik_.innerHTML = " ";
}

// Pobiera numer klikniętego miejsca od użytkownika
function miejsce(numer) {
    kilkniete_miejsce = miejsca[numer-1];
    sprawdz();
}

wylosuj_miejsce()