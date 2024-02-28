'use client'


import {useScrollTop} from "@/hooks/use-scroll-top";
import {cn} from "@/lib/utils";
import React from "react";
import Logo from "@/app/(marketing)/_components/logo";
import {ModeToggle} from "@/components/model-toggle";
import {SignInButton, UserButton} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import {useConvexAuth} from "convex/react";
import {Spinner} from "@/components/spinner";
import Link from "next/link";

export const Navbar = () => {
    const {isAuthenticated, isLoading} = useConvexAuth()
    const scrolled = useScrollTop()

    return (
        <div
            className={cn('z-50 bg-background dark:bg-[#1F1F1F] fixed top-0 flex items-center w-full p-6', scrolled && 'border-b shadow-sm')}>
            <Logo/>
            <div className={'md:ml-auto md:justify-end justify-between w-full flex items-center gap-x-2'}>
                {isLoading && (
                    <Spinner/>
                )}
                {!isAuthenticated && !isLoading && (
                    <>
                        <SignInButton mode={'modal'}>
                            <Button variant={'ghost'} size={'sm'}>
                                Log in
                            </Button>
                        </SignInButton>
                        <SignInButton mode={'modal'}>
                            <Button variant={'ghost'} size={'sm'}>
                                Get Jotion free
                            </Button>
                        </SignInButton>
                    </>
                )}
                {isAuthenticated && !isLoading && (
                    <>
                        <Button variant={'ghost'} size={'sm'} asChild>
                            <Link href={'/documents'}>
                                Enter Jotion
                            </Link>
                        </Button>
                        <UserButton afterSignOutUrl={'/'}/>

                    </>
                )}
                <ModeToggle/>
            </div>
        </div>
    );
};

