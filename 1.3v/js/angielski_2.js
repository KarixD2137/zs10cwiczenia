const slowa_ang = ["ban","chemical","climate change","community","cut down","deforestation","destroy","eco-friendly","endangered species","environment","global warming","green","increase","landfill","mend","pesticides","plant","pollute","protect","renewable energy","repurpose","reuse","rubbish","solar power","throw away","turbine","wind farm","accessories","capsule wardrobe","carbon dioxide","contents","cotton","dye","fashion industry","harmful","in-between","manufacture","natural resources","staple","unwanted","worn out","acid rain","avalanche","blizzard","CO2 emissions","coastal area","crops","disaster","drought","earthquake","extinct spiecies","fossil fuel","greenhouse effect","melting ice caps","natural habitat","nuclear accident","ozone layer","prevent","seismic","surface","threat","volcanic eruption","aluminium","bamboo","brick","cardboard","concrete","cushion","deim","foam","iron","leather","litter","marine","nylon","paraphrase","polystyrene","rubber","sand","steel","stone","coastline","pine tree","raw","chimney","convert","threaten","bike frame","decompose","flexible","frames","hybrid","soil","awareness","coral reef","ecosystem","fate","herbicide","kingdom","migrate","polyester","prolonged","straw"];
const slowa_pol = ["zakazać","substancja chemiczna","zmiana klimatu","społeczność","wycinać","wylesianie","niszczyć","przyjazny dla środowiska","gatunek zagrożony wyginięciem","środowisko","globalne ocieplenie","ekologiczny","wzrastać","wysypisko","naprawiać","pestycydy","sadzić","zanieczyszczać","chronić","energia odnawialna","zmieniać przeznaczenie","użyć ponownie","śmieci","energia słoneczna","wyrzucać","turbina","elektrownia wiatrowa","akcesoria","garderoba kapsułowa","dwutlenek węgla","zawartość","bawełna","barwnik","branża odzieżowa","szkodliwy","pośredni","produkować","zasoby naturalne","podstawowy","niechciany","zużyty","kwaśny deszcz","lawina","zamieć śnieżna","emisja dwutlenku węgla","strefa przybrzeżna","plony","katastrofa","susza","trzęsienie ziemi","wymarły gatunek","paliwo kopalniane","efekt cieplarniany","topniejące czapy lodowe","naturalne środowisko","wypadek nuklearny","warstwa ozonowa","zapobiegać","sejsmiczny","powierzchnia","zagrożenie","wybuch wulkanu","aluminium","bambus","cegła","karton","beton","poduszka","materiał dżinsowy","pianka","żelazo","skóra","śmieci","morski","nylon","parafraza","polistyren","guma","piasek","stal","kamień","linia brzegowa","sosna","nieprzetworzony","komin","przekształcać","zagrażać","rama rowerowa","rozkładać się","elastyczny","oprawki","hybrydowy","gleba","świadomość","rafa koralowa","ekosystem","los","środek chwastobójczy","królestwo","migrować","poliester","długotrwały","słomka"];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}




let pytanie_slowo = document.getElementById("question");
let odpowiedz = document.getElementById("input");
let wynik = document.getElementById("result");

let tryb = "pol_ang";
let numer_slowa;
let ilosc_prob = 0;

wylosuj_slowo()





function wylosuj_slowo() {
    odpowiedz.value="";
    wynik.innerHTML="";
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
        delay(10).then(() => wynik.innerHTML = "Dobrze ✅");
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

function podpowiedz()
{
    if (tryb == "pol_ang")
    {
        wynik.innerHTML="Podpowiedź 🔍 <br> Słowo <b>" + slowa_pol[numer_slowa] + "</b> to po angielsku <b>" + slowa_ang[numer_slowa] + "</b>";
        ilosc_prob ++;
    }
    else
    {
        wynik.innerHTML="Podpowiedź 🔍 <br> Słowo <b>" + slowa_ang[numer_slowa] + "</b> to po polsku <b>" + slowa_pol[numer_slowa] + "</b>";
        ilosc_prob ++;
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
