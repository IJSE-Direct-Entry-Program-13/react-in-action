import './ManageCustomers.css';
import {useEffect, useId} from "react";
import {useForm} from "react-hook-form";
import {Customer} from "../../dto/Customer.tsx";
import {useCustomer} from "../../hook/use-customer.tsx";

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

function Form() {
    const txtId = useId();
    const txtName = useId();
    const {
        register, getValues, handleSubmit, reset, setFocus,
        formState: {isSubmitted, errors}
    } =
        useForm();
    const {saveCustomer} = useCustomer();

    async function save() {
        try {
            await saveCustomer((getValues() as Customer));
            reset();
            setFocus('id');
        } catch (err) {
            alert("Failed to save the customer, try again");
            console.error(err);
        }
    }

    return (<form className="p-2 px-3"
                  onSubmit={handleSubmit(save)}>
        <div className="mb-2">
            <label className="mb-1" htmlFor={txtId}>Customer ID</label>
            <input {...register('id', {
                pattern: /^C\d{3}$/,
                required: true
            })}
                   id={txtId} placeholder="Eg. C001"
                   type="text"
                   className={['form-control',
                       isSubmitted && errors.id ? 'is-invalid' : ''
                   ].join(' ')}/>
        </div>
        <div className="mb-3">
            <label className="mb-1" htmlFor={txtName}>Customer Name</label>
            <input {...register('name', {
                pattern: /^[A-Za-z][A-Za-z ]*$/,
                required: true
            })}
                   id={txtName} placeholder="Eg. Kasun Sampath"
                   type="text"
                   className={['form-control',
                       isSubmitted && errors.name ? 'is-invalid' : ''
                   ].join(' ')}
            />
        </div>
        <div className="d-flex gap-2">
            <button className="btn btn-primary">SAVE</button>
            <button onClick={() => reset()} className="btn btn-warning" type="reset">CLEAR</button>
        </div>
    </form>)
}

function Table() {

    const {customerStore: customerList, getAllCustomers, deleteCustomer}
        = useCustomer();

    useEffect(() => {
        getAllCustomers();
    }, []);

    return (<div className="p-3">
        <table className="table table-bordered table-hover">
            <thead>
            <tr>
                <th className="text-center"
                    style={{width: '70px'}}>ID
                </th>
                <th>NAME</th>
                <th className="text-center"
                    style={{width: '70px'}}>DELETE
                </th>
            </tr>
            </thead>
            <tbody>
            {customerList.map(customer => (<tr
                key={customer.id}>
                <td className="text-center">{customer.id}</td>
                <td>{customer.name}</td>
                <td className="text-center">
                    <i onClick={() => {
                        deleteCustomer(customer.id)
                    }} className='table__trash fs-5 bi-trash'></i>
                </td>
            </tr>))}
            </tbody>
            {!customerList.length &&
                <tfoot>
                <tr>
                    <td colSpan={3} className="text-center">
                        No Customers Found
                    </td>
                </tr>
                </tfoot>
            }
        </table>
    </div>)
}