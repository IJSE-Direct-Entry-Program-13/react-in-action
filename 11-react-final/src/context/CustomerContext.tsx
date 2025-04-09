import {createContext} from "react";
import {ReactNode} from "react";

export const CustomerContext
    = createContext({});

export function CustomerProvider({children}:{children:ReactNode}){
    return (<CustomerContext value={{}}>
        {children}
    </CustomerContext>)
}