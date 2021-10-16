import React from "react"
import "./Login.css"

export default function Login(){

    function mostrarMensagem(){
        alert("O nome do usuário e/ou senha está inválido")
    }



    return(
        <div className="">

            <form className="form">
                <div className="usuario">
                    <input type="texto" name="username" placeholder="Nome do usuário"></input>
                </div>

                <div className="senha">
                    <input type="password" name="senha" placeholder="Senha"></input>
                </div>

                <button className="botao" onClick={() => mostrarMensagem()}>Login</button>

                <p className="esqueceu">Esqueceu a senha? <a target="_blank" href="https://www.google.com">Clique Aqui</a></p>
            
               
            </form>

        </div>
    )

}