/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from 'next/link';
//import styles from "./pageStyle";
import { useState } from "react";
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

// Alles richtig

const getImage = (image_name_) => {
  if (image_name_) {
    // eslint-disable-next-line no-undef
    return require(`/src/pages/pictures/${image_name_}.jpg`);
  } else {
    // eslint-disable-next-line no-undef
    return require('./pictures/DefaultImage.jpg');
  }
};


const getImageGroß = (image_name_G) => {
  if (image_name_G) {
    // eslint-disable-next-line no-undef
    return require(`/src/pages/pictures/${image_name_G}.jpg`);
  } else {
    // eslint-disable-next-line no-undef
    return require(`/src/pages/pictures/DefaultImage.jpg`);
  }
};


const price = { priceSmall: "3.20", priceBig: "4.80" };
const Kaesekuchen = {
  name: "Käsekuchen",
  img_name_: "Kaesekuchen",
};
const BuntesKleks = {
  name: "Buntes-Klecks",
  img_name_: "BuntesKlecksK",
  image_name_G: "BuntesKlecksG",
};
const Cocoloco = {
  name: "Cocoloco",
  img_name_: "DefaultImage",
};
const BananaSplit = {
  name: "Bananen-Split",
  img_name_: "DefaultImage",
  image_name_G: "BananenSplitG",
};
const Haselnuss = {
  name: "Haselnuss",
  img_name_: "HaselnussK",
  image_name_G: "HaselnussG",
};
const Schokolade = {
  name: "Schokolade",
  img_name_: "SchokoK",
  image_name_G: "SchokoG",
};
const Stratcciatella = {
  name: "Stratcciatella",
  img_name_: "StracciatellaK",
  image_name_G: "StratcciatellaG",
};
const JogurtHimbere = {
  name: "Jogurt-Himbere",
  img_name_: "DefaultImage",
};
const JogurtCassis = {
  name: "Jogurt-Cassis",
  img_name_: "Jogurt-Cassis",
  image_name_G: "DefaultImage",
};
const Pistazie = {
  name: "Pistazie",
  img_name_: "PistazieK",
  image_name_G: "PistazieG",
};
const JogurtErdbeere = {
  name: "Jogurt-Erdbeere",
  img_name_: "Jogurt-Erdbeere",
  image_name_G: "Jogurt-ErdbeerG",
};
const SaltetKaramell = {
  name: "Saltet-Karamell",
  img_name_: "Saltet-Karamell",
};
const Vanille = {
  name: "Vanille",
  img_name_: "VanilleK",
  image_name_G: "DefaultImage",
};
const Jogurt = { name: "Jogurt", img_name_: "Jogurt", image_name_G: "JogurtG",};
const Kaffe = {name: "Kaffe",
  img_name_: "Kaffe",
  image_name_G: "DefaultImage",
};
const Kokustraum = {
  name: "Kokustraum",
  img_name_: "DefaultImage",
};
const SchokoKeks = {
  name: "Schoko-Kecks",
  img_name_: "DefaultImage",
  image_name_G: "SchokoKeksG",
};
const MangoPassionsFruchtSorbet = {
  name: "Mango-Passionsfrucht-Sorbet",
  img_name_: "MangoPassionsfrucht-Sorbet",
  image_name_G:"Mango-PassionsFrucht-SorbetG",
};
const ErdbeerSorbet = {
  name: "Erdbeer-Sorbet",
  img_name_: "DefaultImage",
  img_name_G: "DefaultImage",
};
const ZitronenSorbet = {
  name: "Zitronen-Sorbet",
  img_name_: "DefaultImage",
};
const JogurtHolunder = {
  name: "Jogurt-Holunder",
  img_name_: "DefaultImage",
};
const SchokoVegan = {
  name: "Schoko-Vegan",
  img_name_: "Schoko-VeganK",
};
const HundeEis = {
  name: "Hunde-Eis",
  img_name_: "Hunde-Eis",
};
//Styles

