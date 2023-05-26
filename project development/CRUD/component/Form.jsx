import { React, useContext, } from 'react';
import { WrapperContext } from "../App";

function Form() {

    const { firstName, setFirstName, lastName, setLastName, city, setCity, setTableData, tableData, isEdit,handleEdit } = useContext(WrapperContext)

    const date = new Date()

    function handleSubmit(e) {
        e.preventDefault()
        const formValue = { id: date.getTime(), firstName, lastName, city };
        setTableData([...tableData, formValue]);

localStorage.setItem(
    "tabledata", JSON.stringify({...tableData, formValue})
)

        setFirstName("")
        setLastName("")
        setCity("")
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 p-3 shadow my-5">
                    <h3 className='text-center'>ADD DATA</h3>
                    <form action="">
                        <div className='mb-3'>
                            <input type="text" placeholder='enter first name' className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='enter last name' className='form-control' value={lastName
                            } onChange={(e) => setLastName(e.target.value)} />
                        </div>
                        <div className='mb-3'>
                            <input type="text" placeholder='enter city' className='form-control' value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        {
                            isEdit ? (
                                <button className='btn btn-warning' onClick={handleEdit}>Edit</button>
                            ) : (
                                <button className='btn btn-primary' onClick={handleSubmit}>Add</button>
                            )
                        }
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form;


// 1.state create
// 2.input > state value
// 3. handle change