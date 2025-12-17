import SideBar from "../../components/sideBar";

export default function Index() {
  return (
    <div className="flex flex-row"> 
      <div>
        {" "}
        <SideBar />{" "}
      </div>
      <div className=" container mx-auto">

        Dashboard Page
      </div>
    </div>
  );
}
