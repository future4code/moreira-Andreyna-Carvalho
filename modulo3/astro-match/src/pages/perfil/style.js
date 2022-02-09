import styled from 'styled-components';

export const Img = styled.img`
    width: 380px;
    @media (max-width: 768px) {
        width: 280px;
    }
`

export const DivInfo = styled.div`
	text-align: center;
	align-items: center;
	justify-content: center;
	display: flex;
	flex-direction: column;
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
        margin: 40px 80px;
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