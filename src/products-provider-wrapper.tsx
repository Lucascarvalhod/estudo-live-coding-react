import {useGetProducts} from "./hooks/useGetProducts";
import {FilteredProvider} from "./providers/filtered-products-provider";

export  const ProductsProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { data, loading, error } = useGetProducts();

  if (loading) return <div>carregando...</div>;
  if (error) return <div>erro ao carregar produtos</div>;

  return <FilteredProvider items={data ?? []}>{children}</FilteredProvider>;
};