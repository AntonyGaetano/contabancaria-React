
import React from "react";
import "./SaldoTotal.css"



export default function SaldoAtual(props){

    var saldoAtual = props.saldoAtual;
    
    props.setSaldoAtual(props.saldoAdicionado-props.saldoRetirado); 


    return(

    <div className="saldo">
      <h2>Olá, seja bem vindo!</h2>
      <h4>Seu saldo atual</h4>
      <p style={{color:"green", backgroundColor:"white", padding:"0.0rem 0.0rem", width:"110px", margin:"0.7rem auto", borderRadius:"6px"}}> {"R$ " + saldoAtual} </p>
    </div>

    )
}
