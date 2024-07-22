import { DropdownMenu, 
    DropdownMenuContent,
    DropdownMenuLabel, 
    DropdownMenuSeparator, 
    DropdownMenuTrigger,
    DropdownMenuItem, } from "@/component/ui/dropdown-menu";
import { Button } from "@/component/ui/button";
import { Avatar, AvatarFallback } from "@/component/ui/avatar";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { AvatarImage } from "@radix-ui/react-avatar";

interface iAppProps {
    email: string;
    name: string;
    userImage: string;
}


export function UserDropdown({email, name, userImage}: iAppProps){
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                    <AvatarImage src={userImage} alt="user image" />
                        
                    <AvatarFallback>
                        {name.slice(0.3)}
                    </AvatarFallback>
                </Avatar>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{name}</p>
                <p className="text-xs leading-none text-muted-foreground ">{email}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
                <DropdownMenuItem asChild>
                    <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
            
        </DropdownMenuContent>
    </DropdownMenu>
    )
    

}