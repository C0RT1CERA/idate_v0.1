import { Hero } from "@/components/storefront/Hero";
import { CategorySelection } from "./CategorySelection";
import { FeaturedProduct } from "@/components/storefront/FeaturedProduct";
import { ProductCart } from "@/components/storefront/ProductCart";
import { HeadScroll } from "@/components/storefront/HeadScroll";

export default function IndexPage(){
    return (
        <>  <HeadScroll/>
            <Hero/>
            <CategorySelection/>
            <FeaturedProduct/>
            <ProductCart item={null}/>
        </>
    )
}