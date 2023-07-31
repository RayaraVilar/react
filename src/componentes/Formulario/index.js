import CampoTexto from "../CampoTexto/CampoTexto"
import "./Formulario.css"

const Formulario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <CampoTexto label="Nome" placeholder="Digite o seu nome"/>
                <CampoTexto label="Cargo" placeholder='Qual o seu cargo'/>
                <CampoTexto label="Imagem" placeholder='Qual o endereço da imagem'/>
            </form>
        </section>
    )
}

export default Formulario