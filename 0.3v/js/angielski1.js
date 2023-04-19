const slowa_ang = ["alien","amazing","amusing","ancient","commit","curious","delighted","disappointing","dramatic","enjoyable","frightening","huge","inspiring","intriguing","investigate","maze","mysterious","orginal","puzzling","suicide","tape","terrifying","thought-provoking","thrilling","tiny","true to life","unbelievable","unforgettable","man-made","mermaid","sculpture","temple","doubt","locker","best-seller","book critic","chapter","character","classic","column","episode","essay","fast-paced","genre","gift","imagination","impress","investigation","magazine","novel","occupation","pharmacy","plot","poison","print","publish","review","storyteller","tale","thriller","tough","violence","breakfast television","breaking news","channel","cover","daily newspaper","documentary","fake news","front page","headline","interview","journalism","journalist","make the headlines","network","news bulletin","news item","present","publisher","report","source","spread","viewer","adverb","decode","downstairs","encrypt","eventually","fluent","inside","Latin","manner","manuscript","noisily","partially","carve","clue","colonist","establish","fence","rock","rope","coincidence","curse","pharaoh","tomb","curiosity","exhausted","Flemish","freezing","be fond of","reign","silent","unravel"];
const slowa_pol = ["obcy","niesamowity","zabawny","starożytny","popełnić","ciekawy","zachwycony","rozczarowujący","dramatyczny","przyjemny","straszny","ogromny","inspirujący","intrygujący","badać","labirynt","tajemniczy","oryginalny","zagadkowy","samobójstwo","taśma","przerażający","skłaniający do przemyśleń","porywający","malutki","realistyczny","niewiarygodny","niezapomniany","stworzony przez człowieka","syrena","rzeźba","świątynia","wątpić","szafka","bestseller","krytyk literacki","rozdział","postać","klasyk","kolumna","odcinek","esej","dziejący sie w szybkim tempie","gatunek","dar","wyobraźnia","wzbudzić podziw","dochodzenie","magazyn","powieść","zawód","apteka","fabuła","trucizna","drukować","publikować","recenzja","opowiadacz","opowieść","thriller","nieustępliwy","przemoc","telewizja śniadaniowa","wiadomości z ostatniej chwili","kanał","relacjonować","gazeta codzienna","film dokumentalny","fałszywe wiadomości","pierwsza strona","nagłówek","wywiad","dziennikarstwo","dziennikarz","trafić na pierwsze strony gazet","sieć telewizyjna","serwis informacyjny","wiadomość","przedstawiać","wydawca","relacjonować","źródło","rozprzestrzeniać","widz","przysłówek","odszyfrować","na dole","zakodować","ostatecznie","biegły","wewnątrz","język łaciński","sposób","manuskrypt","hałaśliwie","częściowo","rzeźbić","trop","kolonista","założyć","ogrodzenie","kołysać","lina","zbieg okoliczności","klątwa","faraon","grobowiec","ciekawość","wyczerpany","Flamand","mroźny","darzyć sympatią","panowanie","milczący","rozwiązywać"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}




let pytanie_slowo = document.getElementById("pytanie_slowo");
let odpowiedz = document.getElementById("odpowiedz");
let wynik = document.getElementById("wynik");

let tryb = "pol_ang";
let numer_slowa;
let ilosc_prob = 0;

wylosuj_slowo()





function wylosuj_slowo() {
    numer_slowa = getRandomInt(slowa_ang.length);
    if (tryb == "pol_ang")
    {
        pytanie_slowo.innerHTML = "Przetłumacz słowo <b>" + slowa_pol[numer_slowa] + "</b> na angielski";
    }
    else
    {
        pytanie_slowo.innerHTML = "Przetłumacz słowo <b>" + slowa_ang[numer_slowa] + "</b> na polski";
    }
}

function sprawdz()
{
    if (tryb == "pol_ang")
    {
        if(odpowiedz.value.toLowerCase() == slowa_ang[numer_slowa].toLowerCase())
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
            wynik.innerHTML="Źle ❌ <br> Słowo <b>" + slowa_pol[numer_slowa] + "</b> to po angielsku <b>" + slowa_ang[numer_slowa] + "</b>";
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
                wynik.innerHTML="Źle ❌ <br> Słowo <b>" + slowa_ang[numer_slowa] + "</b> to po polsku <b>" + slowa_pol[numer_slowa] + "</b>";
                ilosc_prob ++;
            }
        }
    }
}

function zmien_tryb_pol_ang()
{
    tryb = "pol_ang";
    wylosuj_slowo();
}

function zmien_tryb_ang_pol()
{
    tryb = "ang_pol";
    wylosuj_slowo();
}
