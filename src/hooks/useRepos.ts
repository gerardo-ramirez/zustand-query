import { useQuery } from "@tanstack/react-query";
import api from "../apiConection/github"
import { Repositories } from "./types";

const fetchRepos =async ()=>{
const {data } =await api.get<Repositories>('/users/fazt/repos');
return data; 
}
export const useFetchRepositories = ()=>{
   return useQuery(['repos2'],fetchRepos); 
}