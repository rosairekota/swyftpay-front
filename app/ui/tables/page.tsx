import Breadcrumb from "@/components/ui/Breadcrumbs/Breadcrumb";
import TableOne from "@/components/ui/Tables/TableOne";
import TableTwo from "@/components/ui/Tables/TableTwo";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tables Page | Next.js E-commerce Dashboard Template",
  description: "This is Tables page for TailAdmin Next.js",
  // other metadata
};

const TablesPage = () => {
  return (
    <>
      <Breadcrumb pageName="Tables" />

      <div className="flex flex-col gap-10">
        <TableOne />
        <TableTwo />
      </div>
    </>
  );
};

export default TablesPage;
