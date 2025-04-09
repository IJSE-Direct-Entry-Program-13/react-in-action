import {useContext} from "react";
import {CustomerContext} from "../context/CustomerContext.tsx";

export function useCustomer(){
    return useContext(CustomerContext)!;
}