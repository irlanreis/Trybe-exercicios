import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PokeUnite extends Component {
    render() {

        const { guereiro } = this.props
        const { name, type, averageWeigth, image } = guereiro;

        return (
            <li className='pokemon'>
                <div>
                    <p>{name}</p>
                    <p>{type}</p>
                    <p>
                        Average Weigth:
                        <span>
                            {` ${ averageWeigth.value } ${ averageWeigth.measurementUnit }`}
                        </span>
                    </p>
                </div>
                <img src={ image } alt={ `${ name }` } />
            </li>
        )
    }
}

PokeUnite.propTypes = {
    guereiro: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        type: PropTypes.string,
        averageWeigth: PropTypes.shape({
            value: PropTypes.number,
            measurementUnit: PropTypes.string,
        }),
        image: PropTypes.string,
        moreInfo: PropTypes.string,
    }).isRequired,
};

export default PokeUnite;