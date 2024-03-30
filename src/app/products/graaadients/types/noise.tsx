import { v2 as cloudinary } from 'cloudinary';

import { ZoomImage } from 'src/components/common/pictures';
import type { ImageProps } from 'src/utils/types';


cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function Home({}: { images: ImageProps[] }) {
  const expression = 'folder=products/graaadients/noise';

  const { resources } = await cloudinary.search.expression(expression).execute();

  return (
    <main className="">
      <p className='py-4'>Introduces randomness or noise to the gradient, creating a textured effect.</p>
      <div className="mx-auto max-w-3xl lg:max-w-6xl">
        <div className="grid grid-cols-3 lg:grid-cols-5">
          {resources.map((resource: any) => {
            return (
              <div key={resource.public_id} className="grid">
                <div className="w-full p-1">
                <ZoomImage images={resource.secure_url}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
