import { Button, ButtonCadastro } from "../../Components/Button"
import { InputField } from "../../Components/InputField";
import { Container, Tittle, ContentForms, Tittle2} from "./style";
import {}
export const Login = () => {

    const handleLogin = () => {
    alert("Login");
    };
    const handleRegister = () => {
    alert("Cadastro");
    };


    return (
    <Container>
            <ContainerTexto>
            <Tittle>Facebook</Tittle>
            <StyledText>Conecte-se com sua conta do Facebook</StyledText>
            </ContainerTexto>
            
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