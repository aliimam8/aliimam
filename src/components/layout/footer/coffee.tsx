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

export function Coffee() {
  return (
    
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="aibutton" size="sm" className="flex gap-2">
          <Icons.coffee className="h-4 w-4" />
          Buy Me a Coffee
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm md:max-w-md py-8 px-12">
            <div className="flex items-center border rounded-xl border-aired/25 justify-center text-center">
              <Image
                src="/pay.jpg"
                alt="Your Image"
                height={600}
                width={600}
                className="w-auto rounded-xl bg-white"
              />
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
