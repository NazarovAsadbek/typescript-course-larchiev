// Union Types
function logId(id: number | string | boolean) {
    console.log(id);
}

logId(1);
logId("1");
logId(true);

// Literal Types
function fetchWithAuth(url: string, method: "GET" | "POST") {
    console.log(url, method);
}

fetchWithAuth("https://example.com", "GET");
fetchWithAuth("https://example.com", "POST");

// Type Aliases
type httpMethod = "GET" | "POST" | "PUT" | "DELETE";

type User = {
    name: string,
    age: number
    skills: string[]
}

type Role = {
    id: number
}

type UserWithRole = User & Role;

let user: UserWithRole = {
    id: 1,
    name: "John",
    age: 30,
    skills: ["HTML", "CSS", "JS"]
}


// Interfaces
interface User2 {
    name: string,
    age: number
    skills: string[]
}

interface UserWithRole2 extends User2 {
    roleId: number
}

let user2: UserWithRole2 = {
    roleId: 1,
    name: "John",
    age: 30,
    skills: ["HTML", "CSS", "JS"]
}

// Interfaces vs Type Aliases
interface axiosRequest {
    url: string,
    method: httpMethod,
    data?: any,
}

interface axiosRequest {
    headers?: any
}

type ID = number | string;

interface IDI {
    ID: string | number
}

// Optional
interface User3 {
    login: string,
    password?: string
}

const user3: User3 = {
    login: "John"
}

// Void
function log(message: string): void {
    console.log(message);
}

// Unknown