import Button from "./evento/Button"

function Evento({ numero }) {

    function meuEvento() {
        console.log(`Opa, fui ativado numero ${numero ++}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento</p>
            <Button event={meuEvento} text='Primeiro evento'/>
        </div>
    )
}

export default Evento