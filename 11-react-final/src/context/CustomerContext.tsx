import {createContext, useReducer} from "react";
import {ReactNode} from "react";
import {CustomerService} from "../service/CustomerService.tsx";
import {Customer} from "../dto/Customer.tsx";

type CustomerContextType = {
    getAllCustomers: ()=> Promise<void>,
    customerStore: Array<Customer>
}

export const CustomerContext
    = createContext<CustomerContextType | null>(null);

function customerReducer(prevState:Customer[],
                         currentAction: {type: string,
                             customerList: Customer[]}): Customer[]{
    if (currentAction.type === 'set-customers'){
        return currentAction.customerList;
    }else{
        return prevState;
    }
}

export function CustomerProvider({children}:{children:ReactNode}){
    const [customerStore, dispatchFn] =
        useReducer(customerReducer, []);

    async function getAllCustomers(){
        const customerList =
            await CustomerService.getAllCustomers();
        dispatchFn({type: 'set-customers', customerList})
    }

    return (<CustomerContext value={{getAllCustomers,
        customerStore}}>
        {children}
    </CustomerContext>)
}