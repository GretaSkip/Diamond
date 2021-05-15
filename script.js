//Reikia nupaišyti pilnavidurį rombą, taip pat, kaip ir pilnavidurį kvadratą (https://lt.wikipedia.org/wiki/Rombas), kurio aukštis 21 eilutė. Reikia padaryti, kad kiekviena rombo žvaigždutė būtų atsitiktinės RGB spalvos (perkrovus puslapį spalvos turi keistis).


//Sugeneruokite atsitiktinį stringą. Visus skaitmenis stringe įdėkite į h1 tagą. Jegu iš eilės eina keli skaitmenys, juos į tagą reikią dėti kartu (h1 atsidaro prieš pirmą ir užsidaro po paskutinio) Keitimui naudokite h1 funkciją. visos raidės spausdinamos naujoje eilutėje

  let randomTxt = [...Array(30)].map(() => Math.random().toString(36)[2]).join('');

  for (let i = 0; i < randomTxt.length; i++) {
      const element = randomTxt[i];
                
      console.log(element)
  }

  let element = randomTxt;

  if (element) {
    isNaN
    function h1(element) {
        return "<h1>" + element + "</h1>";
    }
}