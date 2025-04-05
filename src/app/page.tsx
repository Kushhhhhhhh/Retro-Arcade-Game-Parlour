import HomeClient from "@/components/custom/HomeClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arcade Paradise",
  description: "Relive the Glory Days of Gaming",
};

export default function Home() {

  return (
   <HomeClient />
  );
}