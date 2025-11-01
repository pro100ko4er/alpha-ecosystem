import { CheckIcon } from "@radix-ui/react-icons";
import { Button, Text, TextArea, TextField } from "@radix-ui/themes";
import { DetailedHTMLProps, FormEvent, FormEventHandler, FormHTMLAttributes, useState } from "react";
import { IProduct } from "../../core/types";


export interface ProductFormProps extends DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> {
    defaultValues?: Partial<IProduct>;
}

export default function ProductForm(props: ProductFormProps) {
    const {defaultValues, ...other} = props
    return (
    <form {...other}>
                <div className="form-field"> 
                <Text>Title</Text>
                <TextField.Root placeholder="Apple" name="title" required defaultValue={defaultValues?.title}>

                </TextField.Root>
                </div>
                <div className="form-field"> 
                <Text>Price display</Text>
                <TextField.Root placeholder="19$" name="price_display" required defaultValue={defaultValues?.price_display}>

                </TextField.Root>
                </div>
                <div className="form-field"> 
                <Text>External SKU</Text>
                <TextField.Root placeholder="1234567890" type="number" name="external_sku" required defaultValue={defaultValues?.external_sku}>

                </TextField.Root>
                </div>
                <div className="form-field"> 
                <Text>Image URL</Text>
                <TextField.Root placeholder="https://path/to/image" type='url' name="image_url" required defaultValue={defaultValues?.image_url}>

                </TextField.Root>

                </div>
                <div className="form-field"> 
                <Text>Description</Text>
                <TextArea rows={20} cols={5} name="description" placeholder="This apple very good to over min price average..." required defaultValue={defaultValues?.description}>

                </TextArea>
                </div>
                <Button color='grass' mt={'5'}>
                    Save <CheckIcon />
                </Button>
            </form>
    )
}