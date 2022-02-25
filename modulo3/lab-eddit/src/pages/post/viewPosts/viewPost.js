import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IMG_url, Post_url } from '../../../constants/urls';
import { ImgProfile, Loading } from '../styledPost';
import Gif from '../../../constants/imgs/loading.gif'

export default function ViewPost() {
	const navigate = useNavigate();
	const [ infoPost, setInfoPost ] = useState([]);
	const [ infoProfile, setInfoProfile ] = useState({});

	const getPosts = () => {
		axios
			.get(Post_url, {
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

	const viewProfile = () => {
		axios
			.get(IMG_url)
			.then((res) => {
        setInfoProfile(res.data.profile);
			})
			.catch((err) => {
				console.log('não deu certo', err.response);
			});
	};

	useEffect(() => {
			getPosts();
      viewProfile();
		},[getPosts()]
	);

	const idComments = (id) => {
		localStorage.setItem('idComments', id);
		navigate('/comments-post');
	};

	return (
		<div>
			<h1>Todos os Post</h1>
			<div>
				{infoPost && infoPost.length > 0 ? (
					infoPost.map((posts) => {
						return (
							<div key={posts.id}>
								<div>
								<ImgProfile src={infoProfile.photo} href="Anonimo"></ImgProfile>
									<p>{posts.username}</p>
									<p>{posts.title}</p>
								</div>
								<div>
									{posts.body}
									</div>
								<div>
									<p>{posts.voteSum}</p>
									<p onClick={() => idComments(posts.id)}>
										{' '}
										Ver todos os {posts.commentCount} comentários
									</p>
								</div>
							</div>
						);
					})
				) : ( <div>
					<h1>Carregando posts...</h1>
					<Loading src={Gif}></Loading>
					</div>
				)}
			</div>
		</div>
	);
}
