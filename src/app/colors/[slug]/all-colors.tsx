import Image from 'next/image';
import { Icons } from 'src/components/icons';
import { Button } from 'src/components/ui/button';
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
    return (

        <Drawer>
            <DrawerTrigger asChild>
                <Button variant="aibutton" size="sm" className="flex gap-2 w-full h-14">
                    <Icons.search size={20} />
                    <p className="text-lg">Change Color</p>
                </Button>
            </DrawerTrigger>
            <DrawerContent>
                <div className="mx-auto w-full max-w-sm md:max-w-md py-8 px-12">
                    <div className="flex items-center border rounded-xl border-aired/25 justify-center text-center">
                       
                    </div>
                    <DrawerFooter>
                        <DrawerClose asChild>
                            <Button className='mb-6 my-2' variant="redbutton">Cancel</Button>
                        </DrawerClose>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