const styles = {
  
  priceStyle: {
    color: "#666",
    fontSize: "18px",
    marginBottom: "10px",
  },

  icecreamcard: {
    maxWidth: '78%',
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '0.5rem',
    padding: '1rem',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    alignItems: "center",
  },

  icecreamcardBig: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0.5, 0.5)",
    margin: "20px",
    marginBottom: "40px",
    backgroundColor: "#fef3c7",
    gridAutoRows: '1fr'
  },

  icecreaminfo: {
    color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  marginBottom: "15px",
  textAlign: "center",
  backgroundColor: "#f7f7f7", // added light gray background color
  padding: "10px", // added padding for better spacing
  borderRadius: "10px", // added rounded corners for a more modern look
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)"
  },

  icecreamname: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "center",
    aspectRatio: "aspect-auto",
  },

  availability: {
    color: "#666",
    fontSize: "18px",
    marginBottom: "10px",
  },

  size: {
    color: "#666",
    fontSize: "18px",
    marginBottom: "10px",
  },

  body: {
    padding: "20px",
    minHeight: "100vh",
  },

  icecreamgrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  headerwrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: "15px",
    borderBottom: "1px solid #ddd",
    width: "100vw", // take up full viewport width
    "@media (maxWidth: 68px)": {
      padding: "10px",
    },
  },

  header: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    fontSize: "24px",
    "@media (maxWidth: 768px)": {
      fontSize: "18px",
    },

    "@media (maxWidth: 480px)": {
      fontSize: "14px",
    },

    "@media (maxWidth: 320px)": {
      fontSize: "12px",
    },
  },

  h1Style: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    "@media (maxWidth: 768px)": {
      fontSize: "18px",
    },
    "@media (maxWidth: 480px)": {
      fontSize: "14px",
    },
  },

  h2Style: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
    "@media (maxWidth: 768px)": {
      fontSize: "14px",
    },
    "@media (maxWidth: 480px)": {
      fontSize: "12px",
    },
  },

  InputSearchStyle: {
    position: "sticky",
    top: "50%",
    width: "100%",
    display: "flex",
    border: "2px solid #ccc",
    padding: "10px",
    fontSize: "18px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    ":focus": {
      borderColor: "#aaa",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    },
  },
  FooterBox: {
    color: "black",
    height: "10%",
    position: "relative",
    marginBottom: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7f7f7",
    padding: "20px",
    borderTop: "1px solid #ddd",
    width: "100%",
    maxWidth: "100%",
    boxSizing: "borderBox",
  },

  GoogleMapsWrapper: {
    fontSize: 1,
    position: "relative",
    width: "100%",
    top: "10%",
  },

  loginStyle: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    margin: "20px",
    marginBottom: "40px",
    zIndex: 1,
    justifyContent: "center",
    fontSize: 18,
  },
  formStyle: {
    width: "50%",
    backgroundColor: "grey",
    position: "absolute",
    borderRadius: " 5% 5% 5%",
    alignItems: "center",
  },
  loginInputStyle: {
    position: "relative",
    left: "5%",
    padding: "3%",
    fontSize: "18px",
    borderRadius: "10px",
    marginTop: "10%",
    marginLeft: "5%",
    marginBottom: "10px",
    border: "2px solid #ccc",
    ":focus": {
      borderColor: "#aaa",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
    },
  },
  loginButtonStyle: {
    padding: "13px",
    paddingTop: "5%",
    position: "relative",
    left: "50%",
    top: "100%",
    marginBottom: "10px",
    fontSize: "18px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
    ":hover": {
      backgroundColor: "#3e8e41",
    },
  },
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

// 20:39 22.9.204
/*function EisKlein({ searchQuery }) {
  const filteredIceCreams = ice_.filter((ice) =>
    ice.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (filteredIceCreams.length === 0) {
    return <div style={styles.notFound}>Nicht gefunden</div>;
  }
  return filteredIceCreams.map((ice) => (
    <div key={ice.name} style={styles.icecreamcard}>
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
*/

function EisKlein({ searchQuery }) {
  const filteredIceCreams = ice_.filter((ice) =>
    ice.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (filteredIceCreams.length === 0) {
    return <div style={styles.notFound}>Nicht gefunden</div>;
  }
  return filteredIceCreams.map((ice) => (
    <div key={ice.name} style={styles.icecreamcard}>
      <Image src={getImage(ice.img_name_)} alt={ice.name} width={300} height={200} />
      <div style={styles.icecreaminfo}>
        <h3 style={styles.icecreamname}>{ice.name}</h3>
        <p style={styles.size}>Größe: 150ml</p>
        <p style={styles.priceStyle}>Preis: {price.priceSmall}€</p>
      </div>
    </div>
  ));
}

EisKlein.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

function EisGroß({ searchQuery }) {
  return ice_big
    .filter((ice) => ice.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .map((ice) => (
      <div key={ice.name} style={styles.icecreamcardBig}>
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
EisGroß.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};


export default function Home() {
  const [searchQuerry, setSearchQuerry] = useState("");

  const handleSearch = (e) => {
    setSearchQuerry(e.target.value);
    console.log("Toggle login clicked!");
  };
  return (
    // Name duch Bild ersetzen
    <main className="flex flex-col items-center justify-between p-4">
      <Head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4153577229204032"
     crossOrigin="anonymous"></script>
     <meta name="google-site-verification" content="R_M_5Rj4CBVcXxpEfx5jTQ3s_-y3iP6PC2ybwH5dnG4" />
     <link rel="icon" type="image/x-icon" href="./public/favicon.ico"></link>
     </Head>
      <div style={styles.headerwrapper}>
        <div style={styles.header}>
          <h1 className="flex center-text text-align: center flex-col text-4xl md:text-4xl font-bold text-gray-900">
            Eisautomat Sersheim
          </h1>
        </div>
      </div>
      <div className="middleSection">
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
      </div>
      <div className="Partner" style={styles.PartnerBox}>
        <div className="SignName">Unsere Partner:</div>
        <div className="PartnerName">
          <Link href="https://www.fraeulein-schmid.de/#:~:text=Fr%C3%A4ulein%20Schmid%20bietet%20saisonal%20abgestimmte%20hand-%20und%20hausgemachte%20Produkte%20wie">
            Fräulein Schmied
          </Link>
        </div>
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
                href="https://www.google.com/maps/place/Vaihinger+Stra%C3%9Fe+82,+74372+Sersheim">
                <h2 style={styles.AdresseLink}>
                  Adresse in Google Maps öffnen
                </h2>
              </a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
}
