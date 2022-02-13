import styled from 'styled-components';

export const Img = styled.img`
    border-radius: 10px;
    width: 320px;
    height: 320px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    @media (max-width: 768px) {
        width: 280px;
    }
`

export const DivInfo = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
    width: 60%;
    margin: 0 auto;
    height: 100px;@media (max-width: 768px) {
        width: 90%;
    }
`

export const InfoH1 = styled.h1`
	font-size: 32px;
    color: white;
    text-shadow: 0.5px 1px 1px white;
    width: 40%;
    margin: 17px;
`
export const BioH1 = styled.h1`
    font-size: 22px;
    color: #ff9100;
    width: 60%;
    align-items: center;
    justify-content: center;
    display: flex;
    background: purple;
    padding: 15px;
`

export const ImgClick = styled.img`
    width: 120px;
    cursor: pointer;
    margin: 40px 180px;
    @media (max-width: 768px) {
        width: 120px;
        cursor: pointer;
        margin: 540px 20px;
    }
`
export const ImgClickMsg = styled.img`
    width: 50px;
`
export const Paragrafo = styled.p`
    color: white;
`
export const DivClicks = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: right;
    width: 70%;
    cursor: pointer;
`