import lodash from "lodash";
import accountResolver from "./account_resolver.js";
import authResolver from "./auth_resolver.js";
import transactionResolver from "./transaction_resolver.js";

const resolvers = lodash.merge(accountResolver, transactionResolver, authResolver);

export default resolvers;