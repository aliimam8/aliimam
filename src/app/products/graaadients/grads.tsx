import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';

import Noise from './types/noise';
import Linear from './types/linear';
import Radial from './types/radial';
import Angular from './types/angular';
import Diamond from './types/diamond';
import Conical from './types/conical';
import Reflected from './types/reflected';
import Triangular from './types/traingular';
import Spherical from './types/spherical';

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
              Video
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
      <TabsContent value="3">
        <Radial images={[]} />
      </TabsContent>
      <TabsContent value="4">
        <Angular images={[]} />
      </TabsContent>
      <TabsContent value="5">
        <Diamond images={[]} />
      </TabsContent>
      <TabsContent value="6">
        <Conical images={[]} />
      </TabsContent>
      <TabsContent value="7">
        <Reflected images={[]} />
      </TabsContent>
      <TabsContent value="8">
        <Triangular images={[]} />
      </TabsContent>
      <TabsContent value="9">
        <Spherical images={[]} />
      </TabsContent>
    </Tabs>
  );
}
