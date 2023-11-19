
import { Link } from "react-router-dom";
import { Header } from "./StylePrimeira";
import logonimbus from "./logonimbus.png";
import {Logoheader} from "./StylePrimeira";
import {TextoCronos} from "./StylePrimeira";
import {TextoHistorico} from "./StylePrimeira";
import {DivFiltro} from "./StylePrimeira";
import { TextoFiltro } from "./StylePrimeira";
import { Mapa } from "../../Components/mapa";
import Grafico from "../../Components/Grafico";






const Primeiro = () => {
   
    
    

    return (<>
        <Header>
            <TextoCronos class="txtcronos">Cronos <TextoHistorico>Histórico de Dados</TextoHistorico> </TextoCronos>
            <Logoheader src={logonimbus}></Logoheader>
        </Header>
        <DivFiltro>
            <TextoFiltro>Filtro</TextoFiltro>
        </DivFiltro>
            <Mapa class="mapa"></Mapa>
            
            <Grafico></Grafico>
            
            

            
            
</>
    
    );
};

export default Primeiro;