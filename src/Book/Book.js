import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faArrowRight} />

const Book = (props) => {


    const { name, writer, origin, year, worth, img } = props.info
    return (
        <div className="col-md-4">
            <div className="card h-100 shadow-lg p-2 h-100">
                <div className="card-img-top"> <img className="img-fluid" src={img} alt="" /> </div>
                <div className="card-body">
                    <h3>{name}</h3>
                    <h5>Writer: {writer}</h5>
                    <h5>Origin: {origin}</h5>
                    <h5>Year: {year}</h5>
                    <h5>Worth: {worth}</h5>
                    <button
                        onClick={() => props.handleQuantityOfBooks(props.info)}
                        className="my-3 btn btn-danger">
                        Quantity Of Books {element}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Book;