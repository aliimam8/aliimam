import Image from "next/image";
import { Icons } from "src/components/icons";
import { Button } from "src/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "src/components/ui/dialog";

export function Coffee() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="aibutton" size="sm" className="flex gap-2">
        <Icons.coffee className="w-4 h-4" />
          Buy Me a Coffee
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <div className="flex items-center text-center justify-center">
          <Image
            src="/pay.jpg"
            alt="Your Image"
            height={1000}
            width={1000}
            className="bg-white rounded-xl w-[300px] lg:w-[350px] ring-1 p-3 ring-aired"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
