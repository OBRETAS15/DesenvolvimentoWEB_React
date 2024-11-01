import { ButtonStyle, ButtonStyle2 } from "./style"


export const Button = ({title, handleFunction}) => {

    return (
        <ButtonStyle onClick={handleFunction}>
        {title}
        </ButtonStyle>
    )
    
}

export const ButtonCadastro = ({title, handleFunction}) => {

    return (
        <ButtonStyle2 onClick={handleFunction}>
        {title}
        </ButtonStyle2>
    )
    
}