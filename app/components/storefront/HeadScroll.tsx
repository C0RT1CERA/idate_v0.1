import { Card, CardContent } from "@/component/ui/card"
import { Button } from "@/component/ui/button"
import Image from "next/image"

export function HeadScroll() {
  return (
    <div className="flex h-full w-full">
      <div className="flex-1 overflow-y-auto p-6 md:p-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <Image src="/man.png" width={100} height={100} alt="Card Image" className="rounded-t-md" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-muted-foreground">This is a brief description of the card content.</p>
            </CardContent>
          </Card>
          <Card>
            <Image src="/man.png" width={100} height={100} alt="Card Image" className="rounded-t-md" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-muted-foreground">This is a brief description of the card content.</p>
            </CardContent>
          </Card>
          <Card>
            <Image src="/man.png" width={100} height={100} alt="Card Image" className="rounded-t-md" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-muted-foreground">This is a brief description of the card content.</p>
            </CardContent>
          </Card>
          <Card>
            <Image src="/man.png" width={100} height={100} alt="Card Image" className="rounded-t-md" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-muted-foreground">This is a brief description of the card content.</p>
            </CardContent>
          </Card>
          <Card>
            <Image src="/man.png" width={100} height={100} alt="Card Image" className="rounded-t-md" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-muted-foreground">This is a brief description of the card content.</p>
            </CardContent>
          </Card>
          <Card>
            <Image src="/man.png" width={100} height={100} alt="Card Image" className="rounded-t-md" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-muted-foreground">This is a brief description of the card content.</p>
            </CardContent>
          </Card>
          <Card>
            <Image src="/man.png" width={100} height={100} alt="Card Image" className="rounded-t-md" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-muted-foreground">This is a brief description of the card content.</p>
            </CardContent>
          </Card>
          <Card>
            <Image src="/man.png" width={100} height={100} alt="Card Image" className="rounded-t-md" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-muted-foreground">This is a brief description of the card content.</p>
            </CardContent>
          </Card>
          
          <Card>
            <Image src="/man.png" width={100} height={100} alt="Card Image" className="rounded-t-md" />
            <CardContent className="p-4">
              <h3 className="text-lg font-semibold">Card Title</h3>
              <p className="mt-2 text-muted-foreground">This is a brief description of the card content.</p>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="sticky top-0 right-0 hidden w-1/3 flex-col gap-6 bg-muted p-6 md:flex">
        <div>
          <h2 className="text-2xl font-bold">Explore Our Products</h2>
          <p className="mt-2 text-muted-foreground">
            Check out our wide range of products and services to find the perfect solution for your needs.
          </p>
        </div>
        <Button>Learn More</Button>
      </div>
    </div>
  )
}