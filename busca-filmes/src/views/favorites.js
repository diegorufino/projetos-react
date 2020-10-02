import React from "react"
import '../index.css'
import { Link } from "react-router-dom";
import { connect } from 'react-redux'

const Favorites = (props) => {

    const DETAILS = process.env.REACT_APP_PAGE_DETAILS

    const filmes = props.filmesFavoritos;

    return(   
        <>
            <div className="jumbotron">                
                <div className="row">
                    { filmes?
                        filmes.map((e) =>
                        <div className="col-md-2" key={e.imdbID} >
                            <Link to={DETAILS + e.imdbID}> 
                                <img className="img" src={e.Poster} alt={e.Title} />
                            </Link>
                            <p className="mb-0">{e.Title}</p>
                            <p className="mb-0">{e.Year}</p>
                        </div>
                    ): <p>Lista Vazia!</p>}    
                </div> 
            </div>
        </>
    )
}
const mapStateToProps = state => ({
    filmesFavoritos: state.filmes.favoritos
})

export default connect(mapStateToProps) (Favorites);