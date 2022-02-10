import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import { urlClear, urlMatchs } from '../../components/urls';

import Msg from '../../components/img/msgClick.png';
import Limpar from '../../components/img/limpar.png';

import { DivClicks, ImgClickMsg, Paragrafo } from '../perfil/style';
import { Container, Dados, Img, LimparMatch, NomeH1 } from './style';
import { Link } from 'react-router-dom';
import { Fundao } from '../../components/styedAll';

function Match(props) {
	const [ arrayMatch, setArrayMatch ] = useState([]);

	const getMatch = () => {
		axios
			.get(urlMatchs)
			.then((res) => {
				setArrayMatch(res.data.matches);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	const limparMatchs = () => {
		axios
			.put(urlClear)
			.then((res) => {
				getMatch();
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	useEffect(() => {
		getMatch();
	}, []);

	return (
		<div>
			<DivClicks>
				<Paragrafo>Dar Match</Paragrafo>
				<Link to="/"><ImgClickMsg src={Msg}></ImgClickMsg></Link>
			</DivClicks>
			<Container>
				{arrayMatch.map((perfil) => {
					return (
						<Dados>
							<Img src={perfil.photo} alt="foto do match" />
							<NomeH1>{perfil.name}</NomeH1>
						</Dados>
					);
				})}			
			</Container>
			<LimparMatch src={Limpar} onClick={limparMatchs}></LimparMatch>
		</div>
	);
}

export default Match;
