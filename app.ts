// Union Types
// function logId(id: number | string | boolean) {
//     console.log(id);
// }
//
// logId(1);
// logId("1");
// logId(true);
//
// // Literal Types
// function fetchWithAuth(url: string, method: "GET" | "POST") {
//     console.log(url, method);
// }
//
// fetchWithAuth("https://example.com", "GET");
// fetchWithAuth("https://example.com", "POST");
//
// // Type Aliases
// type httpMethod = "GET" | "POST" | "PUT" | "DELETE";
//
// type User = {
//     name: string,
//     age: number
//     skills: string[]
// }
//
// type Role = {
//     id: number
// }
//
// type UserWithRole = User & Role;
//
// let user: UserWithRole = {
//     id: 1,
//     name: "John",
//     age: 30,
//     skills: ["HTML", "CSS", "JS"]
// }
//
//
// // Interfaces
// interface User2 {
//     name: string,
//     age: number
//     skills: string[]
// }
//
// interface UserWithRole2 extends User2 {
//     roleId: number
// }
//
// let user2: UserWithRole2 = {
//     roleId: 1,
//     name: "John",
//     age: 30,
//     skills: ["HTML", "CSS", "JS"]
// }
//
// // Interfaces vs Type Aliases
// interface axiosRequest {
//     url: string,
//     method: httpMethod,
//     data?: any,
// }
//
// interface axiosRequest {
//     headers?: any
// }
//
// type ID = number | string;
//
// interface IDI {
//     ID: string | number
// }
//
// // Optional
// interface User3 {
//     login: string,
//     password?: string
// }
//
// const user3: User3 = {
//     login: "John"
// }
//
// // Void
// function log(message: string): void {
//     console.log(message);
// }
//
// // Unknown Испльзуется чаще всего при типизации ошибок
// // async function fetchData() {
// //     try {
// //         const response = await fetch("https://example.com");
// //         const data = await response.json();
// //         return data;
// //     } catch (error) {
// //         if (error instanceof Error) {
// //             console.error(e);
// //         }
// //     }
// // }
// //
// // fetchData()
//
// // Never - никогда не возвращает ничего
// function generateError(message: string): never {
//     throw new Error(message);
// }
//
// function dummpError(): never {
//     while (true) {
//     }
// }
//
// // Null
// let a: null = null;
//
// // type conversion
//
// let a1: number = 5;
// let b: string = a1.toString();
// let e: string = new String(a1).valueOf();
// let f: boolean = new Boolean(a).valueOf();
//
// let c = 'sdsd';
// let d: number = parseInt(c);
//
// interface UserNull {
//     name: string,
//     email: string,
//     login: string,
// }
//
// const user1: UserNull = {
//     name: "Vasya",
//     email: "vasya@mail.ru",
//     login: "vasya",
// }
//
// // const user = {
// //     name: "Vasya",
// //     email: "vasya@mail.ru",
// //     login: "vasya",
// // } as UserNull;
// //
// // const user = <UserNull> {
// //     name: "Vasya",
// //     email: "vasya@mail.ru",
// //     login: "vasya",
// // }
// // All these 3 options work the same
//
// interface Admin {
//     name: string,
//     role: number,
// }
//
// const admin: Admin = {
//     ...user1,
//     role: 1
// }
//
// function userToAdmin(user: User): Admin {
//     return {
//         name: user.name,
//         role: 1
//     }
// }
//
// // Type Guards
//
// function isString(value: any): value is string {
//     return typeof value === "string";
// }
//
// function isNumber(value: any): value is number {
//     return typeof value === "number";
// }
//
// // function isSuccess(res: Response): res is SuccessResponse {
// //     return res.status === 200;
// // }
//
//
// // Assert
//
// interface UserAssert {
//     name: string;
// }
//
// const responseAssert = {};
// AssertUser(responseAssert);
// responseAssert.name = "John";
//
// function AssertUser(obj: unknown): asserts obj is UserAssert {
//     if (typeof obj === 'object' && !!obj && 'name' in obj) {
//         return;
//     }
//     throw new Error('Invalid user');
// }
//
//
// // Class
//
// class UserClass {
//     name: string;
//
//     constructor(name: string) {
//         this.name = name;
//     }
// }
//
// const user3 = new UserClass("John");
//
// console.log(user3)
//
// class Admin {
//     role!: number;
// }
//
// const admin123 = new Admin();
// admin123.role = 1;

// class User {
//     name: string;
//     age: number;
//
//     constructor();
//     constructor(name: string);
//     constructor(age: number);
//     constructor(name: string, age: number);
//     constructor(ageOrName?: string | number, age?: number) {
//         if (typeof ageOrName === "string") {
//             this.name = ageOrName;
//         } else if (typeof ageOrName === "number") {
//             this.age = ageOrName;
//         }
//         if (typeof age === "number") {
//             this.age = age;
//         }
//     }
// }
//
// const user = new User('Вася');
// const user2 = new User();
// const user3 = new User(33);
// const user4 = new User('Вася', 33);


