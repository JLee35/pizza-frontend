import React, { useState } from 'react';
import styled from "styled-components";
import Button from '@mui/material/Button';

// CSS
const PizzaFrame = styled.div`
    border: solid 1px gray;
    padding: 10px;
    margin: 15px 10px;
    border-radius: 5px;
    box-shadow: 0 0 5px gray;
    font-family: Arial;
`;

const Input = styled.input`
    border: solid 1px black;
    padding: 5px;
    border-radius: 3px;
`;

const Title = styled(Input)`
    text-transform: uppercase;
`;

const Save = styled.button`
    width: 100px;
    margin: 10px;
    background: green;
    color: white;
    font-size: 16px;
    padding: 10px;
    border-radius: 5px;
`;

export const Pizza = ({ pizza }) => {
    const [data, setData] = useState(pizza);
    const [dirty, setDirty] = useState(false);

    function update(value, fieldName, obj) {
        setData({ ...obj, [fieldName]: value });
        setDirty(true);
    }

    function onSave() {
        setDirty(false);

        // Make HTTP PUT request to "/pizza/{id}" endpoint.
        fetch(`/pizza/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    }

    return (<React.Fragment>
        <div>
            <Button variant='contained' onClick={(evt) => alert("click")}>Add new +</Button>
        </div>
        <PizzaFrame>
            <h3>
                <Title onChange={(evt) => update(evt.target.value, 'name', data)} value={data.name} />
            </h3>
            <div>
                <Input onChange={(evt) => update(evt.target.value, 'description', data)} value={data.description} />
            </div>

            {dirty ? <div><Save onClick={onSave}>Save</Save></div> : null}
        </PizzaFrame>
    </React.Fragment >);
}