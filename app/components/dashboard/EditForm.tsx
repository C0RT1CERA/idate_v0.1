"use client";
import { useState } from "react";
import { useForm } from "@conform-to/react";

import { Button } from "@/component/ui/button";
import { Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
 } from "@/component/ui/card";
import { Label } from "@/component/ui/label";
import { Input } from "@/component/ui/input";
import { Switch } from "@/component/ui/switch";
import { Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem } from "@/component/ui/select";





import { ChevronLeft,
    XIcon} from "lucide-react";
import Link from "next/link";
import { UploadDropzone } from "@/lib/uploadthing";
import { categories } from "@/lib/categories";
import { useFormState } from "react-dom";
import { editProduct } from "@/actions";
import { parseWithZod } from "@conform-to/zod";
import { productSchema } from "@/lib/zodSchemas";
import { Textarea } from "@/component/ui/textarea";
import Image from 'next/image';
import { SubmitButton } from "@/components/SubmitButton";
import { type  $Enums } from "@prisma/client"; 
interface iAppProps {
    data: {
        id: string;
        name: string;
        description: string;
        status: $Enums.ProductStatus;
        price: number;
        images: string[];
        category: $Enums.Category;
        isFeatured: boolean;
    };
}


export function EditForm({data}: iAppProps) {
    const [images, setImages] = useState<string[]>(data.images);
    const [lastResult, action] = useFormState(editProduct, undefined);
    const [form, fields] = useForm({
        lastResult,
        onValidate({formData}){
            return parseWithZod(formData, { schema: productSchema });
        },

        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    });

    const handleDelete = (index) => {
        setImages(images.filter((_,i) => i !== index));
    }


    return (
        <form id={form.id} onSubmit={form.onSubmit} action={action}>
            <input type="hidden" name="productId" value={data.id} />
            <div className="flex items-center gap-4">
                <Button variant="outline" size="icon">
                    <Link href="/dashboard/products">
                    <ChevronLeft className="w-4 h-4"/>
                    </Link>
                </Button>
                <h1 className="text-xl font-semibold tracking-tight">Edit Product</h1>
            </div>
            <Card className="mt-3">
                <CardHeader>
                    <CardTitle>Product Details</CardTitle>
                    <CardDescription>
                        Update your product&apos;s details.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-6 ">
                        <div className="flex flex-col gap-3">
                            <Label>Name</Label>
                            <Input
                            type="text"
                            key={fields.name.key}
                            name={fields.name.name}
                            defaultValue={data.name}
                            className="w-full"
                            placeholder="Product Name" />
                        <p className="text-red-500">{fields.name.errors}</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <Label>Description</Label>
                            <Textarea
                            key={fields.description.key}
                            name={fields.description.name}
                            defaultValue={data.description}
                            className="w-full"
                            placeholder="Product Description goes here.." />
                        <p className="text-red-500">{fields.description.errors}</p>
                        </div>
                        
                        <div>
                            <Label>Price</Label>
                            <Input
                            key={fields.price.key}
                            name={fields.price.name}
                            defaultValue={data.price}
                            className="w-full"
                            placeholder="Product Name" />
                            <p className="text-red-500">{fields.price.errors}</p>
                        
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Featured Product</Label>
                            <Switch 
                            key = {fields.isFeatured.key}
                            name = {fields.isFeatured.name}
                            defaultChecked={data.isFeatured}
                            />
                            <p className="text-red-500">{fields.isFeatured.errors}</p>
                        
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Status</Label>
                            <Select 
                            key={fields.status.key}
                            name={fields.status.name}
                            defaultValue={data.status}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Status"></SelectValue>
                                </SelectTrigger>
                            
                                <SelectContent>
                                    <SelectItem value="draft">Draft</SelectItem>
                                    <SelectItem value="published">Published</SelectItem>
                                    <SelectItem value="archived">Archived</SelectItem>
                                </SelectContent>
                            </Select>
                            <p className="text-red-500">{fields.status.errors}</p>
                        
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Category</Label>
                            <Select 
                                key={fields.category.key} 
                                name={fields.category.name} 
                                defaultValue={data.category}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Category"/>
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories.map((category) => (
                                            <SelectItem key={category.id} value={category.name}>
                                                        {category.title}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                <p className="text-red-500">{fields.isFeatured.errors}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Image</Label>
                            <input 
                                type="hidden" 
                                value={images} 
                                key={fields.images.key} 
                                name={fields.images.name} 
                                defaultValue={fields.images.initialValue} />
                            {images.length > 0 ? (
                                    <div className="flex gap-5">
                                        {images.map((image, index) => (
                                            <div key={index}
                                            className="relative w-[100px] h-[100px]">
                                                <Image
                                                  src={image} // For local images
                                                  alt="Product Image"
                                                  width={100} 
                                                  height={100} 
                                                  className="w-full h-full object-cover rounded-lg border"
                                                />
                                                <button 
                                                onClick={()=> handleDelete(index)}
                                                className="absolute -top-3 -right-3 bg-red-500 p-2 rounded-lg text-white " 
                                                type="button">
                                                    <XIcon className="w-4 h-4"></XIcon>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                            ): (
                            <UploadDropzone 
                            endpoint="imageUploader"
                            onClientUploadComplete={(res) => {
                                setImages(res.map((r) => r.url));
                            }}
                            
                            onUploadError={()=> {
                                alert("Something went wrong!");
                            }}/>
                            )}
                            <p className="text-red-500">{fields.images.errors}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton text="Update Product"/>
                </CardFooter>
            </Card>
        </form>
    )
}