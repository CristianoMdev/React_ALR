import React, { Component } from 'react';
import "./estilo.css"
class ListaDeCategorias extends Component {
_hendleEventoInput(e){
    if(e.key == "Enter"){
        console.log("Add categoria")
    }
}
    render() { 
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    <li className="lista-categorias_item">Categorias</li>
                    <li className="lista-categorias_item">Categorias</li>
                    <li className="lista-categorias_item">Categorias</li>
                    <li className="lista-categorias_item">Categorias</li>
                </ul> 
            <input 
            type="text" 
            className="lista-categorias_input" 
            placeholder="Adicionar Categoria"
            onKeyUp={this._hendleEventoInput.bind(this)}
            />
            
            </section>
        );
    }
}
 
export default ListaDeCategorias ;
