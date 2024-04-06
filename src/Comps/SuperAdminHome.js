import React, {useEffect, useState} from 'react';
import { flexRender, getCoreRowModel , useReactTable } from '@tanstack/react-table';
import "./styles.css";
import Actions from './Actions';

const columns = [
    {
        accessorKey: 'id',
        header: "Sl No",
        meta: {
            className: "w-2/12 sm:w-1/12 font-medium"
        },
        cell: ({row}) => <p>{row.getValue("id")}</p> 
    },
    {
        accessorFn: row => `${row.firstName} ${row.lastName}`,
        header: "Name",
        filterFn: "includesString",
        meta: {
            className: "w-6/12 font-medium"
        },
        cell: (props) => <div> 
            <p className='w-full font-light'>{props.getValue()}</p>
        </div>
    },

    {
        header: "Actions",
        meta: {
            className: "w-5/12 text-center font-medium"
        },
        cell: () =>  <Actions />
    }
    
];

export default function SuperAdminHome() {
    const [adminList, setAdminList] = useState([]);

    const fetchAdmins = () => {
        fetch("https://dummyjson.com/users")
        .then(response => response.json())
        .then(json => {
            setAdminList(json.users);
        })
    }
    useEffect(()=>{
        fetchAdmins();
    }, []);
    
    const table = useReactTable({
        data: adminList,
        columns: columns,
        getCoreRowModel: getCoreRowModel(),
    });

  return (
    <div className='w-screen h-screen bg-admin-page-header flex flex-col items-center justify-center gap-4'>
        {adminList.length > 0 && 
            <main className='w-10/12 h-4/6 rounded-md form-shadow overflow-auto max-h-screen flex flex-col
            text-xs'>
            <div className='sticky top-0 bg-white'>
                {table.getHeaderGroups().map(headerGrp => {
                    return <div key={headerGrp.id} className='flex flex-row items-center justify-start px-2 gap-4 py-2 border-b border-gray-300'>
                        {headerGrp.headers.map(heading => {
                            return <span className={`${heading.column.columnDef.meta.className} font-medium`}  key={heading.id}>
                                    <h2>
                                    {heading.column.columnDef.header}
                                    </h2>
                                </span>
                        })}
                    </div>
                })}
            </div>
            <div className='overflow-y-auto bg-gray-50'>
            {table.getCoreRowModel().rows.map(row => {
                return <div key={row.id} className='w-full flex justify-start px-2 gap-4 py-2 border-b border-gray-300'>
                    {row.getVisibleCells().map(cell => {
                        return <div key={cell.id} className={cell.column.columnDef.meta.className}>
                            {
                                flexRender(
                                    cell.column.columnDef.cell,
                                    cell.getContext()
                                )
                            }
                        </div>
                    })}
                </div>
            })}
            </div>
        </main>}
        
    </div>
  )
}
