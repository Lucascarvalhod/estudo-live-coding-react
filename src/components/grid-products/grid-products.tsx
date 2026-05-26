import * as styled from "./style";
import { CardProduct } from "../card-product/card";
import { useContext } from "react";
import { FilteredContext } from "../../providers/filtered-products-provider";

export const GridProducts = () => {
    const ctx = useContext(FilteredContext);
    if (!ctx) return null;

    const { filteredItems } = ctx;

    return (
        <styled.Container>
            {filteredItems.map((item) => (
                <CardProduct key={item.id} product={item} />
            ))}
        </styled.Container>
    );
};

  