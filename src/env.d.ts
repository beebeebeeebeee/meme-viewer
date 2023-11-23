import {ProcessEnv} from "process";

export {}

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            FOLDER_PATH: string;
        }
    }
}
