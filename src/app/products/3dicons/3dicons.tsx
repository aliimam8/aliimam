import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';

import SmallWords from './types/smallwords';
import CapsWords from './types/capswords';
import Numbers from './types/numbers';
import Icons3D from './types/icons';

export function Icooons() {
  return (
    <Tabs defaultValue="1" className=" items-center justify-center text-center">
      <TabsList className="sticky top-24 z-20 w-full items-center justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              3DIcons
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Caps Words
            </TabsTrigger>
            <TabsTrigger value="3" className="px-6">
              Small Words
            </TabsTrigger>
            <TabsTrigger value="4" className="px-6">
              Numbers
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
      <Icons3D images={[]} />
      </TabsContent>
      <TabsContent value="2">
      <CapsWords images={[]} />
      </TabsContent>
      <TabsContent value="3">
      <SmallWords images={[]} />
      </TabsContent>
      <TabsContent value="4">
      <Numbers images={[]} />
      </TabsContent>
    </Tabs>
  );
}
