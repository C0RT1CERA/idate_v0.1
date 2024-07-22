import { Skeleton } from "@/component/ui/skeleton";
import { LoadingProductCart } from "@/components/storefront/ProductCart";

export default function LoadingFile() {
    return(
        <div>
            <Skeleton className="h-10 w-56 my-5"/>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                <LoadingProductCart/>
                <LoadingProductCart/>
                <LoadingProductCart/>
                <LoadingProductCart/>
                <LoadingProductCart/>
                <LoadingProductCart/>
                <LoadingProductCart/>
                <LoadingProductCart/>
            </div>
        </div>
    )
}