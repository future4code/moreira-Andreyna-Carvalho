import React, { useEffect, useState } from "react";
import axios from "axios";
import { Auth, BASE_URL, Post_url } from "../../../constants/urls";
import { ContainerProfile, DivCreateComments, H1, ButtonRemove } from "../styledComments";
import { ContainerCard, ImgCards, Loading } from "../../post/styledPost";
import Gif from '../../../constants/imgs/loading.gif';
import ToastAnimated, { showToast } from '../../ui-lib';

import darLike from '../../../constants/imgs/darLike.png';
import Like from '../../../constants/imgs/like.png';

import desLike from '../../../constants/imgs/deslike.png';
import darDesLike from '../../../constants/imgs/darDeslike.png';

export default function ViewsComments() {
  const [ infoDetailPost, setInfoDetailPost] = useState([])

  let idComments = localStorage.getItem('idComments')
  console.log(infoDetailPost);

  const getCommentsId = () => {
    axios.get(`${Post_url}/${idComments}/comments`, {
			headers: {
				Authorization: localStorage.getItem('tokenEddit')
			}
		})
    .then((res) => {
      setInfoDetailPost(res.data);
      postVoteLike()
      postVoteDeslike()
      deletVote();
    })
    .catch((err) => {
  })
  }

  const postVoteLike = (idVote) => {
		const body = {
			direction: 1,
		}
		axios.post(`${BASE_URL}/comments/${idVote}/votes`, body, {
			headers: {
				Authorization: localStorage.getItem('tokenEddit')
			}
		})
		.then((res) => {
			showToast({ type: "success", message: "Você adicionou + 1 like ao post" });

		})
		.catch((err) => {
			console.log(err.response)
		})
	};
	const postVoteDeslike = (idVote) => {
		const body = {
			direction: -1,
		}
		axios.post(`${BASE_URL}/comments/${idVote}/votes`, body, {
			headers: {
				Authorization: localStorage.getItem('tokenEddit')
			}
		})
		.then((res) => {
			showToast({ type: "success", message: "Você deu -1 like ao post" });
		})
		.catch((err) => {
		})
	};

	const deletVote = (idVote) => {
		axios.delete(`${BASE_URL}/comments/${idVote}/`, {
			headers: {
				Authorization: localStorage.getItem('tokenEddit')
			}
		})
    .then((res) => {
			showToast({ type: "success", message: "Você deletou sua interação para adicionar novamente clique duas vezes no like ou deslike" });
    })
    .catch((err) => {
    })
  }

  useEffect(() => {
    getCommentsId();
  }, [getCommentsId()])

  return (
    <DivCreateComments>
      <H1>Todos os comentários</H1>
      <ToastAnimated/>
      {infoDetailPost && infoDetailPost.length > 0 ? infoDetailPost.map((posts) => {
          return <ContainerCard key={posts.id}>
            <ContainerProfile>
                <p>por: {posts.username}</p>
                <p>{posts.body}</p>
                <p>{posts.voteSum}</p>
                <ContainerProfile>
                <p>{posts.voteSum && posts.voteSum.length >= 1 ? <p>curtidas: {posts.voteSum}</p> : <p>curtidas: 0</p>}</p>
								<ImgCards onClick={() => postVoteLike(posts.id)} src={posts.userVote === 1 ? Like : darLike} alt="dar like" />
								<ImgCards onClick={() => postVoteDeslike(posts.id)} src={posts.userVote === -1 ? desLike : darDesLike} alt="dar like" />
								<ButtonRemove onClick={() => deletVote(posts.id)}>Zerar meu votos</ButtonRemove>
                </ContainerProfile>
             </ContainerProfile>
            </ContainerCard>
        }) :(
          <div>
            <h1>Aguarde, pois estamos Carregando os comentários...</h1>
            <Loading src={Gif} />
          </div>
        )}
    </DivCreateComments>
  );
}