import { RESTDataSource } from "apollo-datasource-rest";
import servers from "../server.js";


class AuthAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = servers.auth_api_url
    }

    async newUser(body) {
        return await this.post('/api/users', body);
    }

    async deleteUser(id) {
        return await this.delete(`/api/users/${id}`);
    }
}

export default AuthAPI;