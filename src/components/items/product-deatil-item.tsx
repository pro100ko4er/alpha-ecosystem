import { Button, Card, Container, Flex, Text } from "@radix-ui/themes"
import { IProduct } from "../../core/types"
import { Link } from "react-router"
import ROUTES from "../../routes/routes"
import { ArrowLeftIcon } from "@radix-ui/react-icons"

export interface ProductDetailItemProps {
    product: IProduct
}


export default function ProductDetailItem(props: ProductDetailItemProps) {
    const {product} = props
    return (
        <Container> 
            <Link to={ROUTES.PRODUCTS_PAGE}>
           <ArrowLeftIcon /> Назад к товарам
            </Link>
         <Card className="wrapper cursor-pointer">
            <Flex align={'center'} justify={'between'} wrap={'wrap'} className="wrapper_container">
                <div className="wrapper_content">
                    <div className="wrapper_content_title">
                        <h4>{product.title}</h4>
                    </div>
                    <div className="wrapper_content_id">
                        <h4>
                            ID: {product.id}
                        </h4>
                    </div>
                    <div className="wrapper_content_sku">
                           <h4>SKU: {product.external_sku}</h4> 
                    </div>
                    <h4 className="wrapper_content_price" dangerouslySetInnerHTML={{__html: product.price_display}}>
                          
                    </h4>
                    <div className="wrapper_content_description" dangerouslySetInnerHTML={{__html: product.description}}>
                        
                    </div>
                </div>
                <div className="wrapper_image">
                    <img loading="lazy" src={product.image_url} width={'100%'} height={'100%'} />
                </div>
            </Flex>
            <Flex align={'center'} justify={'start'} gap={'5'} className="wrapper_footer" mt={'5'}>
                <Text size={'3'} color="gray">
                    {new Date(product.updated_at).toLocaleDateString("ru-RU")}
                </Text>
            </Flex>
        </Card>
        </Container>
    )
}