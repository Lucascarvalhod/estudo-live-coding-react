import * as styled from "./style";

import { CardProduct } from "../card-product/card";

import { useGetProducts } from "../../hooks/useGetProducts";

export const GridProducts = () => {
  const {
    data,
    isLoading,
    error,
  } = useGetProducts();

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <span>Houve um erro</span>;
  }

  return (
    <styled.Container>
      {data?.map((item) => (
        <CardProduct
          key={item.id}
          product={item}
        />
      ))}
    </styled.Container>
  );
};
  