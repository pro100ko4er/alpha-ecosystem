import { Button, Container, Flex, Select, Spinner, Text, TextField } from "@radix-ui/themes"
import { Link, useNavigate, useParams } from "react-router"
import ProductItem from "../components/items/product-item"
import useFetch from "../core/hooks/useFetch"
import {  useCallback, useEffect, useRef, useState } from "react"
import ApiService from "../core/services/api"
import ROUTES from "../routes/routes"
import { useAppDispatch, useAppSelector } from "../core/store/hooks"
import { getProducts, removeProduct, setFilter, switchLikeProduct } from "../core/store/reducers/product-reducer"
import useObserver from "../core/hooks/useObserver"
import { IProduct } from "../core/types"
import ProductDetailItem from "../components/items/product-deatil-item"

export default function ProductsPage() {
    const params = useParams()
    console.log(params)
    const product_state = useAppSelector(state => state.product)
    const products = useAppSelector(state => {
  const { products, filter } = state.product;
  return filter === 'liked' 
    ? products.filter(p => p.liked)
    : products;
});
    const dispatch = useAppDispatch()
    const refPagination = useRef<HTMLDivElement>(null)
    const [product, setProduct] = useState<IProduct | null>()
    const [visibleFilter, setVisibleFilter] = useState<boolean>(false)
    const [fetchProducts, isLoading, error] = useFetch(async () => {
        const data = await ApiService.getAll(product_state.limit, product_state.page + 1)
        dispatch(getProducts({...product_state, products: data.data, page: data.pagination.current_page, total_pages: data.pagination.total_pages, total: data.pagination.total}))
        console.log(product_state)
    })
    const navigate = useNavigate()
    const onSwitchLikeProduct = useCallback((id: number) => {
  dispatch(switchLikeProduct(id));
}, [dispatch]);

   const onRemoveProduct = useCallback((id: number) => {
  dispatch(removeProduct(id));
}, [dispatch]);

const onUpdateProduct = useCallback((id: number) => {
        navigate(`/edit-product/${id}`)
}, [navigate])

   const onClickProduct = useCallback((id: number) => {
  navigate(`/products/${id}`);
}, [navigate]);
    useEffect(() => {
        if(!params.id) {
            fetchProducts()
            setProduct(null)
        }
        else if(product_state.filter !== 'liked') {
    setProduct(product_state.products.find(p => p.id === Number(params.id)))
}
    }, [params])
    useObserver({
        callback: () => fetchProducts(),
        ref: refPagination,
        isLoading: isLoading,
        canLoad: product_state.total > product_state.products.length && product_state.products.length > 0 && product_state.filter !== 'liked'
    })
    return (
        <Container className="wrapper"> 
        {!product &&
        <Flex align={'center'} gap={'5'}> 
        <h1>
            Products
        </h1>
        <Link to={ROUTES.CREATE_PRODUCT_PAGE}>
        Add product
        </Link>
        </Flex>
}
        {!product &&
        <Flex align={'start'} direction={'column'} mb={'5'}>
            <Button onClick={() => setVisibleFilter(!visibleFilter)}>
                Fitler
            </Button>
            <Flex display={visibleFilter ? 'flex' : 'none'} direction={'column'}> 
            <Flex direction={'column'} pt={'4'}> 
            <Text>
                Select only
            </Text>
         <Select.Root defaultValue="all" onValueChange={e => dispatch(setFilter(e))}>
	<Select.Trigger />
	<Select.Content>
		<Select.Group>
			<Select.Label>Select filter</Select.Label>
			<Select.Item value="all">All</Select.Item>
			<Select.Item value="liked">Liked</Select.Item>
		</Select.Group>
	</Select.Content>
</Select.Root>
</Flex>
  
        </Flex>
        </Flex>
}
        {
        !product ?
        <Container className="products">
             {products.map(item => {
                return <ProductItem mb={'5'} key={item.id} onClick={e => onClickProduct(item.id)} onRemove={onRemoveProduct} onLike={onSwitchLikeProduct} onUpdate={onUpdateProduct} product={item} />
             })}
        <Container ref={refPagination} className="bottom-container-pagination">
             {isLoading && <Spinner />}
        </Container>
        
        </Container>
        :
        <Container>
            <ProductDetailItem product={product} />
        </Container>
}
        </Container>
    )
}