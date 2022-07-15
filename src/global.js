import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
}

html {
    display: flex;
    justify-content:center ;
    align-items: center;
}

body {
    background-color: #000;
    width: 1440px;
    height:100vh ;
    display: flex;
    justify-content: center;
    align-items: center;

}

:root { 
    --toastify-color-light : #343B41 ; 
    --toastify-text-color-light : #fff ;      

}


`;
