
import LinkSegundo from "../Components/LinkSegundo";
import LinkGenerico from "../Components/LinkGenerico";

const Primeiro = () => {
    return (<div>
        <h5>Primeiro</h5>
        <LinkSegundo />
        <br></br>
        <LinkGenerico
            texto='Link Genérico'
            endereco='segundo' />
    </div>
    
    );
};

export default Primeiro;