import ServerType from '../lib/ServerType';

interface Server {
    name: string;
    isRunning: boolean;
    maxRAM: number;
    type: ServerType;
}

export default Server;
