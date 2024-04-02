import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';

import Noise from './types/noise';
import Linear from './types/linear';

export function Grads() {
  return (
    <Tabs defaultValue="1" className=" items-center justify-center text-center">
      <TabsList className="w-auto items-center justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Mesh Noise
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Open Video
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
        <Noise images={[]} />
      </TabsContent>
      <TabsContent value="2">
        <Linear images={[]} />
      </TabsContent>
    </Tabs>
  );
}
