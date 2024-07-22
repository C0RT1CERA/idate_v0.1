import { Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
 } from "@/component/ui/card";
import { Button } from "@/component/ui/button";
import Link from "next/link"; 
import { deleteProduct } from "@/actions";
import { SubmitButton } from "@/components/SubmitButton";

export default function DeleteRoute({params}: {params: {id: string}}){
    return (
        <div className="h-[80vh] w-full flex items-center justify-center">
            <Card className="max-w-xl">
                <CardHeader>
                    <CardTitle>Are you sure?</CardTitle>
                    <CardDescription>This action cannot be undone. This action permanently delete this product and remove all the data from our servers.</CardDescription>
                </CardHeader>
                <CardFooter className="w-full flex justify-between">
                    <Button variant="secondary">
                    <Link href="/dashboard/products">Cancel</Link>
                    </Button>
                        
                    <form action={deleteProduct}>
                        <input type="hidden" name="productId" value={params.id} />
                        <SubmitButton variant="destructive" text="Delete Product"/>
                    </form>    
                    
                </CardFooter>
            </Card>
        </div>
    )
}