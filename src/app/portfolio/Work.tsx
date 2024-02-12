/* eslint-disable unicorn/filename-case */
import { ScrollArea, ScrollBar } from 'src/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs';

import Packaging from './creatives/3d';
import Campaigns from './creatives/campaigns';
import Logos from './creatives/logos';
import Music from './creatives/music';
import SocialMedia from './creatives/socialmedia';
import UIUX from './creatives/uiux';
import Others from './creatives/others';
import Videos from './creatives/videos';
import Reels from './creatives/reels';

export function Work() {
  return (
    <Tabs defaultValue="1" className="items-center justify-center text-center">
      <TabsList className="sticky top-24 z-20 w-full items-center justify-center text-center lg:w-auto">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Social Media
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Campaigns
            </TabsTrigger>
            <TabsTrigger value="3" className="px-6">
              3D & Packaging
            </TabsTrigger>
            <TabsTrigger value="4" className="px-6">
              UI/UX
            </TabsTrigger>
            <TabsTrigger value="5" className="px-6">
              Logos
            </TabsTrigger>
            <TabsTrigger value="6" className="px-6">
              Music
            </TabsTrigger>
            <TabsTrigger value="7" className="px-6">
              Videos
            </TabsTrigger>
            <TabsTrigger value="8" className="px-6">
              Reels
            </TabsTrigger>
            <TabsTrigger value="9" className="px-6">
              Other
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
        <SocialMedia images={[]} />
      </TabsContent>
      <TabsContent value="2">
        <Campaigns images={[]} />
      </TabsContent>
      <TabsContent value="3">
        <Packaging images={[]} />
      </TabsContent>
      <TabsContent value="4">
        <UIUX images={[]} />
      </TabsContent>
      <TabsContent value="5">
        <Logos images={[]} />
      </TabsContent>
      <TabsContent value="6">
        <Music images={[]} />
      </TabsContent>
      <TabsContent value="7">
        <Videos/>
      </TabsContent>
      <TabsContent value="8">
        <Reels/>
      </TabsContent>
      <TabsContent value="9">
        <Others images={[]} />
      </TabsContent>
    </Tabs>
  );
}
