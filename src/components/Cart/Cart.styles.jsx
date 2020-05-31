import styled from 'styled-components';

export const CartContainer = styled.div`
    width: 65%;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px auto 0px;
    color: #252424;
    @media (max-width: 599px) {
    width: 85%;
    }
`

export const CartHeader = styled.div`
    display: flex;
    justify-content: space-around;
    border-bottom: solid 1px darkgrey;
    width: 100%;
    padding-bottom: 10px;
    color: #252424;
    @media (max-width: 599px) {
    font-size: 14px;
    }
`

export const CartProducts = styled.div`
    display: flex;
    width: 100%;
    min-height: 100px;
    font-size: 25px;
    align-items: center;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0px;
    justify-content: space-around;
    @media (max-width: 1024px) {
        font-size: 15px;
    }
`
export const ImageCointainer = styled.div`
    width: 23%;
    @media(min-width: 768px){
        width: 14%
    }
    `
export const BackgroundImage = styled.img`
    width: 100%; 
`
export const ProductDescription = styled.span`
    width: 20%;
`
export const ProductQuantity = styled.span`
    display:flex;
    width: 12%;
    cursor: pointer;
    span {
        margin: 0 10px;
    }
    @media (max-width: 800px){
        span {
            margin: 0 5px;
        }
    }
`
export const CartTotal = styled.div`
    float: right;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: auto;

    span {
        padding: 5px;
    }
`
export const ClearCartButton = styled.button `
    background: #f75151;
    border: 1px solid #887f7f;
    width: 60px;
    height: 25px;
    color: #f9f1f1;
    margin: auto;
    border-radius: 6px;
    cursor: pointer;
    outline: none;
    :hover {
        color: #f75151;
        border: 1px solid #f75151;
        background: none
    }
`