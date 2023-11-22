import { Link } from "react-router-dom";
import { DivSB } from "./Primeira Página/StylePrimeira";
import Filipe from "./Primeira Página/Filipe.jpg";
import Rafael from "./Primeira Página/Rafael.jpg";
import Gabriel from "./Primeira Página/Gabriel.jpg";
import GabrielP from "./Primeira Página/GabrielP.jpg";

const SobreNos = () => {
   
    
    

    return (<>
            <DivSB>
            <h1>Sobre Nós</h1>
            <p>Fazemos parte do grupo Piracituba da Serra e somos formados por integrantes que são, por grande parte, do segundo período da faculdade IBMEC. Em parceria com a empresa de metereologia Nimbus, tivemos a honra de entender melhor o entendimento e o processo da realização de um projeto profissional.
            </p>
            <div>Integrantes:</div><br></br>
            <strong>Rafael Donner</strong><br></br>
            <img src={Rafael}></img>
            <strong>Gabriel Perrota</strong><br></br>
            <img src={GabrielP}></img>
            <strong>Gabriel Monteiro</strong><br></br>
            <img src={Gabriel}></img>
            <strong>Filipe Gama</strong><br></br>
            <img src={Filipe}></img>
            <br></br>
            <a href='https://github.com/rfdnnr/Piracituba.git'>Nosso repositório de documentação no Git-Hub</a>
            </DivSB>
            
            

            
            
</>
    
    );
};


export default SobreNos
