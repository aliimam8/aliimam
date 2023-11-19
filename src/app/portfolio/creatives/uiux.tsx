import { v2 as cloudinary } from "cloudinary";

import CldImage from "src/components/CldImage";
import type { ImageProps } from "src/utils/types";

import { Dialog, DialogContent, DialogTrigger } from "src/components/ui/dialog";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function Home({}: { images: ImageProps[] }) {

  const expression = "folder=creatives/uiux";

  const { resources } = await cloudinary.search
    .expression(expression)
    .execute();

  return (
    <main className="mt-4">
      
      <div className="mx-auto max-w-3xl lg:max-w-6xl">
        <div className="grid grid-cols-3 lg:grid-cols-8">
          {resources.map((resource: any) => {
            return (
              <div key={resource.public_id} className="grid">
                <div className="w-full p-1">
                <Dialog>
                    <DialogTrigger asChild>
                      <CldImage
                        className="block saturate-100 transition-all duration-100 hover:saturate-0 h-full rounded-lg w-full object-cover object-center cursor-zoom-in"
                        width={300}
                        height={300}
                        src={resource.secure_url}
                        alt=""
                      />
                    </DialogTrigger>
                    <DialogContent className="max-w-[200px]">
                      <div className="flex items-center text-center justify-center">
                      <CldImage
                        className="block h-full w-full object-center cursor-close"
                        width={1000}
                        height={1000}
                        src={resource.secure_url}
                        alt=""
                        sizes="100vw"
                      />
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
