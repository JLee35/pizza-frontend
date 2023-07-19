import React, { useState, useEffect } from 'react';
import { Pizza } from './Pizza';

const Main = ({ message }) => {
    console.log(message);
    const [pizzas, setPizzas] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        fetch("/pizza")
            .then(response => response.json())
            .then(data => setPizzas(data))
    }

    const data = pizzas.map(pizza => <Pizza pizza={pizza} key={pizza.id} />);

    return (<React.Fragment>
        {pizzas.length === 0 ?
            <div>No pizzas</div> :
            <div>{data}</div>
        }
    </React.Fragment>);
}

export default Main;