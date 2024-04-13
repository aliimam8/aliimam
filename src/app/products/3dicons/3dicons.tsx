import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';

import Words from './types/words';
import Icons3D from './types/icons';

export function Grads() {
  return (
    <Tabs defaultValue="1" className=" items-center justify-center text-center">
      <TabsList className="w-auto items-center justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Gradient
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Gray
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
        <Words images={[]} />
      </TabsContent>
      <TabsContent value="2">
        <Icons3D images={[]} />
      </TabsContent>
    </Tabs>
  );
}
