import { PlusCircle, MoreHorizontalIcon } from "lucide-react";
import Link  from "next/link";
import Image from "next/image";
import { Button } from "@/component/ui/button";
import {Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/component/ui/table";

import { Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
 } from "@/component/ui/card";

import { DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
 } from "@/component/ui/dropdown-menu";
import prisma from "@/lib/db";


async function getData(){
    const data = await prisma.banner.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}

export default async function BannerRoute () {
    const data = await getData()

    return (
        <>
        <div className="flex items-center justify-end">
            <Button asChild className="flex gap-x-2">
                <Link href="/dashboard/banner/create">
                    <PlusCircle className="h-5 w-5" />
                    <span>Add Banner</span>
                </Link>
            </Button>
        </div>

        <Card className="mt-5">
            <CardHeader>
                <CardTitle>Banners</CardTitle>
                <CardDescription>Manage Your Banners</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Image</TableHead>
                            <TableHead>Title</TableHead>
                            <TableHead className="text-end">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item) =>(
                            <TableRow key={item.id}>
                            <TableCell>
                                <Image alt="Product image"
                                    src={item.imageString}
                                    width={64}
                                    height={64} 
                                    className="rounded-lg object-cover h-16 w-16"/>
                            </TableCell>
                            <TableCell className="font-medium">{item.title}</TableCell>
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
                                            <Link href={`/dashboard/products/}`}>Edit</Link>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem asChild>
                                            <Link href={`/dashboard/banner/${item.id}/delete`}>Delete</Link>
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