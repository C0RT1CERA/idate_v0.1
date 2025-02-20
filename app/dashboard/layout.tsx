import { ReactNode } from "react";
import { DashboardNavigation } from "../components/dashboard/DashboardNavigation";
import { Sheet, SheetTrigger, SheetContent } from "../component/ui/sheet";
import { Button } from "../component/ui/button";
import {DropdownMenu, 
        DropdownMenuTrigger,
        DropdownMenuContent,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuItem} from "../component/ui/dropdown-menu";


import { Menu } from 'lucide-react';
import { CircleUserRound } from 'lucide-react';

import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";


export default async function DashboardLayout({ children }: { children: ReactNode }) {
    const{getUser} = getKindeServerSession()
    const user = await getUser()
    if(!user || user.email !== "uniconalerts@gmail.com"){
        return redirect("/");
    }
    return (
        <div className="flex w-full flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="sticky top-0 h-16 flex items-center justify-between gap-4 border-b bg-white">
                <nav className="hidden font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg-gap-6">
                    <DashboardNavigation />
                </nav>
                
                <Sheet>
                    <SheetTrigger asChild>
                        <Button className="shrink-0 md:hidden" variant="outline" size="icon">
                            <Menu  className="h-5 w-5"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <nav className="flex flex-col gap-6 text-lg font-medium mt-5">
                            <DashboardNavigation />
                        </nav>
                    </SheetContent>
                </Sheet>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="secondary" size="icon" className="rounded-full">
                            <CircleUserRound className="w-5 h-5"/>
                        </Button>
                    </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                        My Account
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild> 
                    <LogoutLink>
                        Logout
                    </LogoutLink>
                        </DropdownMenuItem>
                </DropdownMenuContent>

                </DropdownMenu>



            </header>

            <main className="my-5">{children}</main>
        </div>
    );
  }
  