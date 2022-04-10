import React, { Fragment, useState} from "react";
const initialState = {
    name: ''
}

const Form = (props) => {

    const [fields, setFields] = useState(initialState);

<<<<<<< HEAD
    const handleFieldsChange = (e) => setFields({...fields,[e.currentTarget.name]: e.currentTarget.value});
=======
    const handleFieldsChange = (e) => setFields({
        ...fields,
        [e.currentTarget.name]: e.currentTarget.value
    });
>>>>>>> ad577a5550bf3ce249ca411d40bb8bbb2519552e
    
    const handleSubmit = event => {
        props.addSatellites(fields);
        event.preventDefault();
        setFields(initialState);
    }


    return(
        <Fragment>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input id="name" type="text" name="name"  value={fields.name} onChange={handleFieldsChange}/>
                </div>
                <br />
                <input type="submit" />
            </form>
        </Fragment>
    )
}

export default Form;