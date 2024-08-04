"use client";

import CustomButton from "@/components/ui/customButton";
import {Code2, Folder, FolderDot, HelpCircle, Plus, Settings, Users} from "lucide-react";
import {Button} from "@/components/ui/button";
import {useState} from "react";

type TScreen = "projects" | "shared" | "settings" | "search";

export default function Dashboard() {
  const [screen, setScreen] = useState<TScreen>("projects");
  const activeScreen = (s: TScreen) => {
    if (screen === s) return "justify-start";
    else return "justify-start font-normal text-muted-foreground";
  };
// 1hout:59min
  return (
    <div className={"flex grow w-full"}>
      <div className={"w-56 border-r border-border p-4 justify-between flex flex-col"}>
        <div className={"flex flex-col"}>
          <CustomButton className={"mb-4"}>
            <Plus className={"w-4 h-4 mr-2"}/>
            New Project
          </CustomButton>
          <Button
            variant={"ghost"}
            className={activeScreen("projects")}
            onClick={() => setScreen("projects")}
          >
            <FolderDot className={"w-4 h-4 mr-2"}/>
            My Projects
          </Button>
          <Button
            variant={"ghost"}
            className={activeScreen("shared")}
            onClick={() => setScreen("shared")}
          >
            <Users className={"w-4 h-4 mr-2"}/>
            Shared Rooms
          </Button>
          <Button
            variant={"ghost"}
            className={activeScreen("settings")}
            onClick={() => setScreen("settings")}
          >
            <Settings className={"w-4 h-4 mr-2"}/>
            Settings
          </Button>
        </div>
        <div>
          <Button variant={"ghost"}
                  className={"justify-start font-normal text-muted-foreground"}
          >
            <Code2 className="w-4 h-4 mr-2"/>
            Github Repo
          </Button>
          <Button variant={"ghost"}
                  className={"justify-start font-normal text-muted-foreground"}
          
          >
            <HelpCircle className="w-4 h-4 mr-2"/>
            About
          </Button>
        </div>
      </div>
      <div className={"grow flex flex-col items-stretch p-4"}>
        <h1 className={"text-2xl font-medium text-center"}>
          A Collaborative Cloud Code Editor, AI Powered, Auto-Scaling Code Editor
        </h1>
      </div>
    </div>
  );
}
