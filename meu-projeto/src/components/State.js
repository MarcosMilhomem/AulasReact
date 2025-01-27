import React, { useState } from 'react';

function State() {
    const [conta, setConta] = useState(0)
    return (
        <div>
            <p>A cada clique o número {conta} aumenta</p>
            <button onClick={() => setConta(conta + 1)}>Clique para adicionar</button>
            <button onClick={() => setConta(conta  == 0)}>Clique para zerar</button>
        </div>
    )
}

export default State