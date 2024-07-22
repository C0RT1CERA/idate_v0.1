import { NavbarLinks } from "@/(storefront)/NavbarLinks";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { ShoppingBagIcon } from "lucide-react";
import Link from "next/link";
import { UserDropdown } from "./UserDropdown";
import { Button } from "@/component/ui/button";
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { redis } from "@/lib/redis";
import { Cart } from "@/lib/interfaces";

export async function Navbar() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    
    let total = 0;
    if (user) {
        const cart: Cart | null = await redis.get(`cart-${user.id}`);
        total = cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0;
    }

    return (
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="text-black font-bold text-xl lg:text-3xl">
                        RevMed <span className="text-primary">Sync</span>
                    </h1>
                </Link>
                <NavbarLinks />
            </div>
            <div className="flex items-center">
                {user ? (
                    <>
                        <Link href="/bag" className="group p-2 flex items-center mr-2">
                            <ShoppingBagIcon className="h-6 w-6 text-gray-400 group-hover:text-gray-500" />
                            <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">{total}</span>
                        </Link>
                        <UserDropdown
                            email={user.email as string}
                            name={user.given_name as string}
                            userImage={
                                user.picture ?? `https://avatar.vercel.sh/${user.given_name}`
                            }
                        />
                    </>
                ) : (
                    <div className="hidden md:flex md:flex-1 md:place-items-center md:justify-end md:space-x-2">
                        <Button variant="ghost" asChild>
                            <LoginLink>Sign in</LoginLink>
                        </Button>
                        <span className="h-6 w-px bg-stone-200"></span>
                        <Button variant="ghost" asChild>
                            <RegisterLink>Sign up</RegisterLink>
                        </Button>
                    </div>
                )}
            </div>
        </nav>
    );
}
