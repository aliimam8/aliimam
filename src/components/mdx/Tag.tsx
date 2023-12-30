

interface Props {
  text: string;
}

export default function AiTag({ text }: Props) {
  return (
    <div
      className="mr-2 rounded-full border border-slate-200 px-2 py-1 text-[10px] font-semibold text-slate-600 hover:bg-aired hover:text-white dark:hover:text-white dark:border-slate-800 dark:text-slate-400 "
    >
      {text.split(' ').join('-')}
    </div>
  );
}



