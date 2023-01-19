import React from 'react'
import PropTypes from 'prop-types'
import { READ, UNREAD } from '../constants';
import read from '../icons/read.svg';
import unread from '../icons/unread.svg';

function List({ messages, setMessageStatus }) {
  return (
    <ul className="messages-list">
      {messages.map((message) => {
        const messageClass = message.status === READ
          ? "message-read" : "message-unread";

        return (
          <li key={message.id}>
            <p className={`${messageClass}`}>
              { message.title }
            </p>
            <div>
              <button
                type="button"
                title="Marcar como lida"
                id='mensagem'
                onClick={ () => setMessageStatus(message.id, READ) }
              >
                <img src={ read } alt="icon mensagem lida" />
              </button>
              <button
                type="button"
                title="Marcar como não lida"
                onClick={ () => setMessageStatus(message.id, UNREAD) }
              >
                <img src={ unread } alt="icon mensagem não lida" /> 
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

List.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      status: PropTypes.number,
    }),
  ).isRequired,
  setMessageStatus: PropTypes.func.isRequired,
};

export default List;
