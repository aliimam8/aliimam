import { ScrollArea, ScrollBar } from "src/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "src/components/ui/tabs";

import Agra from "./trips/agra";
import Delhi from "./trips/delhi";
import Jaipur from "./trips/jaipur";
import Kolkata from "./trips/kolkata";
import Manali from "./trips/manali";
import Mussorie from "./trips/mussorie";
import Nainital from "./trips/nainital";
import Others from "./trips/others";
import Shimla from "./trips/shimla";
import Udaipur from "./trips/udaipur";

export function Travell() {
  return (
    <Tabs defaultValue="1" className=" text-center items-center justify-center">
      <TabsList className="w-full lg:w-auto text-center items-center justify-center">
        <ScrollArea className="whitespace-nowrap">
          <div className="space-x-2">
            <TabsTrigger value="1" className="px-6">
              Manali
            </TabsTrigger>
            <TabsTrigger value="2" className="px-6">
              Udaipur
            </TabsTrigger>
            <TabsTrigger value="3" className="px-6">
              Jaipur
            </TabsTrigger>
            <TabsTrigger value="4" className="px-6">
              Mussorie
            </TabsTrigger>
            <TabsTrigger value="5" className="px-6">
              Nainital
            </TabsTrigger>
            <TabsTrigger value="6" className="px-6">
              Delhi
            </TabsTrigger>
            <TabsTrigger value="7" className="px-6">
              Agra
            </TabsTrigger>
            <TabsTrigger value="8" className="px-6">
              Shimla
            </TabsTrigger>
            <TabsTrigger value="9" className="px-6">
              Kolkata
            </TabsTrigger>
            <TabsTrigger value="10" className="px-6">
              Other
            </TabsTrigger>
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </TabsList>

      <TabsContent value="1">
        <Manali images={[]} />
      </TabsContent>
      <TabsContent value="2">
        <Udaipur images={[]} />
      </TabsContent>
      <TabsContent value="3">
        <Jaipur images={[]} />
      </TabsContent>
      <TabsContent value="4">
        <Mussorie images={[]} />
      </TabsContent>
      <TabsContent value="5">
        <Nainital images={[]} />
      </TabsContent>
      <TabsContent value="6">
        <Delhi images={[]} />
      </TabsContent>
      <TabsContent value="7">
        <Agra images={[]} />
      </TabsContent>
      <TabsContent value="8">
        <Shimla images={[]} />
      </TabsContent>
      <TabsContent value="9">
        <Kolkata images={[]} />
      </TabsContent>
      <TabsContent value="10">
        <Others images={[]} />
      </TabsContent>


    </Tabs>
  );
}
