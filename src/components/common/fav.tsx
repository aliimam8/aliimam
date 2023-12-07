import { v2 as cloudinary } from 'cloudinary';
import { AIImage } from 'src/utils/types';
import AliImage from 'src/components/common/pictures';

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function Favo() {
  const expression = 'folder=travell/manali';

  const { resources } = await cloudinary.search.expression(expression).execute();

  return (
    <main className="mt-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-6xl">
        <div className="grid grid-cols-3 lg:grid-cols-6">
          {resources.map((resource: any) => {
            return (
              <div key={resource.public_id} className="grid">
                <div className="w-full p-1">
                  <AliImage images={resource.secure_url}/>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
