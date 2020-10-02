import React from 'react'
import ProdutoService from '../../app/produtoService'

const estadoInicial = {
    nome: '',
    sku: '',
    descricao: '',
    preco: 0,
    fornecedor: ''
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

        this.service.salvar(produto)
        this.setState({ sucesso: true })
    }

    limpaCampos = () => {
        this.setState(estadoInicial)
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
                        <button type="button" class="close" data-dismiss="alert">&times;</button>
                            <strong>Registro cadastrado com sucesso!</strong>
                        </div>
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

export default CadastroProduto