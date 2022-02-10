import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { urlChoosePersonagens, urlPersonagens } from '../../components/urls';
import { BioH1, DivClicks, DivInfo, Img, ImgClick, ImgClickMsg, InfoH1, Paragrafo } from './style';

import LikeMetch from '../../components/img/metch.png';
import Like from '../../components/img/metClick.png';
import Deslike from '../../components/img/desmet.png';
import DeslikeMetch from '../../components/img/desmetClick.png';
import Msg from '../../components/img/msg.png';


function Perfils(props) {
	const [ perfil, setPerfil ] = useState({});
	const [ like, setLike ] = useState(0);
	const [ deslike, setDeslike ] = useState(0);

	const getPerfil = () => {
		axios
			.get(urlPersonagens)
			.then((res) => {
				setPerfil(res.data.profile);
			})
			.catch((err) => {
				alert(err.message);
			});
	};

	useEffect(() => {
		getPerfil();
	}, []);

	const deiMatch = () => {
		const body = {
			choice: true,
			id: perfil.id
		};
		axios
			.post(urlChoosePersonagens, body)
			.then((res) => {
				getPerfil();
			})
			.catch((err) => {
				alert(err);
			});

		if (like === 0) {
			setLike(like + 1);
		} else {
			setLike(like - 1);
		}
	};

	const rejeiteiMatch = () => {
		const body = {
			choice: false,
			id: perfil.id
		};
		axios
			.post(urlChoosePersonagens, body)
			.then((res) => {
				getPerfil();
			})
			.catch((err) => {
				alert(err);
			});

		if (deslike === 0) {
			setDeslike(deslike + 1);
		} else {
			setDeslike(deslike - 1);
		}
	};

	let iconsTwo;
	if (deslike === 0) {
		iconsTwo = Deslike;
	} else {
		iconsTwo = DeslikeMetch;
	}
	let icons;
	if (like === 0) {
		icons = Like;
	} else {
		icons = LikeMetch;
	}

	return (
		<div>
			<DivClicks>
				<Paragrafo>Ver match:</Paragrafo>
				<ImgClickMsg src={Msg} onClick={() => props.telaDoMatch()}></ImgClickMsg>
			</DivClicks>
			<DivInfo>
				<Img src={perfil.photo} alt="foto do match" />
				<InfoH1>
					{perfil.name}, {perfil.age}
				</InfoH1>
				<BioH1>{perfil.bio}</BioH1>
			</DivInfo>
			<div>
				<ImgClick src={iconsTwo} onClick={rejeiteiMatch} />
				<ImgClick src={icons} onClick={deiMatch} />
			</div>
		</div>
	);
}

export default Perfils;