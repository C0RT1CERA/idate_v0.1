import { Button } from "@/component/ui/button";
import { MoreHorizontalIcon, PlusCircle,} from "lucide-react";
import Link from "next/link";
import { Card,
    CardTitle,
    CardHeader,
    CardDescription,
    CardContent } from "@/component/ui/card";
import { Table,
    TableHeader,
    TableRow,
    TableHead,
    TableCell,
    TableBody } from "@/component/ui/table";

    import { DropdownMenu,
        DropdownMenuTrigger,
        DropdownMenuContent,
        DropdownMenuLabel,
        DropdownMenuSeparator,
        DropdownMenuItem
     } from "@/component/ui/dropdown-menu";
import prisma from "@/lib/db";
import Image from "next/image";



async function getData(){
    const data = await prisma.product.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}

export default async function ProductsRoute() {
    const data = await getData();
    return (
        <>
        <div className="flex items-center justify-end">
            <Button asChild className="flex item-center gap-x-2">
                <Link href="/dashboard/products/create">
                    <PlusCircle className="w-4 h-4"/>
                    <span>Add Product</span>
                </Link>
                </Button>
        </div>
        <Card className="mt-5">
            <CardHeader>
                <CardTitle>Product</CardTitle>
                <CardDescription>
                    Manage your product and view their sales performance.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead className="">Name</TableHead>
                            <TableHead className="">Status</TableHead>
                            <TableHead className="">Price</TableHead>
                            <TableHead className="">Date</TableHead>
                            <TableHead className="text-end">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) =>(
                            <TableRow key={item.id}>
                            <TableCell>
                                <Image 
                                    alt="product image"
                                    src={item.images[0]}
                                    height={64}
                                    width={64}
                                    className="rounded-md object-cover h-16 w-16"
                                    />
                            </TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.status}</TableCell>
                            <TableCell>$ {item.price}</TableCell>
                            <TableCell>{new Intl.DateTimeFormat("en-US").format(item.createdAt)}</TableCell>
                            <TableCell className="text-end">
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button size="icon" variant="ghost">
                                            <MoreHorizontalIcon className="h-4 w-4"/>
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent>
                                        <DropdownMenuLabel>
                                            Actions
                                        </DropdownMenuLabel>
                                        <DropdownMenuSeparator/>
                                        <DropdownMenuItem asChild>
                                            <Link href={`/dashboard/products/${item.id}`}>Edit</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href={`/dashboard/products/${item.id}/delete`}>Delete</Link>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </TableCell>

                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
        </>
    )
}