interface IUser {
    id: number;
    name: string;
    age: number;
    email: string;
}

const users: IUser[] = [
    {
        id: 1,
        name: 'John Doe',
        age: 25,
        email: 'john.doe@example.com',
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 30,
        email: 'jane.smith@example.com',
    },
    {
        id: 3,
        name: 'Tom Brown',
        age: 35,
        email: 'tom.brown@example.com',
    },
];

export default users;