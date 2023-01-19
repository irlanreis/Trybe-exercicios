import React from 'react'
import PropTypes from 'prop-types'
import read from '../icons/read.svg'
import unread from '../icons/unread.svg'

function Controls({ markAllAsRead, markAllAsUnread }) {
    return (
        <div className="controls-container">
            <button
                type="button"
                onClick={ markAllAsRead }
            >
                <img src={ read } alt="icon lido" />
                Marcar todas como lida
            </button>


            <button
                type="button"
                onClick={ markAllAsUnread }
            >
                <img src={ unread } alt="icon não lido" />
                Marcar todas como não lida
            </button>


        </div>
    )
}

Controls.propTypes = {
    markAllAsRead: PropTypes.func.isRequired,
    markAllAsUnread: PropTypes.func.isRequired,
}

export default Controls
