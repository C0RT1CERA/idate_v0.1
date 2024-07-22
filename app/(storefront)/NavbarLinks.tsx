"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navbarLinks = [
    {
        id:0,
        name:"Home",
        href:"/",
    },
    {
        id:1,
        name:"Blogs",
        href:"/products/all",
    },
    {
        id:2,
        name:"Industry Insights and Trends",
        href:"/products/men"
    },
    {
        id:3,
        name:"Best Practices and Tips",
        href:"/products/women"
    },
    {
        id:4,
        name:"Educational Resources",
        href:"/products/kids"
    },
    
];

export function NavbarLinks(){
    const location = usePathname();

    return(
            <div className="hidden md:flex justify-center items-center gap-x-4 ml-8">
                {navbarLinks.map((item)=> (
                    <Link 
                        href={item.href} 
                        key={item.id} 
                        className={cn(
                            location === item.href
                            ? "bg-muted"
                            : "hover:bg-muted hover:bg-opacity-75",
                            "group p-2 font-medium rounded-md"
                        )}> 
                        {item.name} 
                    </Link>
                ))}
            </div>
        )
}