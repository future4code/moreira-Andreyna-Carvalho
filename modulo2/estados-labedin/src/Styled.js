import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const Img = styled.img `
    height: 50px;
    width: 50px;
    border-radius: 35px;
    margin-right: 20px;
    padding: 5px;
`

export const Lateral = styled.div `
    display: flex;
    flex-direction: row;
`

export const PostContainer = styled.div `
    display: flex;
    flex-direction: column;
    width: 300px;
    border: solid grey 2px;
    margin: 20px 0;
` 

export const ImgPost = styled.img `
    width: 100%;
    height: 300px;
`
export const Icons = styled.img `
    height: 30px;
    width: 30px;
    margin: 0 5px;
    cursor: pointer;
`

export const Laterais = styled.div `
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
`
export const Interacoes = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 10px;
`
export const Button = styled.button `
    height: 25px;
    width: 25px;
    padding: 5px;
    margin: auto;
    cursor: pointer;
`