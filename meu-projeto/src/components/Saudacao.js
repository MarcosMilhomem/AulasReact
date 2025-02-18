function Saudacao({ nome }) {
    return (
        <>
            {nome && <p>Olá {nome}! Tudo bem?</p>}
        </>
    )
}

export default Saudacao