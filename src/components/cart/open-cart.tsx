
import { Icons } from 'src/components/icons';

export default function OpenCart({
  
  quantity
}: {
  className?: string;
  quantity?: number;
}) {
  return (
    <div className="justify-centertransition-colors relative flex items-center ">
      <span className="sr-only">Your Company</span>
      <Icons.shop strokeWidth={1.5} className="w-5" />
      <span className="sr-only">Home</span>

      {quantity ? (
        <div className="absolute right-0 top-0 -mr-1 mt-3 h-3.5 w-3.5 rounded-full bg-aired text-[10px] font-medium text-white">
          {quantity}
        </div>
      ) : null}
    </div>
  );
}
