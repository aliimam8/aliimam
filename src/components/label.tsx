import clsx from 'clsx';
import Price from './price';

const Label = ({
  title,
  amount,
  currencyCode,
  position = 'bottom'
}: {
  title: string;
  amount: string;
  currencyCode: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 items-center justify-center flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[45%]': position === 'center'
      })}
    >
      <div className="flex items-center w-full rounded-full border border-slate-200 dark:border-slate-800 p-1 text-xs font-semibold ">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none text-sm ">{title}</h3>
        <Price
          className="flex-none rounded-full bg-aired p-3 px-6 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
