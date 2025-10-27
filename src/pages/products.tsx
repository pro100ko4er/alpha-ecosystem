import { Container } from "@radix-ui/themes"
import { useParams } from "react-router"

export default function ProductsPage() {
    const params = useParams()
    console.log(params)
    return (
        <Container className="wrapper"> 
        <h1>
            Продукты
        </h1>
        </Container>
    )
}