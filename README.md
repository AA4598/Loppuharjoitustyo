# WEB-KEHITTÄJÄ

## Loppuharjoitustyö

## JAMK / Tiko

## 1. Yleisesittely

![Treenipäiväkirja etusivu](./pic.png?raw=true)

### Sovelluksen idea

TREENIPÄIVÄKIRJA, jolla voit ylläpitää painoilla tehtäviä treenejä. Treenitietoja voidaan lisätä, muokata, poistaa sekä selata.  
Käyttäjäprofiileja on kaksi, harrastajat ja ammattilaiset.

### Toiminnallisuus lyhyesti

Sovelluksessa on seuraavat sivut: "Etusivu", "Harrastajien tulokset", "Ammattilaisten tulokset", "Omat treenit".

Sovellus avautuu aluksi Etusivu-näkymään. Valikkopalkissa on navigoinnit em. sivuille. Kirjautumattomalle käyttäjälle näytetään valinta "Kirjaudu". Jos käyttäjä on kirjautunut, näytetään hänen etunimensä ja valinta "Kirjaudu ulos".

Kun käyttäjä painaa "Kirjaudu"-painiketta avautuu modaalinen dialogi, johon voidaan syöttää kirjautumista varten sähköpostiosoite ja salasana. Jos käyttäjällä ei vielä ole tunnuksia voi hän rekisteröityä painamalla kirjautumislomakkeella olevaa "Rekisteröidy"-painiketta, jolloin avautuu rekisteröintilomake. Rekisteröinnin yhteydessä kysytään etunimi, sukunimi, sähköpostiosoite, salasana sekä ruksattava tieto onko ammattilainen.

Jos kirjautunut käyttäjä on ammattilainen, on hänellä pääsy navigointipalkissa "Omat treenit"-sivun lisäksi "Ammattilaisten tulokset"-sivuille. Jos kirjautunut käyttäjä on harrastaja on hänellä pääsy "Omat treenit"-sivun lisäksi "Harrastajien tulokset"-sivuille.

Ammattilaiset- ja harrastajat-sivuilla näytetään tulokset päivittäin yhteenlaskettuina. Tietoja ovat pvm, suoritukset yhteensä, suorittajalkm.

"Omat treenit"-sivulla näytetään käyttäjän omat treenitiedot. Lisäksi sivulla käyttäjä voi lisätä, muokata sekä poistaa omia suorituksiaan. Suorituksen tietoja ovat pvm, treenilaji, suorituskerrat, suorituspaino.

## 2. Kuvaus teknologioista

### Lyhyehkö kuvaus eri teknologioiden käyttämisestä työssä

Työssä toteutettu fullstack on MERN-stack.

Backend on toteutettu Node.js:n päällä toimivaa Express-kirjastoa käyttämällä.

Tietokanta on MongoDBAtlas-palvelussa, kannan tyyppi on NoSQL.
MongoDB-tietokannan käsittelyyn käytetään Mongoose-kirjaston metodeja.

Frontend on SPA-sovellus, joka on toteutettu Reactilla. Käyttöliittymän muotoilu on toteutettu React-Bootstrapilla.

Sovelluksen käyttö vaatii rekisteröinnin ja kirjautumisen. Autentikointi on toteutettu token-perusteisesti.
Tokenit ovat JSON Web Token (JWT) -muotoisia tokeneja

Fullstack (backend ja frontend) on julkaistu Herokuun sekä Azureen.

#### Julkaisu Internetiin

##### Heroku

https://greattrainingdiary.herokuapp.com/

##### Azure

https://greattrainingdiary.azurewebsites.net/

### Komennot, joilla kehitysversion saa Githubista omalle koneelle toimimaan

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
sovellus käynnistyy selaimen osoitteeseen http://localhost:3000/

## 3. Reflektio ja ajankäyttö

### Miten työ onnistui? Mikä oli helppoa, mikä vaikeaa?

Työ onnistui hyvin ilman suurempia ongelmia, johtuen pitkälti siitä, että oli jo hieman aikaisempaa pohjaa/opiskelukokemusta.

Työ kokonaisuudessaan oli yllättävän helppo, johtuen em. syistä.
Vaikeinta oli kenties eräs pitkä NoSQL-lauseke.

### Kuinka paljon käytit aikaa loppuharjoitustyön tekemiseen?

Paljon, en pitänyt kirjaa, mutta ainakin enemmän kuin 2op verran.

### Mitä tietoja/taitoja sinun tulee vielä kehittää?

Pitäisi kehittää muistiinpanojen, raportoinnin, dokumentoinnin tekemistä. Toimin liikaa (työ)muistin varassa ja siitä johtuen vaatii välillä kohtuuttomasti aikaa palautella asioita mieliin verrattuna siihen, että ne voisi jostakin lukea jo aikaisemmin "purskeltuna".
