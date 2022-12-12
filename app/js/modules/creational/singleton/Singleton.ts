import { IPattern } from '../../../interfaces/IPattern';

export default class Singleton implements IPattern {
    public main(): void {
        const dbConnection1 = DatabaseConnection.getInstance();
        const dbConnection2 = DatabaseConnection.getInstance();
        const dbConnection3 = DatabaseConnection.getInstance();

        if (dbConnection1 === dbConnection2 && dbConnection2 === dbConnection3) {
            console.log('All 3 instances are the same instance.');
        } else {
            throw new Error('The Singleton is not working properly.');
        }
    }
}

class DatabaseConnection {
    private static instance: DatabaseConnection;

    // eslint-disable-next-line no-useless-constructor, no-empty-function, @typescript-eslint/no-empty-function
    private constructor() {}

    public static getInstance(): DatabaseConnection {
        if (!DatabaseConnection.instance) {
            DatabaseConnection.instance = new DatabaseConnection();
        }

        return DatabaseConnection.instance;
    }

    // usually singleton instances do some business logic
    public doSomeBusinessLogic(): void {
        console.log('...doing some business logic');
    }
}
