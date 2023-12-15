import clsx from 'clsx';

//<span className={clsx('ml-1 inline', currencyCodeClassName)}>{`${currencyCode}`}</span>

const Price = ({
  amount,
  className='font-bold',
  currencyCode = '',
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className}>
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(parseFloat(amount))}`}
    
  </p>
);

export default Price;
