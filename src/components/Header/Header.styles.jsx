import styled from "styled-components";
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 15px;
    background: rgb(249,245,245);
    padding: 25px 0;
    border-bottom: 1px solid rgb(234, 233, 233) ;
    `

export const TitleContainer = styled(Link)
    `
    margin: 0;
    border-right: 1px solid rgb(183, 180, 180);
    padding-right: 25px;
    color: #252424;
    font-weight: 300;
    font-size: 1.5em;  
    `
export const ProductsCategories = styled.h3`
    margin: 0;
    padding-left: 25px;
    cursor: pointer;
    font-weight: 100;
    color: #4e4d4d; 
    @media (max-width: 768px){
        padding-left: 10px;
    } 
    `

export const FlexDisPlay = styled.div`
    display: flex;
    @media (max-width: 767px){
    display: none
    }
    `
export const AlignCar = styled.div`
    padding-left: 10px;
    @media (max-width: 767px) {
        padding-top: 4px
    }
    `
export const CartView = styled(Link)
    `
    border: 1px solid #908e8e; 
    border-width: 2px; 
    padding: 8px 25px; 
    border-radius: 22px; 
    cursor: pointer; 
    color: #908e8e;
    @media (max-width: 768px){
        font-size: 12px;
    } 
    `
export const MobileMenu = styled.div`
    display: none;
    width: 15%;

    .fas {
        font-size: 24px;
    }
    @media (max-width: 768px){
        display: block
    } 
    `