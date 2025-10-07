import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBell,
  IconClock,
  IconHome,
  IconPlus,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Add Car",
      icon: (
        <IconPlus className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Rental History",
      icon: (
        <IconClock className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Alerts",
      icon: (
        <IconBell className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/alerts",
    },
  ];
  return (
    <div className="flex  dark items-center justify-center fixed bottom-10 w-full">
      <FloatingDock
        // only for demo, remove for production
        desktopClassName="shadow shadow-white/10  shadow-lg"
        mobileClassName="right-2  sm:right-10 fixed shadow shadow-white/10  shadow-lg rounded-full "
        items={links}
      />
    </div>
  );
}
