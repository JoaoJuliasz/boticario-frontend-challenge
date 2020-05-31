import styled from 'styled-components';

const whiteColor = '#fff';
const blackColor = '#000';

export const ProductContainer = styled.div`
    border: 1px solid #000;
    margin: 10px auto;
    padding: 35px;
    text-align: center;
    cursor: pointer;
    width: 200px;
    height: 350px;
    position: relative;
    h4 {
        font-size: 20px;
    }
    h5 {
        font-size: 20px;
        position: absolute;
        bottom: 55px;
        left: 0;
        right: 0;
    }
    :hover {
        opacity: 0.8;
    button {
        opacity: 0.85;
    }
    }
    `
export const CustomButton = styled.button`      
     min-width: 165px;
      width: auto;
      height: 50px;
      left: 0;
      right: 0;
      margin: auto;
      position: absolute;
      bottom: 10px;
      letter-spacing: 0.5px;
      line-height: 50px;
      padding: 0 35px 0 35px;
      font-size: 15px;
      background-color: ${blackColor};
      color: ${whiteColor};
      text-transform: uppercase;
      font-family: 'Open Sans Condensed';
      font-weight: bolder;
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      outline: none;
      :hover {
        background-color: ${whiteColor};
        color: ${blackColor};
        border: 1px solid ${blackColor};
    }
    `
export const BackgroundImage = styled.img`
    width: 150px; 
    `