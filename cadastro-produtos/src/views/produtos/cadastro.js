import React from 'react'
import ProdutoService from '../../app/produtoService'
import { withRouter } from 'react-router-dom'

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: '',
    sucesso: false,
    errors: []
}

class CadastroProduto extends React.Component {

    state = estadoInicial

    constructor(){
        super()
        this.service = new ProdutoService();
    }

    onChange = (event) => {
        const valor = event.target.value
        const nomeDoCampo = event.target.name

        this.setState({ [nomeDoCampo]: valor })
    }

    onSubmit = (event) => {
        const produto = {
            nome: this.state.nome,
            sku: this.state.sku,
            descricao: this.state.descricao,
            preco: this.state.preco,
            fornecedor: this.state.fornecedor,
            sucesso: false
        }

        try{
            this.service.salvar(produto)
            this.limpaCampos()
            this.setState({ sucesso: true })
        }catch(erro){
            const errors = erro.errors
            this.setState({errors : errors})
        }        
    }

    limpaCampos = () => {
        this.setState(estadoInicial)
    }

    componentDidMount(){
        const sku = this.props.match.params.sku

        if (sku){
            const resultado = this.service.obterProdutos().filter(produto => produto.sku === sku)

            if(resultado.length === 1){
                const produtoEncotrado = resultado[0]
                this.setState({ ...produtoEncotrado })
            }
        }
    }

    render(){
        return(
            <div className="card">
                <div className="card-header">
                    Cadastro de Produto
                </div>
                <div className="card-body">

                    {this.state.sucesso &&
                        <div className="alert alert-dismissible alert-success">
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Registro cadastrado com sucesso!</strong>
                        </div>
                    }       

                    {this.state.errors.length > 0 &&

                        this.state.errors.map(msg => {
                            return (
                                <div className="alert alert-dismissible alert-danger">
                                    <button type="button" className="close" data-dismiss="alert">&times;</button>
                                    <strong>Erro!</strong> {msg}
                                </div>
                            )
                        })
                        
                    }               

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Nome: *</label>
                                <input type="text" 
                                       name="nome" 
                                       value={this.state.nome} 
                                       onChange={this.onChange}
                                       className="form-control" />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>SKU: *</label>
                                <input 
                                    type="text" 
                                    name="sku" 
                                    value={this.state.sku} 
                                    onChange={this.onChange}
                                    className="form-control" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="form-group">
                                <label>Descrição:</label>
                                <textarea 
                                    name="descricao" 
                                    value={this.state.descricao}
                                    onChange={this.onChange}
                                    className="form-control" 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Preço: *</label>
                                <input 
                                    type="text" 
                                    name="preco" 
                                    value={this.state.preco} 
                                    onChange={this.onChange}
                                    className="form-control"
                                />
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="form-group">
                                <label>Fornecedor: *</label>
                                <input 
                                    type="text" 
                                    name="fornecedor" 
                                    value={this.state.fornecedor} 
                                    onChange={this.onChange}
                                    className="form-control" 
                                    />
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-1">
                            <button onClick={this.onSubmit} className="btn btn-success">Salvar</button>
                        </div>

                        <div className="col-md-1">
                            <button onClick={this.limpaCampos} className="btn btn-primary">Limpar</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(CadastroProduto)