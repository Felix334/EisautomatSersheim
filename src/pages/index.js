import Image from "next/image";
import {styles} from "./pageStyle";
import { useState } from "react";

const getImage = (image_name_) => {
  if (image_name_) {
    return require(`./pictures/${image_name_}.jpg`);
  } else {
    return require(`./pictures/DefaultImage.jpg`);
  }
};
const getImageGroß = (image_name_G) => {
  if (image_name_G) {
    return require(`./pictures/${image_name_G}.jpg`);
  } else {
    return require(`./pictures/DefaultImage.jpg`);
  }
};

//Test Neu

/*Alle bilder in "Pictures" hochladen und dann die Passenden namen unten Eintragen*/
/*=>Siehe Beispiel Pistazie/Kaesekuchen!!*/

const price = { priceSmall: "3.20", priceBig: "4.80" };
const Kaesekuchen = {
  name: "Käsekuchen",
  img_name_: "Kaesekuchen",
  available: true,
};
const BuntesKleks = {
  name: "Buntes-Klecks",
  img_name_: "BuntesKlecksK",
  image_name_G: "BuntesKlecksG",
  available: true,
};
const Cocoloco = {
  name: "Cocoloco",
  img_name_: "DefaultImage",
  available: true,
};
const BananaSplit = {
  name: "Bananen-Split",
  img_name_: "DefaultImage",
  image_name_G: "BananenSplitG",
  available: true,
};
const Haselnuss = {
  name: "Haselnuss",
  img_name_: "HaselnussK",
  image_name_G: "HaselnussG",
  available: true,
};
const Schokolade = {
  name: "Schokolade",
  img_name_: "SchokoK",
  image_name_G: "SchokoG",
  available: true,
};
const Stratcciatella = {
  name: "Stratcciatella",
  img_name_: "StracciatellaK",
  image_name_G: "StratcciatellaG",
  available: true,
};
const JogurtHimbere = {
  name: "Jogurt-Himbere",
  img_name_: "DefaultImage",
  available: true,
};
const JogurtCassis = {
  name: "Jogurt-Cassis",
  img_name_: "Jogurt-Cassis",
  image_name_G: "DefaultImage",
  available: true,
};
const Pistazie = {
  name: "Pistazie",
  img_name_: "PistazieK",
  image_name_G: "PistazieG",
  available: true,
};
const JogurtErdbeere = {
  name: "Jogurt-Erdbeere",
  img_name_: "Jogurt-Erdbeere",
  image_name_G: "Jogurt-ErdbeerG",
  available: true,
};
const SaltetKaramell = {
  name: "Saltet-Karamell",
  img_name_: "Saltet-Karamell",
  available: true,
};
const Vanille = {
  name: "Vanille",
  img_name_: "VanilleK",
  image_name_G: "VanilleK",
  available: true,
};
const Jogurt = { name: "Jogurt", img_name_: "Jogurt", image_name_G: "JogurtG",available: true };
const Kaffe = {name: "Kaffe",
  img_name_: "Kaffe",
  image_name_G: "DefaultImage",
  available: true,
};
const Kokustraum = {
  name: "Kokustraum",
  img_name_: "DefaultImage",
  available: true,
};
const SchokoKeks = {
  name: "Schoko-Kecks",
  img_name_: "DefaultImage",
  image_name_G: "SchokoKeksG",
  available: true,
};
const MangoPassionsFruchtSorbet = {
  name: "Mango-Passionsfrucht-Sorbet",
  img_name_: "MangoPassionsfrucht-Sorbet",
  image_name_G:"Mango-PassionsFrucht-SorbetG",
  available: true,
};
const ErdbeerSorbet = {
  name: "Erdbeer-Sorbet",
  img_name_: "DefaultImage",
  img_name_G: "DefaultImage",
  available: true,
};
const ZitronenSorbet = {
  name: "Zitronen-Sorbet",
  img_name_: "DefaultImage",
  available: true,
};
const JogurtHolunder = {
  name: "Jogurt-Holunder",
  img_name_: "DefaultImage",
  available: true,
};
const SchokoVegan = {
  name: "Schoko-Vegan",
  img_name_: "Schoko-VeganK",
  available: true,
};
const HundeEis = {
  name: "Hunde-Eis",
  img_name_: "Hunde-Eis",
  available: true,
  special: true,
};

let ice_ = [
  Kaesekuchen,
  BuntesKleks,
  Cocoloco,
  BananaSplit,
  Haselnuss,
  Schokolade,
  Stratcciatella,
  Jogurt,
  JogurtHimbere,
  JogurtCassis,
  Pistazie,
  JogurtErdbeere,
  SaltetKaramell,
  Vanille,
  Kaffe,
  Kokustraum,
  SchokoKeks,
  MangoPassionsFruchtSorbet,
  ErdbeerSorbet,
  ZitronenSorbet,
  JogurtHolunder,
  SchokoVegan,
  HundeEis,
];

let ice_big = [
  Haselnuss,
  JogurtCassis,
  Vanille,
  Kaffe,
  SchokoKeks,
  ErdbeerSorbet,
  BananaSplit,
  Pistazie,
  Schokolade,
  Stratcciatella,
  BuntesKleks,
  Jogurt,
  MangoPassionsFruchtSorbet,
  JogurtErdbeere,
];

// Test
function EisKlein({ searchQuery }) {
  const filteredIceCreams = ice_.filter((ice) =>
    ice.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (filteredIceCreams.length === 0) {
    return <div style={styles.notFound}>Nicht gefunden</div>;
  }
  return filteredIceCreams.map((ice) => (
    <div style={styles.icecreamcard}>
      <Image
        src={getImage(ice.img_name_)}
        alt={ice.name}
        width={300}
        height={200}
      />
      <div style={styles.icecreaminfo}>
        <h3 style={styles.icecreamname}>{ice.name}</h3>
        <p style={styles.availability}>
          Verfügbar: {ice.available ? "Ja" : "Nein"}
        </p>
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
        <Image
          src={getImageGroß(ice.image_name_G)}
          alt={ice.name}
          width={300}
          height={200}
        />
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
          <h1 className="flex center-text text-align: center flex-col text-4xl md:text-4xl font-bold text-gray-900">
            {" "}
            Eisautomat Sersheim
          </h1>
        </div>
      </div>
      <div style={styles.searchBar}>
        <input
          className="Search"
          type="search"
          style={styles.InputSearchStyle}
          value={searchQuerry}
          onChange={handleSearch}
          placeholder="Suchen"
        ></input>
      </div>
      <div style={styles.body}>
        <div style={styles.icecreamgrid}>
          <EisKlein searchQuery={searchQuerry} />
          <EisGroß searchQuery={searchQuerry} />
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
              <a
                className="Link"
                href="https://www.google.com/maps/place/Vaihinger+Stra%C3%9Fe+82,+74372+Sersheim"
              >
                <h2 style={styles.AdresseLink}>
                  Adresse in Google Maps öffnen
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
