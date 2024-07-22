"use server";
import prisma from "@/lib/db";
import { LoadingProductCart, ProductCart } from "./ProductCart";
import { Suspense } from "react";

async function getData() {
    const data = await prisma.product.findMany({
        where: {
            status: "published",
        },
        select: {
            id: true,
            name: true,
            description: true,
            images: true,
            price: true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}

export async function FeaturedProduct() {
    return (
        <>
            <h2 className="text-2xl font-extrabold tracking-tight">Featured Items</h2>
            <Suspense fallback={<LoadingRows/>}>
            <LoadFeaturedproducts/>
            </Suspense>
            
        </>
    );
}


async function LoadFeaturedproducts(){
    const data = await getData();
    if (!data || data.length === 0) {
        return <p>No featured items available</p>;
    }
    return(
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.map((item) => {
                    return <ProductCart key={item.id} item={item} />;
                })}
            </div>
    )
}

function LoadingRows(){
    return(
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <LoadingProductCart/>
            <LoadingProductCart/>
            <LoadingProductCart/>
        </div>
    )
}