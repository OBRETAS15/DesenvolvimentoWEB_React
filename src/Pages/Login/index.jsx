import { Button, ButtonCadastro } from "../../Components/Button"
import { InputField } from "../../Components/InputField";
import { Container, Tittle, ContentForms, Tittle2, ContainerText, StyleText} from "./style";

export const Login = () => {

    const handleLogin = () => {
    alert("Login");
    };
    const handleRegister = () => {
    alert("Cadastro");
    };

    return (

    <Container>
        <ContainerText>
        <Tittle>Facebook</Tittle>
            <StyleText>
                O Facebook ajuda você a se conectar e 
                compartilhar com as pessoas que 
                fazem parte da sua vida
            </StyleText>
            </ContainerText>

            
        <ContentForms>
        <InputField propsplaceholder="Email ou Telefone" propstype="email" />

        <InputField propsplaceholder="Senha" propstype="password" />

        <Button title="Entrar" handleFunction={handleLogin} />

        <Tittle2>
            <a href="">Esqueceu a senha?</a>
        </Tittle2>

        <ButtonCadastro title="Criar nova conta" handleFunction={handleRegister} />
        </ContentForms>

    </Container>
    );
};