"use client";
import { Button } from "@/component/ui/button";
import { useFormStatus } from "react-dom";
import { Loader2, ShoppingBag } from "lucide-react";

interface buttonProps {
    text: string;
    variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
}

export function SubmitButton({text, variant}: buttonProps){
    const {pending} = useFormStatus()
    return (
        <>
        {pending ? (
            <Button disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin"/>
                Please Wait
            </Button>
        ): (
            <Button variant={variant} type="submit">
                    {text}
            </Button>
        )}
        </>
    );
}

export function ShoppingBagButton (){
    const { pending } = useFormStatus();

    return (
        <>
        {pending ? (
            <Button disabled size="lg" className="w-full mt-5" >
                <Loader2 className="mr-4 h-5 w-5 animate-spin" /> Please wait
            </Button>
        ) : (
            <Button size="lg" className="w-full mt-5" type="submit">
                <ShoppingBag className="mr-4 h-5 w-5" /> Add to Cart
            </Button>
        )}
        </>
    )
}

export function DeleteItem(){
    const { pending } = useFormStatus();
    return(
        <>
            {pending ? (
                <button disabled className="font-medium text-primary text-end">
                    Removing...
                </button>
            ) : (
                <button type="submit" className="font-medium text-primary text-end">
                    Delete
                </button>
            )}
        </>
    )
}