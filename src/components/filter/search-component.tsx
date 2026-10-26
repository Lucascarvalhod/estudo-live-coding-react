import { SearchInput } from "./style";

export function SearchComponent(query:{query:string, setQuery:(value:string)=>void}){
    return(
        <SearchInput type="text" placeholder="Search..." value={query.query} onChange={(e)=>query.setQuery(e.target.value)} />
    )
}