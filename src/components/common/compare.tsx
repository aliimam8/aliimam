import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

export default function App() {
  return (
    <div className="mx-auto mt-20 max-w-3xl px-4 sm:px-6 md:max-w-4xl ">
      <div style={{ width: '100%', height: '100%', flexGrow: 1 }}>
        <ReactCompareSlider
          itemOne={<ReactCompareSliderImage src="/images/ba/Wallpaper1.jpg" alt="Image one" className='rounded-xl' />}
          itemTwo={<ReactCompareSliderImage src="/images/ba/Wallpaper2.jpg" alt="Image two" className='rounded-xl' />}
          style={{ width: '100%', height: '50%' }}
        />
      </div>
    </div>
  );
}
