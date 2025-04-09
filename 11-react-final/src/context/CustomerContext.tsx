import {createContext, ReactNode, useReducer} from "react";
import {CustomerService} from "../service/CustomerService.tsx";
import {Customer} from "../dto/Customer.tsx";

type CustomerContextType = {
    getAllCustomers: () => Promise<void>,
    saveCustomer: (customer: Customer) => Promise<void>,
    deleteCustomer: (id: string) => Promise<void>,
    customerStore: Array<Customer>
}

export const CustomerContext
    = createContext<CustomerContextType | null>(null);

function customerReducer(prevState: Customer[],
                         currentAction: {
                             type: string,
                             customerList: Customer[]
                         }): Customer[] {
    if (currentAction.type === 'set-customers') {
        return currentAction.customerList;
    } else {
        return prevState;
    }
}

export function CustomerProvider({children}: { children: ReactNode }) {
    const [customerStore, dispatchFn] =
        useReducer(customerReducer, []);

    async function getAllCustomers() {
        const customerList =
            await CustomerService.getAllCustomers();
        dispatchFn({type: 'set-customers', customerList})
    }

    async function saveCustomer(customer: Customer) {
        await CustomerService.saveCustomer(customer);
        await getAllCustomers();
    }

    async function deleteCustomer(id: string) {
        await CustomerService.deleteCustomer(id);
        await getAllCustomers();
    }

    return (<CustomerContext value={{
        getAllCustomers,
        saveCustomer,
        deleteCustomer,
        customerStore
    }}>
        {children}
    </CustomerContext>)
}