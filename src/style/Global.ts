import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Montserrat';
  }
  
  body {
    background:${({ theme }) =>
      theme.isDark
        ? '#333'
        : 'linear-gradient(131.34deg, rgb(252, 224, 223) 24.48%, rgb(254, 224, 248) 84.84%, rgb(254, 224, 248) 84.84%)'};
    img {
      height: auto;
      
      max-width: 100%;
    }
   
  }

  #swap-body{
    // background: none;
    // border: 1px solid;

    #swap-currency-input, #swap-currency-output{
      background-color: transparent;
    }
    .container-amounts{
      background-color: rgb(238 234 244 / 70%);
    }
    ${({ theme }) => theme.mediaQueries.sm} {
      background: ${({ theme }) => theme.colors.card};
      border: none;
      .container-amounts{
        background-color: ${({ theme }) => theme.colors.input};
        box-shadow: ${({ theme }) => theme.shadows.inset};
      }
      
    }
  }
  
`

export default GlobalStyle
