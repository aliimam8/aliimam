import Link from 'next/link';
import { Icons } from 'src/components/icons';

export default function OpenCart({
  className,
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="justify-centertransition-colors relative flex items-center ">
      <Link href="/" className=" items-center space-x-4 lg:flex">
        <span className="sr-only">Your Company</span>
        <Icons.shop strokeWidth={1.5} className="w-5" />
        <span className="sr-only">Home</span>
      </Link>

      {quantity ? (
        <div className="bg-aired absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 text-white rounded-full text-[11px] font-medium">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
