import { v4 as uuidV4 } from "uuid";

class User {
    name: string;
    email: string;
    updated_at: Date;
    created_at: Date;
    id?: string;
    admin?: boolean;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
            this.admin = false;
        }
    }
}

export { User };
