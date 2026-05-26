import {
  useState,
  useMemo,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction
} from "react";

import { Product } from "../types/get-products.types";

type Props = {
  children: ReactNode;
  items: Product[];
};

type FilteredContextType = {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
  filteredItems: Product[];
};

export const FilteredContext =
  createContext<FilteredContextType | null>(null);

export const FilteredProvider = ({
  children,
  items
}: Props) => {

  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {

    return items.filter((item) =>
      item.title
        .toLowerCase()
        .includes(query.toLowerCase())
    );

  }, [items, query]);

  return (
    <FilteredContext.Provider
      value={{
        query,
        setQuery,
        filteredItems
      }}
    >
      {children}
    </FilteredContext.Provider>
  );
};