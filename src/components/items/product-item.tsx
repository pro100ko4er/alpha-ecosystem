import { Box, Button, Card, CardProps, Flex, Text } from "@radix-ui/themes";
import { IProduct } from "../../core/types";
import { HeartFilledIcon, HeartIcon, TrashIcon, UpdateIcon } from "@radix-ui/react-icons";
import React, { MouseEvent, useCallback } from "react";
export interface ProductItemProps extends CardProps {
    product: IProduct,
    onRemove: (id: number) => void,
    onLike: (id: number) => void,
    onUpdate: (id: number) => void
}


 

function ProductItem(props: ProductItemProps) {
    const {product, onLike, onRemove, onUpdate, ...other} = props

    
   const onRemoveClick = useCallback(
  (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onRemove(product.id);
  },
  [onRemove, product.id]
);
    const onLikeClick = useCallback((e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.stopPropagation()
        onLike(product.id)
    }, [onLike, product.id])

    const onUpdateClick = useCallback((e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        e.stopPropagation()
        onUpdate(product.id)
    }, [onUpdate, product.id])
    return (
        <Card className="wrapper cursor-pointer" {...other}>
            <Flex align={'center'} justify={'between'} className="wrapper_container">
                <div className="wrapper_content">
                    <div className="wrapper_content_title">
                        <h4>{product.title}</h4>
                    </div>
                    <div className="wrapper-content_price">
                        <h4 dangerouslySetInnerHTML={{__html: product.price_display}}>

                        </h4>
                    </div>
                     <div className="wrapper-content_sku">
                        <h4>
                            External SKU: {product.external_sku}
                        </h4>
                    </div>
                    <div className="wrapper_content_description" dangerouslySetInnerHTML={{__html: `${product.description && product.description.slice(0, 100)}...`}}>
                        
                    </div>
                </div>
                <div className="wrapper_image">
                    <img loading="lazy" src={product.image_url} width={100} height={100} />
                </div>
            </Flex>
            <Flex align={'center'} justify={'start'} gap={'5'} className="wrapper_footer" mt={'5'}>
                <Text size={'3'} color="gray">
                    {new Date(product.updated_at).toLocaleDateString("ru-RU")}
                </Text>
                <Button onClick={(e) => onLikeClick(e)}>
                   { product.liked ? <HeartFilledIcon />  : <HeartIcon width={15} height={15} />}
                </Button>
                <Button color='red' onClick={(e) => onRemoveClick(e)}>
                    <TrashIcon />
                </Button>
                <Button onClick={(e) => onUpdateClick(e)} color="yellow">
                    <UpdateIcon />
                </Button>
            </Flex>
        </Card>
        
    )
}

export default React.memo(ProductItem)