// enum PaymentStatus {
//     Holded, Precesssed, Reversed
// }
//
// class Payment {
//     id: number;
//     status: PaymentStatus;
//     createdAt: Date;
//     updatedAt: Date;
//
//     constructor(id: number) {
//         this.id = id;
//         this.createdAt = new Date();
//         this.status = PaymentStatus.Holded;
//     }
//
//     getPaymentLifeTime(): number {
//         return new Date().getTime() - this.createdAt.getTime();
//     }
//
//     unholdPayment(): void {
//         if (this.status === PaymentStatus.Precesssed) {
//             throw new Error("Payment already processed");
//         }
//         this.status = PaymentStatus.Reversed;
//         this.updatedAt = new Date();
//     }
// }
//
// const payment = new Payment(1);
// const time = payment.getPaymentLifeTime();
// console.log(time);


// class User {
//     _login: string;
//     password: string;
//
//     set login(l: string | number){
//         this._login = 'user' + l;
//     }
//     get login() {
//         return this._login;
//     }
//     // getLogin(l: string) {
//     //     this.login = 'user' + l;
//     // }
// }
//
// const user = new User();
// user.login = "John";

// interface ILogger {
//     log(...args): void;
//     error(...args): void;
// }
//
// class Logger implements ILogger {
//     log(...args: any[]): void  {
//         console.log(...args);
//     }
//
//     error(...args: any[]): void {
//         console.error(...args);
//     }
// }
// type PaymentStatus = 'new' | 'paid' | 'canceled';
//
// class Payment {
//     id: number;
//     status: PaymentStatus = 'new';
//
//     constructor(id: number) {
//         this.id = id;
//     }
//
//     pay() {
//         this.status = 'paid';
//     }
// }
//
// class ParsistedPayment extends Payment {
//     databaseId: number;
//     paidAt: Date;
//
//     constructor(id: number) {
//         super(id);
//         this.databaseId = id;
//         this.paidAt = new Date();
//     }
// }

// class User {
//     name: string = "user";
//
//     constructor() {
//         console.log(this.name)
//     }
// }
//
// class Admin extends User {
//     name: string = "admin";
//     constructor() {
//         super();
//         console.log(this.name);
//     }
// }

// class UserService {
//     private static db: any;
//
//     static getUser(id: number) {
//         return this.db.find(id);
//     }
// }

// class Payment {
//     private date: Date = new Date();
//
//     getDate() {
//         return this.date;
//     }
// }
//
// const p = new Payment();
// console.log(p.getDate());

// abstract class Controller {
//     abstract handle(req: any): void;
// }

// const arr: Array<number> = [1, 2, 3];
//
// async function test() {
//     const a = await new Promise<number>((resolve, reject) => {
//         resolve(1);
//     })
// };
//
// const check: Record<number, boolean> = {
//     1: true,
//     2: false
// };
//
//
// function getSplitedHalf<T>(data: Array<T>): Array<T> {
//     const l = data.length / 2;
//     return data.splice(0, l);
// };

// function toString<T>(data: T): string | undefined {
//     if (Array.isArray(data)) {
//         return data.toString()
//     }
//     switch (typeof data) {
//         case 'string':
//             return data;
//         case "number":
//         case "symbol":
//         case "bigint":
//         case "boolean":
//         case "function":
//             return data.toString();
//         case 'object':
//             return JSON.stringify(data);
//         default:
//         case "undefined":
//     }
// };

// const data = [
//     {id: 1, name: 'Vasya #1'},
//     {id: 3, name: 'Vasya #3'},
//     {id: 2, name: 'Vasya #2'},
// ]
//
// interface ID {
//     id: number;
// }
//
// function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
//     return data.sort((a, b) => {
//         switch (type) {
//             case 'asc':
//                 return a.id - b.id;
//             case 'desc':
//                 return b.id - a.id;
//         }
//     })
// }


// class Resp<D, E> {
//     data?: D;
//     error?: E;
//
//     constructor(data?: D, error?: E) {
//         if (data) {
//             this.data = data;
//         }
//         if (error) {
//             this.error = error;
//         }
//     }
// }
//
// const res = new Resp<string, number>('data');
//
// class HTTPResp<F> extends Resp<string, number> {
//     code: F;
//
//     constructor(code: F) {
//         super();
//         this.code = code;
//     }
//
//     setCode(code: F) {
//         this.code = code;
//     }
// }

// interface IUser {
//     name: string;
//     age: number;
// }
//
// type KeysOfUser = keyof IUser;
//

// interface Data {
//     group: number;
//     name: string;
// }
//
// const data: Data[] = [
//     {group: 1, name: 'a'},
//     {group: 1, name: 'b'},
//     {group: 2, name: 'c'},
// ]
//
// interface IGorup<T> {
//     [key: string]: T[];
// }
//
// type key = string | number | symbol;
//
// function group<T extends Record<key, any>>(array: T[], key: keyof T): IGorup<T> {
//     return array.reduce<IGorup<T>>((map: IGorup<T>, item: Record<key, any>) => {
//         const itemKey = item[key];
//         let curEl = map[itemKey]
//         if (Array.isArray(curEl)) {
//             curEl.push(item);
//         } else {
//             curEl = [item];
//         }
//         map[itemKey] = curEl;
//         return map;
//     }, {})
// }
//
// const res = group<Data>(data, 'group');
// console.log(res)




























