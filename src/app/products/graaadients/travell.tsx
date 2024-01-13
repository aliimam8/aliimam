import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';

import Dark from './types/dark';

export function Travell() {
  return (
    <Tabs defaultValue="1" className=" items-center justify-center text-center">
      <TabsList className="w-auto items-center justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Dark
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Light
            </TabsTrigger>
            <TabsTrigger value="3" className="px-6">
              Random
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
        <Dark images={[]} />
      </TabsContent>
      <TabsContent value="2">
      </TabsContent>
      <TabsContent value="3">
      </TabsContent>
    </Tabs>
  );
}
