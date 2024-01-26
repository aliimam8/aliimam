import Image from 'next/image';
import { Icons } from 'src/components/icons';
import { Button } from 'src/components/ui/button';
import { getAllColorsPosts } from '@/lib/mdx';
import { DColorsFilteredPosts } from '@/components/common/filtered-posts';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from '@/components/ui/drawer';

export function AllColors() {
    const posts = getAllColorsPosts();
    return (

        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="aibutton" size="sm" className="flex gap-2 w-full h-14">
                    <Icons.search size={20} />
                    <p className="text-lg">Change Color</p>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full py-8 px-6">
                    
                    <DColorsFilteredPosts posts={posts} />
                  
                </div>
            </DrawerContent>
        </Drawer>
    );
}
