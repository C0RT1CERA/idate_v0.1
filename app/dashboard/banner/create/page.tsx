"use client";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/component/ui/button";
import Link from "next/link";
import { Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
    CardFooter,
 } from "@/component/ui/card";

import { Label } from "@/component/ui/label";
import { Input } from "@/component/ui/input";
import { UploadDropzone } from "@/lib/uploadthing";
import { SubmitButton } from "@/components/SubmitButton";
import { useState } from "react";
import { useFormState } from "react-dom";
import { createBanner } from "@/actions";
import { parseWithZod } from "@conform-to/zod";
import { bannerSchema } from "@/lib/zodSchemas";
import { useForm } from "@conform-to/react";
import Image from "next/image";
export default function BannerRoute() {
    const [image, setImages] = useState<string | undefined >(undefined);
    const [lastResult, action] = useFormState(createBanner, undefined);
    const [form, fields] = useForm({
        lastResult,
        onValidate({ formData }) {
            return parseWithZod(formData, {schema: bannerSchema});
        },

        shouldValidate: "onBlur",
        shouldRevalidate: "onInput",
    })
    return (
        <form id={form.id} onSubmit={form.onSubmit} action={action}>
            <div className="flex items-center gap-x-4">
            <Button variant="outline" size="icon" asChild>
                <Link href="/dashboard/products">
                    <ChevronLeft className="h-4 w-4"/>
                </Link>
            </Button>
            <h1 className="text-xl font-semibold tracking-tight">New Banner</h1>
            </div>

            <Card className="mt-5">
                <CardHeader>
                    <CardTitle>Banner Details</CardTitle>
                    <CardDescription>
                        Create your banner right here.
                    </CardDescription>
                </CardHeader>
                
                <CardContent>
                    <div className="flex flex-col gap-y-6">
                        <div className="flex flex-col gap-3">
                            <Label>Name</Label>
                            <Input 
                                type="text" 
                                name={fields.title.name} 
                                key={fields.title.key} 
                                defaultValue={fields.title.initialValue} 
                                placeholder="create title for banner." />
                        <p className="text-red-500">{fields.title.errors}</p>
                        </div>

                        <div className="flex flex-col gap-3">
                            <Label>Image</Label>
                            <input type="hidden" 
                                value={image} 
                                key={fields.imageString.key} 
                                name={fields.imageString.name} 
                                defaultValue={fields.imageString.initialValue} />
                            {image !== undefined ? (
                                <Image
                                    src={image}
                                    alt="Banner Image"
                                    width={200}
                                    height={200}
                                    className="w-[100px] h=[100px] object-cover border rounded-lg "
                                />
                            ) : (
                                <UploadDropzone 
                            onClientUploadComplete={(res) => {
                                setImages(res[0].url);
                            }}
                            onUploadError={() => {
                                alert("Something went wrong");
                            }}
                            endpoint="bannerImageUploader"/>
                            )}
                            <p className="text-red-500">{fields.imageString.errors}</p>
                        </div>
                    </div>
                </CardContent>
                <CardFooter>
                    <SubmitButton text="Create Banner"/>
                </CardFooter>
            </Card>
        </form>
    )
}
