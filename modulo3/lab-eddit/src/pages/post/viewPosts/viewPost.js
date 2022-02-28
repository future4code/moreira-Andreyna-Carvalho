import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IMG_url, Post_url } from '../../../constants/urls';
import { ContainerCard, ContainerInfo, ContainerProfile, ImgPost, ImgProfile, Loading, ParagrafoText } from '../styledPost';
import Gif from '../../../constants/imgs/loading.gif'

import darLike from '../../../constants/imgs/darLike.png'
import Like from '../../../constants/imgs/like.png'

import desLike from '../../../constants/imgs/deslike.png'
import darDesLike from '../../../constants/imgs/darDeslike.png'

import Comentar from '../../../constants/imgs/comentarios.png'
import Compatilhar from '../../../constants/imgs/compartilhar.png'



export default function ViewPost() {
	const navigate = useNavigate();
	const [ infoPost, setInfoPost ] = useState([]);
	const [ info, setInfo] = useState([])
	const [ vote, setVote] = useState(true)

	const getPosts = () => {
		axios.get(Post_url, {
				headers: {
					Authorization: localStorage.getItem('tokenEddit')
				}
			})
			.then((res) => {
				setInfoPost(res.data);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	const getPhotos = () => {
		axios.get(IMG_url)
			.then((res) => {
				setInfo(res.data.hits);
			})
			.catch((err) => {
				console.log(err.response);
			});
	};

	useEffect(() => {
			getPosts();
			getPhotos();
		},[getPosts()]
	);

	const idComments = (id) => {
		localStorage.setItem('idComments', id);
		navigate('/comments-post');
	};

	const postVote = (idVote) => {

	}

	return (
		<div>
			<h1>Todos os Post</h1>
			<div>
				{infoPost && infoPost.length > 0 ? (
					infoPost.map((posts, index) => {
						return (
							<ContainerCard key={posts.id}>
								<ContainerProfile>
									<ImgProfile src={info[index].userImageURL}></ImgProfile>
									<ParagrafoText>{posts.title}</ParagrafoText>
									<p>@{posts.username}</p>
								</ContainerProfile>
								<div>
									<ImgPost src={info[index].largeImageURL}></ImgPost>
									{posts.body}
									</div>
								<ContainerInfo>
									<img src={darLike} alt="dar like" />
									<img src={darDesLike} alt="dar deslike"/>
									<img src={Compatilhar} alt="dar like" />
									<img src={Comentar} alt="dar like" />
									<p>{posts.voteSum}</p>
									<p onClick={() => idComments(posts.id)}>
										Ver todos os {posts.commentCount} comentários
									</p>
								</ContainerInfo>
							</ContainerCard>
						);
					})
				) : ( <div>
					<h1>Aguarde, pois estamos Carregando posts...</h1>
					<Loading src={Gif}></Loading>
					</div>
				)}
			</div>
		</div>
	);
}
