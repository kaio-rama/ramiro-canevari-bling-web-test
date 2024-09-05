"use client"

import { useSearchParams, usePathname , useRouter } from "next/navigation"

export default function SearchBar({placeholder} : {placeholder : string}){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = (term : string ) => {
        const params = new URLSearchParams(searchParams)
        if (term){
            params.set('query', term)
        } else {
            params.delete('query')
        }
        replace(`${pathname}?${params.toString()}`)

    }
    
    return(
    <input 
        onChange={(event) => handleSearch(event.target.value)}
        className="search-bar"  
        placeholder={placeholder}
        defaultValue={searchParams.get('query')?.toString()}
        ></input>

)}