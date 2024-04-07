import { v2 as cloudinary } from 'cloudinary';

import { OnlyImage } from 'src/components/common/pictures';
import type { ImageProps } from 'src/utils/types';


cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function Home({}: { images: ImageProps[] }) {
  const expression = 'folder=products/';

  const { resources } = await cloudinary.search.expression(expression).execute();

  return (
    <main className="">
      <p className='py-4'>Transitions from one color to another in a straight line.</p>
      <div className="mx-auto max-w-3xl lg:max-w-6xl">
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {resources.map((resource: any) => {
            return (
              <div key={resource.public_id} className="grid">
                <div className="w-full p-1">
                <OnlyImage images={resource.secure_url}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
