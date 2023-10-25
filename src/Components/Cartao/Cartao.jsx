import { CartaoContainer, Titulo } from "./style";

const Cartao = (props) => (
    <CartaoContainer>
        <Titulo>{props.titulo}</Titulo>
        <p></p>
    </CartaoContainer>
)

export default Cartao