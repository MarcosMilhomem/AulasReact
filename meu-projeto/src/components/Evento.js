import Button from "./evento/Button"

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
            <Button event={meuEvento} text='Primeiro evento'/>
            <Button event={segundoEvento} text='Segundo evento'/>
            <Button event={asd} text='botão'/>
        </div>
    )
}

export default Evento