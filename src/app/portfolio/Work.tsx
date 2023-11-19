/* eslint-disable unicorn/filename-case */
import { ScrollArea, ScrollBar } from "src/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs";

import Packaging from "./creatives/3d";
import Campaigns from "./creatives/campaigns";
import Logos from "./creatives/logos";
import Music from "./creatives/music";
import SocialMedia from "./creatives/socialmedia";
import UIUX from "./creatives/uiux";
import Videos from "./creatives/videos";

export function Work() {
  return (
    <Tabs defaultValue="1" className=" text-center items-center justify-center">
      <TabsList className="w-full lg:w-auto text-center items-center justify-center">
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
              Posters & Logos
            </TabsTrigger>
            <TabsTrigger value="6" className="px-6">
              Music
            </TabsTrigger>
            <TabsTrigger value="7" className="px-6">
              Videos & Reels
            </TabsTrigger>
            <TabsTrigger value="8" className="px-6">
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
        <Videos images={[]} />
      </TabsContent>
    </Tabs>
  );
}
