import styled from 'styled-components';

import Fundo from '../components/img/fundo.png';

export const Fundao = styled.div`
	background: url(${Fundo}) no-repeat center;
	text-align: center;
    height: 100vh;
	background-size: cover;
	@media (max-width: 768px) {
		overflow-x: hidden;
	}
`;

export const Header = styled.header`
	width: 100%;
`

export const Img = styled.img`
	height: 17vh;
	padding: 10px;
	@media (max-width: 768px) {
		width: 50%;
	}
`;

export const SpanNone = styled.span`display: none;`;
