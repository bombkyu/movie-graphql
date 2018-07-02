import {People, getById} from "./db";

const resolvers = {
    Query: {
        people:() => People,
        person:(_, args) => getById(args.id)
    }
};

export default resolvers;