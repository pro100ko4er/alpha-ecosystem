import { Button, Flex, Text } from "@radix-ui/themes";
import { IProduct } from "../../core/types";
import { HeartIcon } from "@radix-ui/react-icons";

export interface ProductItemProps {
    product: IProduct,
    onClick: (id: number) => any,
    onRemove: (id: number) => any,
    onLike: (id: number) => any
}

export default function ProductItem(props: ProductItemProps) {
    const {product, onClick, onLike, onRemove} = props
    return (
        <div className="wrapper">
            <Flex align={'center'} justify={'between'} className="wrapper_container">
                <div className="wrapper_content">
                    <div className="wrapper_content_title">
                        <h2>{product.id}.{product.title}</h2>
                    </div>
                    <div className="wrapper_content_description">
                        {product.description}
                    </div>
                </div>
                <div className="wrapper_image">
                    <img src={product.image_url} />
                </div>
            </Flex>
            <Flex align={'center'} justify={'between'} className="wrapper_footer">
                <Text size={'3'} color="gray">
                    {product.updated_at}
                </Text>
                <Button>
                    <HeartIcon />
                </Button>
            </Flex>
        </div>
    )
}