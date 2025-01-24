import PropTypes from 'prop-types'

function Item ({ marca, ano_lançamento }) {
    return (
        <>
            <li>
                {marca} - {ano_lançamento}
            </li>
        </>
    )
}

Item.PropTypes = {
    marca: PropTypes.string
}

export default Item