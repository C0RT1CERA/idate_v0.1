"use client";
import { Button } from "@/component/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface iAppProps {
    images: string[]
}

export function ImageSlider({ images }: iAppProps){
    const [mainImageIndex, setMainImageIndex] = useState(0);

    function handelPreviousClick(){
        setMainImageIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    }
    function handelNextClick(){
        setMainImageIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    }
    function handelImageClick(index: number){
        setMainImageIndex(index);
    }
    return (
        <div className="grid gap-6 md:gap-3 items-start">
            <div className="relative overflow-hidden rounded-lg ">
                    <Image 
                        width={400} 
                        height={400} 
                        src={images[mainImageIndex]} 
                        alt="product images"
                        className="object-cover sm:size-0 md:w-[400px] md:h-[400px] md:ml-[80px]"
                    />

                        <div className="absolute inset-0 flex items-center justify-between px-4">
                            <Button onClick={handelPreviousClick} variant="ghost" size="icon">
                                <ChevronLeft className="w-6 h-6"/>
                            </Button>
                            <Button onClick={handelNextClick} variant="ghost" size="icon">
                                <ChevronRight className="w-6 h-6"/>
                            </Button>
                        </div>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {images.map((image, index) =>(
                    <div className={cn(index === mainImageIndex 
                        ? "border-2 border-primary"
                        : "border border-gray-200", "relative overflow-hidden rounded-lg cursor-pointer " )} key={index} onClick={() => handelImageClick(index)}>
                        <Image 
                            src={image}
                            alt="Product image"
                            width={100}
                            height={100}
                            className="object-cover sm:size-2 md:w-[100px] md:h-[100px]"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}