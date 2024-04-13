import { v2 as cloudinary } from 'cloudinary';

import { ZoomImage } from 'src/components/common/pictures';
import type { ImageProps } from 'src/utils/types';


cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export async function Grad1({}: { images: ImageProps[] }) {
  const expression = 'folder=products/graaadients/grad1';

  const { resources } = await cloudinary.search.expression(expression).execute();

  return (
    <main className="">
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
    </main>
  );
}

export async function Grad2({}: { images: ImageProps[] }) {
  const expression = 'folder=products/graaadients/grad2';

  const { resources } = await cloudinary.search.expression(expression).execute();

  return (
    <main className="">
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
    </main>
  );
}

export async function Grad3({}: { images: ImageProps[] }) {
  const expression = 'folder=products/graaadients/grad3';

  const { resources } = await cloudinary.search.expression(expression).execute();

  return (
    <main className="">
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
    </main>
  );
}

export async function Grad4({}: { images: ImageProps[] }) {
  const expression = 'folder=products/graaadients/grad4';

  const { resources } = await cloudinary.search.expression(expression).execute();

  return (
    <main className="">
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
    </main>
  );
}
