
import { Link } from "react-router-dom";
import { Header, Selects } from "./StylePrimeira";
import logonimbus from "./logonimbus.png";
import {Logoheader} from "./StylePrimeira";
import {TextoCronos} from "./StylePrimeira";
import {TextoHistorico} from "./StylePrimeira";
import {DivFiltro} from "./StylePrimeira";
import { TextoFiltro } from "./StylePrimeira";
import { Mapa } from "../../Components/mapa";
import Grafico from "../../Components/Grafico";
import { DivElementosFiltro } from "./StylePrimeira";
import { Selectss } from "./StylePrimeira";
import { DivBotoes } from "./StylePrimeira";
import { Botao } from "./StylePrimeira";


const Primeiro = () => {
   
    
    

    return (<>
        <Header>
            <TextoCronos class="txtcronos">Cronos <TextoHistorico>Histórico de Dados</TextoHistorico> </TextoCronos>
            <Logoheader src={logonimbus}></Logoheader>
            
            <Link to="SobreNos">
          <button>Navigate to SobreNos</button>
        </Link>
        </Header>
        <DivFiltro>
            <TextoFiltro>Filtro</TextoFiltro>
            <DivElementosFiltro>
            <p>Início:</p>
            <Selects>
                <option value="">17/08/2023  00:00</option>
            </Selects>
            <p>Fim:</p>
            <Selects>
                <option value="">21/08/2023  12:00</option>
            </Selects>
            <p>Variáveis:</p>
            <Selects>
                <option value="">Selecionado: 10 itens</option>
            </Selects>
            <p>Frequência:</p>
            <Selects>
                <option value="">Selecionado: 10 itens</option>
            </Selects>
            <p>Operação:</p>
            <Selects>
                <option value="">Selecionado: 10 itens</option>
            </Selects>
            <p>Estação:</p>
            <Selects>
                <option value="">Copacabana</option>
            </Selects>
            <p>Ponto de Monitoramento:</p>
            <Selects>
                <option value="">Copacabana</option>
            </Selects>
            
            </DivElementosFiltro>

            <DivBotoes>
            <Botao>Gerar Relatório</Botao>
            <Botao>Pesquisar</Botao>
            </DivBotoes>

        </DivFiltro>
            <Grafico></Grafico>
            <Mapa class="mapa"></Mapa>
            
            
            
            

            
            
</>
    
    );
};

export default Primeiro;