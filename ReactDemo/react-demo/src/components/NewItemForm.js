import React, { useState } from 'react';

function NewItemForm(props) {


    const [description, SetDescription] = useState(' ');
    const [assigned, SetAssigned] = useState(' ');

    // const descriptionChange = (event) => {

    //     SetDescription(event.target.value);

    // };


    // const assignedChange = (event) => {

    //     SetAssigned(event.target.value);

    // };

    return (
        <div className='mt-5'>
            <form>
                <div className="mb-3">
                    <label className='form-label'>Assigned</label>
                    <input
                        onChange={e => SetAssigned(e.target.value)}
                        value={assigned}
                        type="text" className='form-control' required></input>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input
                        onChange={e => SetDescription(e.target.value)}
                        value={description}
                        type="text" className='form-control' rows={3} required></input>
                </div>

                <button type='button' onClick={() => {
                    if (assigned !== ' ' && description !== ' ')
                        props.addItem(description, assigned)
                }} className='btn btn-primary mt-3'>Add Item</button>
            </form>

        </div>
    )

}

export default NewItemForm