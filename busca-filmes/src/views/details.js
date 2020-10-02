import React, {useEffect} from "react"
import { useParams} from "react-router";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { detalhar } from '../store/filmesReducer'

const Details = (props) => {

    let { id } = useParams();

    const detalhes = props.detalhesFilme

    useEffect(() => {  
        props.detalhar(id)
    }, [])

    return(
        <>
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-8">
                        <p className="text-muted"> 
                            {detalhes.Runtime ? detalhes.Runtime : 'Loading'} - {detalhes.Year ? detalhes.Year : 'Loading'} | 
                            <span className="badge badge-danger">*</span> { detalhes.imdbRating ? detalhes.imdbRating : 'Loading'}
                        </p>
                        <h1>{detalhes.Title ? detalhes.Title : 'Loading'}</h1>
                        <p>
                            <small className="text-muted">Idioma: </small>
                            {detalhes.Language ? detalhes.Language : 'Loading'}
                        </p>
                        <p>
                            <small className="text-muted">Prêmios: </small>
                            {detalhes.Awards ? detalhes.Awards : 'Loading'}
                        </p>
                        <p>
                            <small className="text-muted">Produtora: </small>
                            {detalhes.Production ? detalhes.Production : 'Loading'}
                        </p>
                        <p className="text-muted"> SINOPSE </p>
                        <p>{detalhes.Plot ? detalhes.Plot : 'Loading'}</p>
                        <div className="row">
                            <div className="col-md-4">
                                <p className="text-muted">Elenco</p>
                                <p>{detalhes.Actors ? detalhes.Actors : 'Loading'}</p>
                            </div>
                            <div className="col-md-4">
                                <p className="text-muted">Gênero</p>
                                <p>{detalhes.Genre ? detalhes.Genre : 'Loading'}</p>
                            </div>
                            <div className="col-md-4">
                                <p className="text-muted">Direção</p>
                                <p>{detalhes.Director ? detalhes.Director : 'Loading'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        { detalhes.Poster ?
                            <img className="img" src={detalhes.Poster}  alt="Filme 1" />
                        : 'Loading' }
                    </div>              
                </div>
            </div>
        </>
    )
}

const mapStateToProps = state => ({
    detalhesFilme: state.filmes.detalhes
})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ detalhar }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Details);