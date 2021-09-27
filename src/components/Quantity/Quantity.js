import React from 'react';

const Quantity = (props) => {
    const { joined } = props;
    let total = 0;
    for (const books of joined) {
        total = total + books.worth;
    }

    return (
        <div className="bg-dark text-light p-4 border rounded" >
            <div>
                <h3>Books Selected for Selling : {props.joined.length}</h3>
                <h3> Total Cost of Books : {total}$</h3>
            </div>
            <h5 className="my-5">Books which are available :</h5>
            {
                joined.map(member => <li className="fs-3">{member.name}
                </li>)
            }
        </div>
    );
};


export default Quantity;