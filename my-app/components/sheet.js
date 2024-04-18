import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

  import React from 'react';
import Link from 'next/link';
  export default function SheetComponent(){
    return(<>
    <Sheet>
  <SheetTrigger>Open</SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>DashBoard</SheetTitle>
    </SheetHeader>
    <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-center gap-4">
            <Link href='/'>My Courses</Link>
            <Link href='/'>My Certification</Link>
            <Link href='/'>My Courses</Link>
          </div>
        </div>
  </SheetContent>
</Sheet>

    </>)
  }