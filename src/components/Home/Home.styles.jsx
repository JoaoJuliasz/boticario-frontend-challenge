import styled from "styled-components";

export const HomeTitle = styled.h1`
    text-align: center;
    font-weight: 300; 
    `
export const HomeContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media(max-width: 499px) {
        grid-template-columns: none !important;
    }
      
    @media(min-width: 500px) and (max-width: 1023px) {
        grid-template-columns: 1fr 1fr !important;
    }
    `