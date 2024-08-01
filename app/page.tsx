import dynamic from "next/dynamic";

export default function Home() {
  const CodeEditor = dynamic(() => import("@/components/editor"), {
    ssr: false,
  });

  return (
    <div className={"flex w-screen flex-col h-screen bg-background"}>
      <div className={"h-12 flex"}>Navbar</div>
      <div className={"w-screen flex grow"}>
        <CodeEditor />
      </div>
    </div>
  );
}
