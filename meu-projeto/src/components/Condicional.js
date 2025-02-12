import { useState } from "react"

function Condicional() {

    const [email, setEmail] = useState("")
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e) {    
        e.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail()
        setEmail(' ') 
    }

    return(
        <div>
            <h2>Cadastre o seu email</h2>
            <form>
                <h2>Verifique se o email está correto:</h2>
                <p>{email}</p>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é: <strong>{userEmail}</strong></p>
                        <button onClick={limparEmail}>Limpar Email</button> 
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional