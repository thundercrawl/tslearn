export declare function disp(name: string | string[]): void;
export interface IPerson {
    firstName: string;
    lastName: string;
    sayHi: () => string;
    (name: string, gender: string): any;
}
