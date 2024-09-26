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
  
  export default styles;