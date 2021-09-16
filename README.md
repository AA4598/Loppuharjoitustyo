# WEB-KEHITTÄJÄ

## Loppuharjoitustyö

## JAMK / Tiko

KUVA TÄHÄN jossa omat treenit!!!

# 1. Yleisesittely

### Sovelluksen idea

TREENIPÄIVÄKIRJA, jolla voit ylläpitää painoilla tehtäviä treenejä. Treenitietoja voidaan lisätä, muokata, poistaa sekä selata.  
Käyttäjäprofiileja on kaksi, harrastajat ja ammattilaiset.

### Toiminnallisuus lyhyesti

Uusi käyttäjä rekisteröityy sovellukseen antamalla nimi, ja onko ammattilainen
Tietokantaan talletetaan käyttäjistä siis etunimi, sukunimi, sähköpostiosoite, salasana, onko ammattilainen.
kirjautumisessa palautetaan token, jolla käyttäjä voidaan tunnistaa ja tarkistaa hänen oikeutensa eri palveluihin.
Rekisteröitynyt ja kirjautunut käyttäjä voi lisätä "Omat reenit"-sivulla omia treenitietoja eli
Yksittäisen käyttäjän treeneistä talletaan pvm, treenilaji, suorituskerrat, suorituspaino.
Tietoja voidaan selata lisätä, muokata ja poistaa CRUD
Sovelluksessa on seuraavat sivut: "Etusivu", "Harrastajien tulokset", "Ammattilaisten tulokset", "Omat treenit".
Harrastajasivuille tarvitsee summata yhteen harrastajien treeneistä tiedot seuraavasti: pvm, ko. päivänä kaikkien harrastajien tekemien suorituskertojen summa, kaikkien ko. päivänä mitä tahansa suoritusta tehneiden harrastajien lukumäärä. Samalla tavoin ammattilaissivua varten lasketaan vastaavat tiedot koskien ammattilaisia.

Harrastajat-sivulla näytetään harrastajien tulokset päivittäin yhteenlaskettuina. Tieto näytetään taulukkomaisesti, sarakkeet: Pvm, suoritukset yhteensä, suorittajalkm.

Ammattilaiset-sivulla näytetään ammattilaisten tulokset päivittäin yhteenlaskettuina. Tieto näytetään taulukkomaisesti, sarakkeet: Pvm, suoritukset yhteensä, suorittajalkm.

Omat-sivut
Sivulla näytetään taulukkomaisesti yhden käyttäjän treenit. Sarakkeet: Pvm, Laji, Suorituskerrat, Paino.
Omat treenit voi nähdä vain kirjautunut käyttäjä ja hän näkee siellä vain omat tuloksensa, ei muiden.
"Omat treenit"-sivulla käyttäjä voi muokata omia suorituksiaan.
"Omat treenit"-sivulla käyttäjä voi poistaa omia suorituksiaan
"Omat treenit"-sivulla on painike, josta käyttäjälle avautuu joko samalle sivulle tai dialogiin tms. kentät, joiden avulla käyttäjä voi lisätä omia treenisuorituksiaan

Pääsivulla on sovelluksen nimi TREENIPÄIVÄKIRJA, taustakuva sekä valikkopalkki, jossa navigoinnit em. sivuille. Lisäksi kirjautumattomalle käyttäjälle näytetään valinta "Kirjaudu". Jos käyttäjä on kirjautunut, näytetään hänen etunimensä.

# Lisää kantaan käyttäjiä ja treenejä

# Kirjautumisdialogi frontendiin

Kyseisestä toiminnosta avautuu modaalinen dialogi, jossa voi syöttää kirjautumista varten sähköpostiosoitteensa ja salasanansa. Jos käyttäjä on kirjautunut, niin näytetään "Kirjaudu"-valinnan tilalla valinta "Kirjaudu ulos".

# 2. Kuvaus teknologioista

## Lyhyehkö kuvaus eri teknologioiden käyttämisestä työssä

MERN-stack SPA-sovellus fullsatck-sovellus
Tietokanta on MongoDBAtlas-palvelussa
backend on toteutettu Node.js:n päällä toimivaa Express-kirjastoa, Mongoose-kirjaston metodeja käytetään MongoDB-tietokannan käsittelyyn.
Frontendin koodattiin käyttämällä Reactia käyttöliittymän muotoilu toteutettiin React-Bootstrapilla
Sovelluksen käyttö vaatii rekisteröinnin ja kirjautumisen. Autentikointi on toteutettu toekn-perusteisesti. Palvelun käytössä
käyttäjä lähettää palvelupyyntöjen yhteydessä kirjautumisen yhteydessä saamansa tokenin, näin varmistetaan se kuka palvelua käytäää ja on siihen oikeutettu.
se on token-perustaiselle autentikoinnille Token-autentikaatio
JSON web token -muotoisia tokeneja

