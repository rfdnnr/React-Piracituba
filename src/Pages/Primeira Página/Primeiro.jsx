
import { Link } from "react-router-dom";
import { Header } from "./StylePrimeira";
import logonimbus from "./logonimbus.png";
import {Logoheader} from "./StylePrimeira";
import {TextoCronos} from "./StylePrimeira";
import {TextoHistorico} from "./StylePrimeira";





const Primeiro = () => {
   
    
    

    return (<>
        <Header>
            <TextoCronos class="txtcronos">Cronos <TextoHistorico>Histórico de Dados</TextoHistorico> </TextoCronos>
            <Logoheader src={logonimbus}></Logoheader>
            
            
        </Header>
        
    </>
    
    );
};

export default Primeiro;