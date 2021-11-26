import { RESTDataSource } from "apollo-datasource-rest";
import servers from "../server.js";

class AccountAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = servers.account_api_url
    }

    async accounts() {
        return await this.get("/accounts");
    }

    async accountByUsername(username) {
        return await this.get(`/accounts/${username}`);
    }

    async newAccount(body) {
        return await this.post('/accounts', body);
    }

    async updateAccount(data) {
        const { username, ...body } = data;
        return await this.put(`/accounts/${username}`, body);
    }

    async deleteAccount(username) {
        return await this.delete(`/accounts/${username}`);
    }

    async transactionsByUsername(username) {
        return await this.get(`/transactions/${username}`);
    }

    async newTransaction(body) {
        return await this.post('/transactions', body);
    }
}

export default AccountAPI; 