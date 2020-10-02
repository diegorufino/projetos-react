import React, { useState, useEffect } from "react"
import '../index.css'
import { Link } from "react-router-dom";
import { BsFillHeartFill } from "react-icons/bs";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { listar, addFavoritos } from '../store/filmesReducer'

const Home = (props) => {

    const DETAILS = process.env.REACT_APP_PAGE_DETAILS

    const [busca, setBusca] = useState(props.buscaAtiva ? props.buscaAtiva : '')
    const [favoritos, setFavoritos] = useState(props.filmesFavoritos ? props.filmesFavoritos : [])

    const filmesLista = props.filmesLista;

    props.addFavoritos(favoritos)

    const Favoritos = (id) => {
        favoritos.find(element => element.imdbID === id) ? RemoverFavoritos(id) : AdicionarFavoritos(id)
    }

    const AdicionarFavoritos = (id) => {
        const adicionar = filmesLista.find(element => element.imdbID === id)
        setFavoritos(state => [adicionar, ...state])
    }

    const RemoverFavoritos = (id) => {
        const remover = favoritos.filter(element => element.imdbID !== id)
        setFavoritos(remover)
    }

    useEffect(() => {
        props.listar(busca)
    }, [busca])

    return (
        <>
            <div className="jumbotron">
                <div className="row list">
                    <input
                        type="text"
                        className="form-control"
                        value={busca}
                        placeholder="Pesquisar"
                        onChange={e => setBusca(e.target.value)}
                    />
                </div>

                <div className="row">
                    {filmesLista ?
                        filmesLista.map((f) =>
                            <div className="col-md-2" key={f.imdbID} >
                                <Link to={DETAILS + f.imdbID}>
                                    <img className="img" src={f.Poster} alt={f.Title} />
                                </Link>
                                <button
                                    type="button"
                                    className={favoritos.find(element => element.imdbID === f.imdbID) ? 'btn btn-outline-danger' : 'btn btn-outline-secondary'}
                                    value={f.imdbID}
                                    onClick={e => Favoritos(f.imdbID)}>
                                    <BsFillHeartFill />
                                </button>
                                <p className="mb-0">{f.Title}</p>
                                <p className="mb-0">{f.Year}</p>
                            </div>
                        ) : busca ? <p>Loading</p> : busca == '' ? <p>Pesquise um filme</p> : <p>Filme não encontrado</p>}
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    filmesLista: state.filmes.filmes.Search,
    buscaAtiva: state.filmes.busca,
    filmesFavoritos: state.filmes.favoritos
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ listar, addFavoritos }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home);