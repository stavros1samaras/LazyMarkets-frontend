import DesktopEventSidebar from "@/components/DesktopEventSidebar";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";

export default function Countries() {
  return (
    <Main>
      <DesktopEventSidebar type="events" />

      <MainContent>
        <div>Countries</div>
      </MainContent>
    </Main>
  );
}
