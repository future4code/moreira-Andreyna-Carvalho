import styled from 'styled-components'

export const MainContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
export const Img = styled.img `
    height: 40px;
    width: 40px;
    border-radius: 35px;
    margin-right: 20px;
`

export const Lateral = styled.div `
    display: flex;
    flex-direction: row;
`

export const PostContainer = styled.div `
    display: flex;
    flex-direction: column;
    max-width: 300px;
    border: solid grey 2px;
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