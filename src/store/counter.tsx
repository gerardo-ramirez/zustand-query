import { create } from "zustand";

interface ConunterState  {
    count: number,
    title:string,
    increment: ()=>void,
    users: Users,
    getUsers:()=>Promise<void>,
    cleanUsers:()=>void

}
export type Users = User[]

export interface User {
    id: number
    name: string
    username: string
    email: string
    address: Address
    phone: string
    website: string
    company: Company
}

export interface Address {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: Geo
}

export interface Geo {
    lat: string
    lng: string
}

export interface Company {
    name: string
    catchPhrase: string
    bs: string
}

export const useCounterStore = create<ConunterState>((set)=>({
    count:12,
    title:"some title",
    increment:()=>set(state=>({...state, count: state.count +1})),
    users:[],
    getUsers:async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const res = await response.json(); 
        set(state=>({
            ...state,
            users:res
        }))

    },
    cleanUsers:()=>set(state=>({...state,users:[]}))
}))