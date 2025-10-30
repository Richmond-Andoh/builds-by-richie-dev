import SidebarToggle from "../SidebarToggle";
const Chat = ({ profile }: { profile: any }) => {
  return (
    <div className="h-full w-full">
      <div className="md:hidden p-2 sticky top-0 z-10">
        <SidebarToggle />
      </div>

      <Chat profile={profile} />
    </div>
  );
};

export default Chat;
