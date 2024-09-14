import Image from "next/image";
import styles from '../pageStyle';
import { useState } from "react";

const getImage = (name) => {
  return require(`./pictures/${name}.png`);
};
// Das hier ist das richtige Projekt

/*Alle bilder in "Pictures" hochladen und dann die Passenden namen unten Eintragen*/
/*=>Siehe Beispiel Pistazie/Kaesekuchen!!*/ 

const price = {priceSmall: "3.20",priceBig: "4.80"}
const Kaesekuchen = { name: "Käsekuchen", img_name_: 'Kaesekuchen', available: true }
const BunterKleks = { name: "Bunter-Kleks", img_name_: 'Kaesekuchen',available: true }
const Cocoloco = { name: "Cocoloco", img_name_: 'Kaesekuchen',available: true }
const BananaSplit = { name: "Bananen-Split", img_name_: 'Kaesekuchen',available: true }
const Haselnuss = { name: "Haselnuss", img_name_: 'Kaesekuchen',available: true }
const Schokolade = { name: "Schokolade", img_name_: 'Kaesekuchen',available: true }
const Stratcciatella = { name: "Stratcciatella",img_name_: 'Kaesekuchen', available: true }
const JogurtHimbere = { name: "Jogurt-Himbere",img_name_: 'Kaesekuchen', available: true }
const JogurtCassis = { name: "Jogurt-Cassis",img_name_: 'Kaesekuchen', available: true }
const Pistazie = { name: "Pistazie",img_name_: 'Pistazie', available: true }
const JogurtErdbeere = { name: "Jogurt-Erdbeere",img_name_: 'Kaesekuchen', available: true }
const SaltetKaramell = { name: "Saltet-Karamell",img_name_: 'Kaesekuchen', available: true }
const Vanille = { name: "Vanille",img_name_: 'Kaesekuchen', available: true }
const Jogurt = { name: "Jogurt",img_name_: 'Kaesekuchen', available: true }
const Kaffe = { name: "Kaffe",img_name_: 'Kaffe', available: true }
const Kokustraum = { name: "Kokustraum",img_name_: 'Kaesekuchen', available: true }
const SchokoKeks = { name: "Schoko-Kecks",img_name_: 'Kaesekuchen', available: true }
const MangoPassionsFruchtSorbet = { name: "Mango-Passionsfrucht-Sorbet",img_name_: 'Kaesekuchen', available: true }
const ErdbeerSorbet = { name: "Erdbeer-Sorbet",img_name_: 'Kaesekuchen', available: true }
const ZitronenSorbet = { name: "Zitronen-Sorbet",img_name_: 'Kaesekuchen', available: true }
const JogurtHolunder = { name: "Jogurt-Holunder",img_name_: 'Kaesekuchen', available: true }
const SchokoVegan = { name: "Schoko-Vegan",img_name_: 'Kaesekuchen', available: true }
const HundeEis = { name: "Hunde-Eis",img_name_: 'Kaesekuchen', available: true, special: true }
/*async function server() {
  try {
    const response = await fetch("/api/data");
    return response;
  } catch (err) {
    console.log(err);
  }
}*/

let ice_ = [Kaesekuchen, BunterKleks, Cocoloco, BananaSplit, Haselnuss, Schokolade, 
  Stratcciatella,Jogurt, JogurtHimbere, JogurtCassis, Pistazie, JogurtErdbeere, SaltetKaramell, Vanille,
  Kaffe, Kokustraum, SchokoKeks, MangoPassionsFruchtSorbet, ErdbeerSorbet, ZitronenSorbet,
JogurtHolunder, SchokoVegan, HundeEis];

let ice_big = [Haselnuss, JogurtCassis, Vanille, Kaffe, SchokoKeks, ErdbeerSorbet]


function EisKlein({ searchQuery }) {
  const filteredIceCreams = ice_
    .filter((ice) => ice.name.toLowerCase().includes(searchQuery.toLowerCase()));
  
  if (filteredIceCreams.length === 0) {
    return <div style={styles.notFound}>Nicht gefunden</div>;
  }
  
  return filteredIceCreams.map((ice) => (
    <div style={styles.icecreamcard}>
      <Image src={getImage(ice.img_name_)} alt={ice.name} width={300} height={200} />
      <div style={styles.icecreaminfo}>
        <h3 style={styles.icecreamname}>{ice.name}</h3>
        <p style={styles.availability}>Verfügbar: {ice.available ? "Ja" : "Nein"}</p>
        <p style={styles.size}>Größe: 150ml{ice.size}</p>
        <p style={styles.priceStyle}>Preis: {price.priceSmall}€</p>
      </div>
    </div>
  ));
  }

function EisGroß({ searchQuery }) {
  return ice_big
    .filter((ice) => ice.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .map((ice) => (
      <div style={styles.icecreamcardBig}>
        <Image src={getImage(ice.img_name_)} alt={ice.name} width={300} height={200} />
        <div style={styles.icecreaminfo}>
          <h3 style={styles.icecreamname}>{ice.name}</h3>
          
          <p style={styles.size}>Größe: 480ml</p>
          <p style={styles.priceStyle}>Preis: {price.priceBig}€</p>
        </div>
      </div>
    ));
}

export default function Home() {
  const [searchQuerry, setSearchQuerry] = useState("");
  const [showLogin, setShowLogin] = useState(false);

  const handleSearch = (e) => {
    setSearchQuerry(e.target.value);
    console.log("Toggle login clicked!");
  };
  const handleToggleLogin = () => {
    setShowLogin(!showLogin);
  };

  return (
    // Name duch Bild ersetzen
    <main className="flex flex-col items-center justify-between p-4">
      <div style={styles.headerwrapper}>
        <div style={styles.header}>
          <h1 className="flex center-text text-align: center flex-col text-4xl md:text-4xl font-bold text-gray-900"> Eisautomat Sersheim</h1>
        </div>
      </div>
      <div style={styles.searchBar}>
        <input className="Search" type="search" style={styles.InputSearchStyle} value={searchQuerry} onChange={handleSearch} placeholder="Suchen"></input>
      </div>
      <div style={styles.body}>
        <div style={styles.icecreamgrid}>
          <EisKlein searchQuery={searchQuerry} />
          <EisGroß searchQuery={searchQuerry}/>
        </div>
        {showLogin && <Login handleClose={handleToggleLogin} />}
      </div>
      <div className="fotter">
        <div style={styles.FooterBox}>
          <div className="Adresse">
            <h4 className="text-2xl font-bold text-gray-900">Adresse:</h4>
            <h2>Vaihinger Straße 82</h2>
            <h2>74372 Sersheim</h2>
            <div className="GoogleMapsWrapper">
              <a className="Link" href="https://www.google.com/maps/place/Vaihinger+Stra%C3%9Fe+82,+74372+Sersheim">
                <h2 style={styles.AdresseLink}>Adresse in Google Maps öffnen</h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
