import { Card, Container, Text } from "@radix-ui/themes";
import { useAppDispatch, useAppSelector } from "../core/store/hooks";
import { Link, useNavigate, useParams } from "react-router";
import ROUTES from "../routes/routes";
import { ArrowLeftIcon} from "@radix-ui/react-icons";
import { FormEvent, useRef, useState } from "react";
import { updateProduct } from "../core/store/reducers/product-reducer";
import ProductForm from "../components/forms/product-form";
import { IProduct } from "../core/types";
import { ProductFormData } from "./create-product-page";

export default function EditProductPage() {
    const params = useParams()
    const product = useAppSelector(state => state.product.products.find(p => p.id === Number(params.id)))
    const dispatch = useAppDispatch()
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()
    const refForm = useRef<HTMLFormElement>(null)
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault()
        if(refForm.current && product) {
        setError('')
        const formData = new FormData(refForm.current);
        const data = Object.fromEntries(formData.entries()) as Record<keyof ProductFormData, string>;
    for (let [key, value] of Object.entries(data)) {
    if (String(value).trim() === '') {
        setError(`Field "${key}" cannot be empty`);
        return;
        }
    }
        const fields = {
            ...product,
            ...data,
            external_sku: Number(data.external_sku),
            updated_at: new Date().toString(),
        }
        dispatch(updateProduct({
            ...fields,
            id: product.id,
        }))
        navigate(ROUTES.PRODUCTS_PAGE)
        }
    
  
    }
    return (
        <Container>
            <Link to={ROUTES.PRODUCTS_PAGE}>
           <ArrowLeftIcon /> Back to products
            </Link>
        <Card>
            <h4>
                Edit product
            </h4>
            <Text color="red">{error}</Text>
            {product ? <ProductForm ref={refForm} onSubmit={onSubmit} defaultValues={product} /> : <Text color="red">Продукт не найден!</Text>}
              
        </Card>
        </Container>
    )
}