Koko fullstack (backend ja frontend) on julkaistu Herokuun sekä Azureen

## Komennot, joilla kehitysversion saa Githubista omalle koneelle toimimaan

Projekti saadaan kopioitua omalle koneelle komennolla:
`git clone https://github.com/AA4598/Loppuharjoitustyo`

node_modules pitää asentaa backendin juuressa komennolla:
`nmp i`
palvelin käyntiin backendin juuresta komennolla:
`nmp start`

node_modules pitää asentaa frontendin juuressa komennolla:
`nmp i`
client käyntiin frontendin juuresta komennolla:
`nmp start`
localhost

# 3. Reflektio ja ajankäyttö

## Miten työ onnistui? Mikä oli helppoa, mikä vaikeaa?

TEin aluksi pitkiä sessioita oppmisprosessi ja etenemällä loogisesti.
Koska oli aiksemmin jotakin pohjaa/opiskelukokemusta niin ilmeisesti on tullut jotakin opittua, jonk kyllä melko nopeasti unohtaa jos ei ole käyttöä kuten nyt pääsi käymään usen kuukauden jälkeen kun piti alkaa kattoon mitä tulikaan tehtyä.
Työ kokonaisuudessaa oli yllättävän helppo, koska oli hieman aikaisempaa opiskeukokemusta

## Kuinka paljon käytit aikaa loppuharjoitustyön tekemiseen?

Paljon, en pitönyt kirjaa kuten en koskaan, ei ollut oikein tekemisenmeninikiä pikkuhiljaa valmistui

## Mitä tietoja/taitoja sinun tulee vielä kehittää?

Pitäis varmaankin kerrata koko kurssikonaisuuden materiaaleja.
Erityisesti Angular-osuus pitäisi käydä ajatuksella läpi, Angular vaikuttaa Reactiin verrattuna
valmiimmalta sovelluskehykseltä, sen oppiminen vaatinee enemmän koska kun osaminen kehityy niin pääse loppupeleissä vähemmällä,
Angularilla arkkitehtuuri on jämäkkä,

Näitä harrastaja- tai ammattilaissivujen tietoja ei tarvitse tallettaa kantaan, vaan ne voidaan laskea tekemällä kantaan sopivat haut kyseisiä tietoja näytettäessä.

## 1. Tee SPA-tyylinen React-sovellus

## 2.

## 3. Käyttäjän kirjautumisen toteutus backendissä

Toteuta backendiin endpoint "user/login", joka ottaa vastaan POST-toimintoja tarvittavat käyttäjätiedot kirjautumista varten. Koodi tarkistaa kannasta, että kyseinen käyttäjä löytyy.

## 4. Kirjautumisen toteutus tokenin avulla

Edellinen toteutus siten, että kirjautumisessa palautetaan token, jolla käyttäjä voidaan tunnistaa ja tarkistaa hänen oikeutensa eri palveluihin. Tokeniin on hyvä tallettaa esim. käyttäjän id ja hänen roolinsa eli onko ammattilainen.

## 5. Rekisteröitymisdialogi

Kirjautumattomalle käyttäjälle annetaan myös mahdollisuus rekisteröityä. Rekisteröitymistä varten kirjautumisdialogissa on painike "Rekisteröidy", joka avaa joko uuden dialogin tai antaa kirjautumisdialogille lisäkenttiä. Rekisteröinnin yhteydessä kysytään etunimi, sukunimi, sähköpostiosoite, salasana sekä ruksattava tieto onko ammattilainen. Jos rekisteröityjä ei ruksi ko. kohtaa, hän on silloin harrastelija. Tiedot viedään tietokantaan. Rekisteröitymistä varten on endpoint "user/register".

## 6. Reititys frontendissa kovakoodattuna

Toteuta frontendissa reititys ja navigointivalintojen näyttäminen siten, että kaikki käyttäjät, myös kirjautumattomat voivat nähdä pääsivun sekä harrastajien tulokset. Kirjautuneet ammattilaiset voivat nähdä lisäksi myös ammattilaisten tulokset. "Omat tulokset"-sivu sekä sen navigointivalinta näytetään vain kirjautuneille (voi olla harrastelija tai ammattilainen), eikä sinne saa päästä esim. urlia käsin kirjoittamalla. Samalla tavoin myös muille sivuille pitää estää pääsy muilta kuin luvallisilta käyttäjiltä. Oikeudet voidaan toteuttaa kovakoodattuina eli ne eivät tarvitse olla kannasta luetun käyttäjätiedon mukaan määrättyjä.

