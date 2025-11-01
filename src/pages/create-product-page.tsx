import { Card, Container, Text } from "@radix-ui/themes";
import { useAppDispatch } from "../core/store/hooks";
import { Link, useNavigate } from "react-router";
import ROUTES from "../routes/routes";
import { ArrowLeftIcon,} from "@radix-ui/react-icons";
import { FormEvent, useRef, useState } from "react";
import { createProduct } from "../core/store/reducers/product-reducer";
import { generateNumericId } from "../utils";
import ProductForm from "../components/forms/product-form";
import { IProduct } from "../core/types";
export type ProductFormData = Omit<IProduct, 'id' | 'liked' | 'updated_at'>;
export default function CreateProductPage() {
    const dispatch = useAppDispatch()
    const [error, setError] = useState<string>('')
    const navigate = useNavigate()
    const refForm = useRef<HTMLFormElement>(null)
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(refForm.current) {
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
            title: data.title.toString(),
            price_display: data.price_display.toString(),
            external_sku: Number(data.external_sku.toString()),
            image_url: data.image_url.toString(),
            description: data.description.toString(),
        }
        dispatch(createProduct({
            ...fields,
            id: generateNumericId(),
            liked: false,
            updated_at: new Date().toString()
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
                Add product
            </h4>
            <Text color="red">{error}</Text>
             <ProductForm ref={refForm} onSubmit={onSubmit}  />
        </Card>
        </Container>
    )
}