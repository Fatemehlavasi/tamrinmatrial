import {createTheme} from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    background: '#fff',
                    '.margin': {
                        margin: 50
                    },
                    'a': {

                    },
                    '#myId': {

                    }
                }
            }
        },
        MuiButton: {
            variants: [
                {
                    props: {variant: 'mainButton'},
                    style: {
                        color: '#fff',
                        backgroundColor: '#50C2C9',
                        borderRadius: '20px',
                        textAlign: 'center',
                        height: 60,
                        width:"100%",
                        '&:hover': {
                            backgroundColor: '#50C2C9',
                        }
                    }
                },
                {
                    props: {variant: 'secondaryButton'},
                    style: {

                    }
                }
            ]
        }
    },
    palette: {
        primary: {
            main: '#50C2C9',
            light: '#94F6FC'
        },
        background: '#EEE'
    },
    typography: {

        fontFamily: 'Poppins',
        h1: {
      
          fontSize: 30,
          color:"#000",
          fontWeight: 900,
          lineHeight: '27px',
          color:'rgba(0, 0, 0, 0.85)'
      },
        h2: {
          fontSize: 20,
          color:"#000",
          fontWeight: 800,
          lineHeight: '18px',
          color: 'rgba(255, 255, 255, 0.85)'
          },
        h3: {
          fontSize: 17,
          fontWeight: 800,
          color:"#000",
          lineHeight: '18px',
          color:'rgba(0, 0, 0, 0.85)'
      },
      title:{
       
        fontSize: 15,
        fontWeight: 400,
        lineHeight: '20px',
        alignItems:"center",
        color:'rgba(0, 0, 0, 0.79)'
      },
      
    },


})