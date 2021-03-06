import React from "react";
import "./Main.css";

export default function Main(props){

  var total_adicionado = props.saldoAdicionado;
  var total_retirado = props.saldoRetirado;
  

  const Adicionar = () =>{
    var valor = prompt("Quanto irá adicionar ?");

    props.setSaldoAdicionado((e)=>{
     return Number(e) + Number(valor);
    }
    );
     
    AtualizaLocalStorage();
  }

  const Retirar = () =>{
    let valor = prompt("Quanto irá retirar ?");
    
    props.setSaldoRetirado((e)=>{
      return Number(e) + Number(valor);
    }
     );

     AtualizaLocalStorage();
  }

  const AtualizaLocalStorage = () =>{
     
  localStorage.setItem("TotalAdicionado",props.saldoAdicionado);

  localStorage.setItem("TotalRetirado",props.saldoRetirado);

  localStorage.setItem("TotalAtual",props.saldoAtual);
  }


    return(
        <section className="main">
           
           <div className="box-main">
              <span> 
                <label>Total Retirado</label>
                <p style={{color:"red", backgroundColor:"white", padding:"0.1rem 0.1rem" ,borderRadius:"6px" }}>{"R$ " + total_retirado}</p>
              </span>
             
              <span> 
                <label>Total Adicionado</label>
                <p style={{color:"blue", backgroundColor:"white", padding:"0.1rem 0.1rem", borderRadius:"6px"}}>{"R$ " + total_adicionado}</p>
              </span>
           </div>

           <div className="box-main2">
               <h4>No que você está pensando agora?</h4>

                <div> 
                  <button onClick={()=>Adicionar()} >Adicionar</button>
                  <button onClick={()=>Retirar()}>Retirar</button>
                </div>
           </div>
        </section>
    );
}