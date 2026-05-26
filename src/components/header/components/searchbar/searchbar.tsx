import { useContext } from "react";
import * as style from "./style";
import { Search } from 'lucide-react';
import { FilteredContext } from "../../../../providers/filtered-products-provider";

export const SearchBar = () => {
    const ctx = useContext(FilteredContext);
    if (!ctx) return null;

    const { query, setQuery } = ctx;

    return (
        <style.FormContainer>
            <style.Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <style.Icon>
                <Search />
            </style.Icon>
        </style.FormContainer>
    );
};