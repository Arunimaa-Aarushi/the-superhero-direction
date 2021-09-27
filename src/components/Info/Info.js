import React, { useEffect, useState } from 'react';
import Quantity from '../Quantity/Quantity';
import Book from '../../Book/Book';

const Info = () => {
    const [infos, setInfos] = useState([]);
    const [joined, setJoined] = useState([]);

    useEffect(() => {
        fetch('/info.JSON')
            .then(res => res.json())
            .then(data => setInfos(data))

    }
        , []
    )

    const handleQuantityOfBooks = (info) => {
        const newJoined = [...joined, info];
        setJoined(newJoined);
    }

    return (
        <div className="info-container row" >
            <div className="infos col-md-8">
                <div className="row g-5">

                    {
                        infos.map(info => <Book info={info} key={info.year} handleQuantityOfBooks={
                            handleQuantityOfBooks
                        }></Book>)
                    }
                </div>
            </div>

            <div className="total-data col-md-4">
                <Quantity joined={joined} ></Quantity>
            </div>
        </div>
    );
};

export default Info;
