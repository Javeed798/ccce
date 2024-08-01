import Image from "next/image";

export default function Home() {
   return (
      <div className={"flex w-screen flex-col h-screen bg-background"}>
         <div className={"h-12 flex"}>
            Navbar
         </div>
         <div className={"w-screen flex grow bg-red-600"}>
            Code Editor
         </div>
      </div>
   );
}
