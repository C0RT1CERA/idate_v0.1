import { Card,
    CardHeader,
    CardDescription,
    CardContent,
    CardTitle,
 } from "@/component/ui/card";

import {Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from "@/component/ui/table";
 
export default function OrdersPage(){
    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    Orders
                </CardTitle>
                <CardDescription>
                    Recent Orders from your store!
                </CardDescription>
            </CardHeader> 
            <CardContent>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Customer</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            <p className="font-medium">ujal johnson</p>
                            <p className="hidden md:flex text-sm text-muted-foreground">test@test.com</p>
                        </TableCell>
                        <TableCell>Sale</TableCell>
                        <TableCell>Successfull</TableCell>
                        <TableCell>2024-06-15</TableCell>
                        <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
            </CardContent>
        </Card>        
    );
}