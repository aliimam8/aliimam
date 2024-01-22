import Sketch from './sketch';
import Wheel from './wheel';
import Circle from './circle';

export default function Cart() {

    return (
        <div className='mx-auto mt-20 max-w-5xl my-20 px-6'>
            <div className='flex flex-wrap justify-center gap-8 bg-slate-100 dark:bg-slate-900 border border-aired/25 p-20 rounded-3xl w-full'>
                <Sketch />
                <Wheel />
                <Circle />
            </div>
        </div>
    )
}
