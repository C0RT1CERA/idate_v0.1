import { Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardDescription,
 } from "../component/ui/card";
import { Avatar, AvatarFallback } from "../component/ui/avatar";

 import { DollarSign, ShoppingBag, PartyPopper, UserRoundCheck } from "lucide-react";
export default function Dashboard(){
    return (
        <>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Revenue</CardTitle>
                    <DollarSign className="h-5 w-5 text-green-500"/>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">$100.00</p>
                    <p className="text-xs text-muted-foreground">Based on 100 Charges.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Sales</CardTitle>
                    <ShoppingBag className="h-5 w-5 text-blue-500"/>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">+37</p>
                    <p className="text-xs text-muted-foreground">Total Sales.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Products</CardTitle>
                    <PartyPopper  className="h-5 w-5 text-indigo-500"/>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">+99</p>
                    <p className="text-xs text-muted-foreground">Total Product Created.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle>Total Users</CardTitle>
                    <UserRoundCheck  className="h-5 w-5 text-orange-500"/>
                </CardHeader>
                <CardContent>
                    <p className="text-2xl font-bold">+120</p>
                    <p className="text-xs text-muted-foreground">Total User Signed Up.</p>
                </CardContent>
            </Card>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3 mt-10 ">
            <Card className="xl:col-span-2 ">
                <CardHeader>
                    <CardTitle>Transaction</CardTitle>
                    <CardDescription>Recent transaction from your store.</CardDescription>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                </CardHeader>
                    <CardContent className="flex flex-col gap-8">
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>UJ</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium ">ujal johnson</p>
                                <p className="text-xs text-muted-foreground">test@text.com</p>
                            </div>
                            <p className="ml-auto font-medium">+$1,999.00</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>UJ</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium ">ujal johnson</p>
                                <p className="text-xs text-muted-foreground">test@text.com</p>
                            </div>
                            <p className="ml-auto font-medium">+$1,999.00</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>UJ</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium ">ujal johnson</p>
                                <p className="text-xs text-muted-foreground">test@text.com</p>
                            </div>
                            <p className="ml-auto font-medium">+$1,999.00</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <Avatar className="hidden sm:flex h-9 w-9">
                                <AvatarFallback>UJ</AvatarFallback>
                            </Avatar>
                            <div className="grid gap-1">
                                <p className="text-sm font-medium ">ujal johnson</p>
                                <p className="text-xs text-muted-foreground">test@text.com</p>
                            </div>
                            <p className="ml-auto font-medium">+$1,999.00</p>
                        </div>
                    </CardContent>
                
            </Card>
        </div>
        <div>
            
        </div>
        </>
    )
};