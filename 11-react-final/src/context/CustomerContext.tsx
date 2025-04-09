import {createContext, useReducer} from "react";
import {ReactNode} from "react";
import {CustomerService} from "../service/CustomerService.tsx";
import {Customer} from "../dto/Customer.tsx";

type CustomerContextType = {
    getAllCustomers: ()=> Promise<Array<Customer>>,
    customerStore: Array<Customer>
}

export const CustomerContext
    = createContext<CustomerContextType | null>(null);

function customerReducer(prevState:Customer[],
                         currentAction: {type: string,
                             customerList: Customer[]}): Customer[]{
    return prevState;
}

export async function getAllCustomers(){
    return await CustomerService.getAllCustomers();
}

export function CustomerProvider({children}:{children:ReactNode}){
    const [customerStore, dispatchFn] =
        useReducer(customerReducer, []);
    return (<CustomerContext value={{getAllCustomers,
        customerStore}}>
        {children}
    </CustomerContext>)
}