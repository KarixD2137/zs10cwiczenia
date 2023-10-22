const slowa_niem = ["auf dem Sofa liegen","die Hausafgaben machen","etwas Interessantes entdecken","ins Internet gehen","interessante Leute in Internetforen kennenleren","kochen","die Küche","der Küchentisch","Musik hören","der Schreibtisch","sich an den Schreibtisch setzen","sich auf das Sofa legen","sich ausruhen","das Sofa","das Wohnzimmer","das Bett","das Fenster","der Fernseher","die Gardine","die Kommode","die Lampe","das Regal","der Schrank","der Schreibtisch","der Sessel","das Sofa","die Stereoanlage","der Sthuhl","der Teppich","der Vorhang","hängen","liegen","legen","sitzen","sich setzen","stehen","stellen","in der Mitte","in der Ecke","rechts","links","vorne","hinten","das Bügeleisen","der Elektroherd","der Gasherd","der Geschirrspüler","der Staubsauger","die Waschmaschine"];
const slowa_pol = ["leżeć na sofie","robić zadania domowe","odkrywać coś ciekawego","wchodzić do internetu","poznawać ciekawych ludzi na forach internetowych","gotować","kuchnia","stół kuchenny","słuchać muzyki","biurko","siadać przy biurku","kłaść się na sofie","wypoczywać","sofa","salon","łóżko","okno","telewizor","firanka","komoda","lampa","regał","szafa","biurko","fotel","sofa","sprzęt stereo","krzesło","dywan","zasłona","wisieć, wieszać","leżeć","kłaść","siedzieć","siadać","stać","stawiać","na środku","w rogu","po prawej stronie","po lewej stronie","z przodu","z tyłu","żelazko","kuchenka elektryczna","kuchenka gazowa","zmywarka","odkurzacz","pralka"]

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}




let pytanie_slowo = document.getElementById("question");
let odpowiedz = document.getElementById("input");
let wynik = document.getElementById("result");

let tryb = "pol_niem";
let numer_slowa;
let ilosc_prob = 0;

wylosuj_slowo()


function wylosuj_slowo() {
    numer_slowa = getRandomInt(slowa_niem.length);
    if (tryb == "pol_niem")
    {
        pytanie_slowo.innerHTML = "Przetłumacz słowo <b>" + slowa_pol[numer_slowa] + "</b> na niemiecki";
    }
    else
    {
        pytanie_slowo.innerHTML = "Przetłumacz słowo <b>" + slowa_niem[numer_slowa] + "</b> na polski";
    }
}

function check()
{
    if (tryb == "pol_niem")
    {
        if(odpowiedz.value.toLowerCase() == slowa_niem[numer_slowa].toLowerCase())
    {
        wylosuj_slowo();
        wynik.innerHTML="Dobrze ✅";
        delay(1000).then(() => wynik.innerHTML = "");
        odpowiedz.value="";
        ilosc_prob = 0;
    }
    else
    {
        if (ilosc_prob == 0)
        {
            wynik.innerHTML="Źle ❌ <br> Spróbuj jeszcze raz";
            ilosc_prob ++;
        }
        else
        {
            wynik.innerHTML="Źle ❌ <br> Słowo <b>" + slowa_pol[numer_slowa] + "</b> to po niemiecku <b>" + slowa_niem[numer_slowa] + "</b>";
            ilosc_prob ++;
        }
    }
    }
    else
    {
        if(odpowiedz.value.toLowerCase() == slowa_pol[numer_slowa].toLowerCase())
        {
            wylosuj_slowo();
            wynik.innerHTML="Dobrze ✅";
            odpowiedz.value="";
            ilosc_prob = 0;
        }
        else
        {
            if (ilosc_prob == 0)
            {
                wynik.innerHTML="Źle ❌ <br> Spróbuj jeszcze raz";
                ilosc_prob ++;
            }
            else
            {
                wynik.innerHTML="Źle ❌ <br> Słowo <b>" + slowa_niem[numer_slowa] + "</b> to po polsku <b>" + slowa_pol[numer_slowa] + "</b>";
                ilosc_prob ++;
            }
        }
    }
}

function zmien_tryb_pol_niem()
{
    tryb = "pol_niem";
    wylosuj_slowo();
}

function zmien_tryb_niem_pol()
{
    tryb = "niem_pol";
    wylosuj_slowo();
}

