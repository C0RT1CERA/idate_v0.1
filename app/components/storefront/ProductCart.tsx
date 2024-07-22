import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/component/ui/carousel";
import Image from "next/image";
import { Button } from "@/component/ui/button";
import Link from "next/link";
import { Skeleton } from "@/component/ui/skeleton";
interface iAppProps {
    item: {
        id: string;
        name: string;
        description: string;
        price: number;
        images: string[];
    };
}

export function ProductCart({ item }: iAppProps) {
    if (!item) {
        return null; // Or return a placeholder/loading component
    }

    const images = item.images || [];

    if (!Array.isArray(images)) {
        return null; // Or handle the error appropriately
    }

    return (

        <div className="rounded-lg">
            <Carousel className="w-full mx-auto">
                <CarouselContent>
                    {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="relative h-[330px]">
                                <Image
                                    src={image}
                                    alt="product image"
                                    fill
                                    className="object-cover object-center w-full h-full rounded-lg"
                                />
                                
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="ml-16"/>
                <CarouselNext className="mr-16"/>
            </Carousel>
            <div className="flex justify-between items-center mt-2">
                    <h1 className="font-semibold text-xl">{item.name}</h1>
                    <h3 className="inline-flex items-center rounded-md bg-primary/10 font-medium text-primary px-2 py-1 text-xs rin-1 ring-inset ring-primary/10">
                        ${item.price}
                    </h3>            
            </div>
            <p className="mt-2 text-gray-600 text-sm line-clamp-2">{item.description}</p>
            <Button asChild className="w-full mt-5">
                <Link href={`/product/${item.id}`}>
                Learn More!
                </Link>
                </Button>
        </div>
    );
}


export function LoadingProductCart(){
    return (
        <div className="flex flex-col">
            <Skeleton className="w-full h-[330px]"/>
            <div className="flex flex-col mt-2 gap-y-2">
                <Skeleton className="h-4 w-full"/>
                <Skeleton className="h-6 w-full"/>
            </div>
            <Skeleton className="w-full h-10 mt-5"/>
        </div>
    )
}