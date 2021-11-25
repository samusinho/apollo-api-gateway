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

    async transactionsByUsername(username) {
        return await this.get(`/transactions/${username}`);
    }
}

export default AccountAPI;