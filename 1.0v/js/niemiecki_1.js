const slowa_niem = ["die Schneebrille","die Skibrille","das Surfbrett","der TenisschAger","alt","die Anzeige","billig","brauchen","bunt","elegant","finden","haben","kaufen","leicht","neu","der Preis","die Telefonnummer","verkaufen","zu einem guten Preis","die FlOte","die Geige","die Gitarre","das Klavier","der Kontrabass","das Schlagzeug","die Trompete","ein Instrument spielen","komponieren","Musik hOren","proben","rappen","singen","tanzen","altmodisch","banal","depressiv","groBartig","interessant","kitschig","klasse","langweilig","miserabel","monoton","originell","perfekt","prima","schrecklich","so lala","toll"];
const slowa_pol = ["gogle narciarskie","gogle narciarskie","deska surfingowa","rakieta tenisowa","stary","ogłoszenie","tani","potrzebować","kolorowy","elegancki","uważać","mieć","kupować","lekki","nowy","cena","numer telefonu","sprzedawać","w dobrej cenie","flet","skrzypce","gitara","pianino","kontrabas","perkusja","trąbka","grać na instumencie","komponować","słuchać muzyki","ćwiczyć","rapować","śpiewać","tańczyć","staromodny","banalny","depresyjny","wspaniały","ciekawy","kiczowaty","świetny","nudny","kiepski","monotonny","oryginalny","doskonały","cudowny","okropny","taki sobie","wspaniały"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}




let pytanie_slowo = document.getElementById("pytanie_slowo");
let odpowiedz = document.getElementById("odpowiedz");
let wynik = document.getElementById("wynik");

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

function sprawdz()
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
