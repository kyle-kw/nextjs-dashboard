
import CustomersTable from '@/app/ui/customers/table';
import {fetchFilteredCustomers} from "@/app/lib/data";
import {Suspense} from "react";
import {InvoicesTableSkeleton} from "@/app/ui/skeletons";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
 searchParams
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className='w-full'>
      <Suspense fallback={<InvoicesTableSkeleton/>}>
        <CustomersTable customers={customers} />
      </Suspense>
    </div>
  )
}