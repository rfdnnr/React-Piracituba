
import LinkSegundo from "../Components/LinkSegundo";
import LinkGenerico from "../Components/LinkGenerico/LinkGenerico";
import { Link } from "react-router-dom";

const Primeiro = () => {
    const dados = [
    ["https://www.casasbahia.com.br/","casas bahia"],
    ["https://www.mercadolivre.com.br/","mamarcio"],
    ["https://www.ricardoeletro.com.br/","ricardo eletro"]
    ]

    const elementos = dados.map(
        (item, i) => (
            <LinkGenerico
                key= {item[i]}
                texto={item[1]}
                endereco={item[0]}
            />
        )
    )

    return (<div>
        <h5>Primeiro</h5>
        {elementos}
        <Link to="listagem">Listagem</Link>
    </div>
    
    );
};

export default Primeiro;