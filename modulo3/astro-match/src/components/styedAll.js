import styled from 'styled-components';

import Fundo from '../components/img/fundo.png';

export const Fundao = styled.div`
	background: url(${Fundo}) repeat center;
	width: 100%;
	text-align: center;
	padding-bottom: 350px;
	@media (max-width: 768px) {
		overflow-x: hidden;
	}
`;

export const Header = styled.header`width: 100%;`;

export const Img = styled.img`
	height: 30vh;
	@media (max-width: 768px) {
		width: 50%;
	}
`;

export const SpanNone = styled.span`display: none;`;
