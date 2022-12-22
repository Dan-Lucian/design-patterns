import { IPattern } from '../../../interfaces/IPattern';

export default class Adapter implements IPattern {
    public main(): void {
        this._runClient(new Client());
        this._runClient(new LegacyClientAdapter(new LegacyClient()));
    }

    // The client code works with a "Client" interface.
    // The adapter will extend the "Client" and utilize a 3rd party service.
    // The adapter is used when this "Client" interface cannot be modified but
    // we need to somehow integrate some other code/serivce.
    private _runClient(client: Client): void {
        console.log('Data: ', client.getData());
    }
}

class Client {
    public getData(): string {
        return 'normal data';
    }
}

class LegacyClient {
    public getFirstPart(): string {
        return 'legacy';
    }

    public getSecondPart(): string {
        return 'data';
    }
}

class LegacyClientAdapter extends Client {
    private _legacyClient: LegacyClient;

    constructor(legacyClient: LegacyClient) {
        super();
        this._legacyClient = legacyClient;
    }

    // the Client's modified method which will utilize the adaptee
    public getData(): string {
        return `${this._legacyClient.getFirstPart()} ${this._legacyClient.getSecondPart()}`;
    }
}
