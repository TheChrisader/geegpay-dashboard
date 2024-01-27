import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Invoice = ({ children, data, id }) => {
  const order = data.find((order) => order.invoiceId === id);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="unstyled"
          size="unstyled"
          className="flex items-center gap-[6px] hover:underline"
        >
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl mb-3">Invoice Detail</DialogTitle>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground pb-6">
            <div className="flex flex-col">
              <span className="text-base font-semibold">Recipient</span>
              <span className="">{order.name}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold">Date</span>
              <span className="">{order.date}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold">Status</span>
              <span className="">{order.status}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold">Item(s)</span>
              <span className="">An item, Another item (maybe)</span>
            </div>
            <div className="flex w-full justify-end">
              <div className="flex flex-col">
                <span className="text-base font-semibold mb-1 text-end">
                  Amount:
                </span>
                <span className="text-[30px] text-darkText font-semibold">
                  {order.amount}
                </span>
              </div>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Invoice;
