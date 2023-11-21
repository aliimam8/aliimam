import Image from 'next/image';
import { Icons } from 'src/components/icons';
import { Button } from 'src/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from 'src/components/ui/dialog';

export function Coffee() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="aibutton" size="sm" className="flex gap-2">
          <Icons.coffee className="h-4 w-4" />
          Buy Me a Coffee
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <div className="flex items-center justify-center text-center">
          <Image
            src="/pay.jpg"
            alt="Your Image"
            height={1000}
            width={1000}
            className="w-[300px] rounded-xl bg-white p-3 ring-1 ring-aired lg:w-[350px]"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
