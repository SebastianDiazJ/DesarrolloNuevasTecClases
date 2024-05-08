import React from 'react'
import { Box, Container,createThema } from '@mui/material'

const esquemaColores = createThema({
    palette : {
        background: {
            azul : "#fff",
            verde: "#172354"
        },
        text:{
            primary :"#000",
            secondary :"#405012"

        }
    }
})

const login = () => {
    return (
        <ThemeProvider>
            <Container maxWidth="xl" sx={{bgcolor:" background.azul"}}>
            <Box sx={{bgcolor:" background.verde"}}>
            <h1> Sebas </h1>
            </Box>
            </Container>
        </ThemeProvider>
    )
}
