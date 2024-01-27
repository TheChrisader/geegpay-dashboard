import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Document from "./icons/document";
import Invoice from "./invoice";
import { tableHeads, tableData } from "./tableData";

const OrderTable = () => {
  return (
    <Table className="">
      <TableHeader className="">
        <TableRow className="">
          {tableHeads.map((head, i) => (
            <TableHead
              key={i}
              className={" max-[1400px]:w-[250px] " + head.class}
            >
              {head.name}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {tableData.map((order) => (
          <TableRow className="" key={order.invoiceId}>
            <TableCell>
              <div className="flex items-center flex-grow gap-[10px]">
                <Avatar className="size-8">
                  <AvatarImage
                    src={order.img}
                    alt={order.name.split(" ")[0] + "'s avatar"}
                  />
                  <AvatarFallback>MB</AvatarFallback>
                </Avatar>
                <span className="font-medium text-base text-darkerText">
                  {order.name}
                </span>
              </div>
            </TableCell>
            <TableCell>
              <span className="text-base font-normal text-darkThin whitespace-nowrap">
                {order.date}
              </span>
            </TableCell>
            <TableCell>
              <span className="font-medium text-darkestText text-base">
                {order.amount}
              </span>
            </TableCell>
            <TableCell className="">
              <span
                className={`font-normal text-base text-mainGreen`}
                style={{
                  color: order.status === "Paid" ? "#34CAA5" : "#ED544E",
                }}
              >
                {order.status}
              </span>
            </TableCell>
            <TableCell>
              <Invoice data={tableData} id={order.invoiceId}>
                <Document />{" "}
                <span className="font-normal text-sm leading-[22px] text-darkestText">
                  View
                </span>
              </Invoice>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default OrderTable;