## 7. Reititys frontendissa kannasta luetun tiedon avulla

Frontendin reititys siten, että käyttäjän kirjautumistiedot on talletettu palvelimelta onnistuneen kirjautumisen myötä saatuna tokenina + etunimenä + roolina kontekstiin (useContext esim.) ja oikeuksien tarkistus navigoinnissa sekä etunimen näyttö "Omat treenit"-sivulla tehdään sitä käyttäen.

## 8. "Harrastajat"-sivu, tieto haettu kannasta

Harrastajat-sivulla näytetään harrastajien tulokset päivittäin yhteenlaskettuina. Tieto näytetään taulukkomaisesti, sarakkeet: Pvm, suoritukset yhteensä, suorittajalkm. Hakua varten backendissä endpoint "result/amateurs".

## 9. "Ammattilaiset"-sivu, tieto haettu kannasta

Ammattilaiset-sivulla näytetään ammattilaisten tulokset päivittäin yhteenlaskettuina. Tieto näytetään taulukkomaisesti, sarakkeet: Pvm, suoritukset yhteensä, suorittajalkm. Hakua varten backendissä endpoint "result/professionals".

## 10. "Omat treenit"-sivu, tietojen näyttö taulukkomaisesti, tieto haettu kannasta, käyttäjä kovakoodattu

Sivulla näytetään taulukkomaisesti yhden käyttäjän treenit. Sarakkeet: Pvm, Laji, Suorituskerrat, Paino. Hakua varten tehdään backendiin endpoint "result/<id>". Tunniste voi olla kovakoodattu.

## 11. Edellinen autentikoituneen ja autorisoidun tunnuksen avulla

Omat treenit voi nähdä vain kirjautunut käyttäjä ja hän näkee siellä vain omat tuloksensa, ei muiden. Tämä perustuu siihen, että sisäänkirjautuneella käyttäjällä on tallessa token, jossa on sisällä käyttäjätunniste. Kun hän hakee henkilökohtaisia tuloksia, backend katsoo vastaako pyynnön mukana tulevassa tokenissa oleva tunniste pyynnön endpointin tunnistetta.

## 12. Omien treenien muokkaus, käyttäjä kovakoodattuna

"Omat treenit"-sivulla käyttäjä voi muokata omia suorituksiaan. Backendissä on muokkausta varten endpoint "result/<id>". Tunniste voi olla kovakoodattu.

## 13. Omien treenien muokkaus autentikoituneen ja autorisoidun tunnuksen avulla

Muokkauspyynnön mukana tulee token, josta backend tarkastaa, onko käyttäjällä oikeus ko. tietojen muokkaamiseen.

## 14. Omien treenien poisto, käyttäjä kovakoodattuna

"Omat treenit"-sivulla käyttäjä voi poistaa omia suorituksiaan. Backendissä on poistoa varten endpoint "result/<id>". Tunniste voi olla kovakoodattu.

## 15. Omien treenien poisto autentikoituneen ja autorisoidun tunnuksen avulla

Poistopyynnön mukana tulee token, josta backend tarkastaa, onko käyttäjällä oikeus ko. tietojen poistoon.

## 16. Omien treenien lisäys, käyttäjä kovakoodattuna

"Omat treenit"-sivulla on painike, josta käyttäjälle avautuu joko samalle sivulle tai dialogiin tms. kentät, joiden avulla käyttäjä voi lisätä omia treenisuorituksiaan. Backendissä on lisäystä varten endpoint "result/<id>". Tunniste voi olla kovakoodattu.

## 17. Omien treenien lisäys autentikoituneen ja autorisoidun tunnuksen avulla

Muokkauspyynnön mukana tulee token, josta backend tarkastaa, onko käyttäjällä oikeus tietojen lisäämiseen. Vain kirjautuneet käyttäjät saavat lisätä treenitietoja, tässä ei tarvitse välttämättä tutkia tokenin sisältöä, ainoastaan se onko token validi.

## 18. UI-kirjaston käyttö

Frontendissä on käytetty joko React-Bootstrapia tai Material-UI-kirjastoa tarkoituksenmukaisilla tavoilla ja ulkoasu on siisti ja yhtenäinen. HUOM! Vain jompikumpi näistä kirjastoista kelpaa!!

## 19. Backendin virheettömyys ja viestitys

Backendissä täytyy käsitellä kaikki mahdolliset virhetilanteet ja lähettää niistä sopiva koodi ja ilmoitus.

## 20. Frontendin virheettömyys ja viestitys

Frontendissä täytyy käsitellä backendin lähettämät ilmoitukset ja viestittää niistä käyttäjälle yhdenmukaisella tavalla käyttäen UI-kirjaston dialogia.
