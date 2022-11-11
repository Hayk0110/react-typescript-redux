import { useEffect } from "react"
import { fetchProduct } from "../store/actions/productAction"
import ProductCard from "../components/ProductCard"
import { useAppDispatch,useAppSelector } from "../hooks/redux"

export function MainPage() {

    const dispatch = useAppDispatch();
    const {error,loading,products} = useAppSelector(state=> state.product);

    useEffect(()=>{
        dispatch(fetchProduct());
    },[dispatch])

  return (
    <div className="container mx-auto max-w-[760px] pt-5">
        {
            products.map(product => <ProductCard key={product.id} product={product} />)
        }
    </div>
  )
}
