import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';

import { Grad1, Grad2, Grad3, Grad4 } from './types/mesh';
import Video from './types/video';

export function Grads() {
  return (
    <Tabs defaultValue="1" className=" items-center justify-center text-center">
      <TabsList className="w-auto items-center justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Mesh Background
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Open Mesh Video
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
        <Grad1 images={[]} />
        <Grad2 images={[]} />
        <Grad3 images={[]} />
        <Grad4 images={[]} />
      </TabsContent>
      <TabsContent value="2">
        <Video />
      </TabsContent>
    </Tabs>
  );
}
