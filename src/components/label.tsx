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
      className={clsx(
        'absolute bottom-0 left-0 flex w-full items-center justify-center px-4 pb-4 @container/label',
        {
          'lg:px-20 lg:pb-[45%]': position === 'center'
        }
      )}
    >
      <div className="flex w-full flex-col items-center text-xs font-semibold ">
        <h3 className="flex-grow py-2 text-sm ">{title}</h3>
        <Price
          className="flex-none rounded-full bg-aired p-2 px-4 text-white"
          amount={amount}
          currencyCode={currencyCode}
          currencyCodeClassName="hidden @[275px]/label:inline"
        />
      </div>
    </div>
  );
};

export default Label;
