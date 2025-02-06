import Button from "./evento/Button"
import style from './Evento.module.css'

function Evento() {

    function meuEvento() {
        alert (`Ativando primeiro evento`)
    }
    
    function segundoEvento() {
        alert (`Ativando segundo evento`)
    }

    function asd() {
        alert (`apenas ativei um evento`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <div className={style.container}>
            <Button event={meuEvento} text='Primeiro evento'/>
            <Button event={segundoEvento} text='Segundo evento'/>
            <Button event={asd} text='botão'/>
            </div>
        </div>
    )
}

export default Evento