import SidebarCountry from "@/components/SidebarCountry";
import SideScrollArea from "@/components/SideScrollArea";
import { Separator } from "@/components/ui/separator";
import { COUNTRIES } from "@/constants/countries";

export default function DesktopEventSidebar({ type = "countries" }: any) {
  return (
    <aside>
      <SideScrollArea>
        {COUNTRIES.map((asset) => (
          <>
            <SidebarCountry code={asset.code} name={asset.name} />
            <Separator />
          </>
        ))}
      </SideScrollArea>
    </aside>
  );
}
