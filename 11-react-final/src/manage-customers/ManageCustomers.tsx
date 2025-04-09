import './ManageCustomers.css';
import {useId} from "react";
import {useForm} from "react-hook-form";

function ManageCustomers() {
    return (
        <div>
            <header className="p-2 px-3 border-bottom">
                <h1>Manage Customers</h1>
                <div>Add, View, Delete Customers</div>
            </header>
            <Form/>
            <Table/>
        </div>

    );
}

export default ManageCustomers;

function Form(){
    const txtId = useId();
    const txtName = useId();
    const {register, handleSubmit} = useForm();

    function saveCustomer(){
        alert("Okay?");
    }

    return (<form className="p-2 px-3"
                  onSubmit={handleSubmit(saveCustomer)}>
        <div className="mb-2">
            <label className="mb-1" htmlFor={txtId}>Customer ID</label>
            <input {...register('txt-id', {
                pattern: /^C\d{3}$/,
                required: true
            })}
                   id={txtId} placeholder="Eg. C001"
                type="text" className="form-control"/>
        </div>
        <div className="mb-3">
            <label className="mb-1" htmlFor={txtName}>Customer Name</label>
            <input {...register('txt-name', {
                pattern: /^[A-Za-z][A-Za-z ]*$/,
                required: true
            })}
                   id={txtName} placeholder="Eg. Kasun Sampath"
                type="text" className="form-control"/>
        </div>
        <div className="d-flex gap-2">
            <button className="btn btn-primary">SAVE</button>
            <button className="btn btn-warning" type="reset">CLEAR</button>
        </div>
    </form>)
}

function Table(){
    return (<div className="p-3">
        <table className="table table-bordered table-hover">
            <thead>
            <tr>
                <th className="text-center"
                    style={{width: '70px'}}>ID</th>
                <th>NAME</th>
                <th className="text-center"
                    style={{width: '70px'}}>DELETE</th>
            </tr>
            </thead>
            <tbody></tbody>
            <tfoot>
                <tr>
                    <td colSpan={3} className="text-center">
                        No Customers Found
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>)
}