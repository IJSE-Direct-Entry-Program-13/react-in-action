import { Customer } from "../dto/Customer";
import {http} from "../util/HttpClient.tsx";

export class CustomerService {

    static async getAllCustomers(): Promise<Array<Customer>>{
        const response =
            await http.get('/customers');
        return response.data;
    }

    static async saveCustomer(customer: Customer){
        await http.post('/customers', customer);
    }

    static async deleteCustomer(id: string){
        await http.delete(`/customers/${id}`);
    }

}