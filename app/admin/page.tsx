import { Dashboard } from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwyftPay",
  description: "Bienvenue",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
