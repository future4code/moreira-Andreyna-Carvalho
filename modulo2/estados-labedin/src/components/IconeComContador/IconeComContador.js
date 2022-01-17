import React from 'react'
import './IconeComContador.css'

export function IconeComContador(props) {
	return <div className={'icon-container'}>
		<img className='icone' alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
		<p>{props.valorContador}</p>
	</div>
}
