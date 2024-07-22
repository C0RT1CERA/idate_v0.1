import prisma from "@/lib/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
        // Proper error handling
        return NextResponse.error();
    }

    let dbUser = await prisma.user.findUnique({
        where: {
            id: user.id,
        },
    });

    if (!dbUser) {
        dbUser = await prisma.user.create({
            data: {
                id: user.id,
                firstName: user.given_name ?? "",
                lastName: user.family_name ?? "",
                email: user.email ?? "",
                profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
            },
        });
    }

    // Corrected redirect to ensure proper URL formatting
    return NextResponse.redirect('http://localhost:3000');
}
