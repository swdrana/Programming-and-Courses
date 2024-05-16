export type IName = {
    first: string,
    last?: string
}
export type IStudent = {
    id: string,
    name: IName,
    age: number,
    email: string,
    phone: string,
    address: string,
    courses: string[],
    createdAt: Date,
    updatedAt: Date
}