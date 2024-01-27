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
          <DialogTitle className="text-2xl mb-3">
            Invoice #<span className="text-mainGreen">{order.invoiceId}</span>
          </DialogTitle>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground pb-6">
            <div className="flex items-center justify-between">
              {/* <div className="flex flex-col">
                <span className="text-xs">Issue Date</span>{" "}
                <span className="text-darkestText">12/12/2018</span>
              </div> */}
              <div></div>
              <div className="flex flex-col">
                <span className="text-xs text-end">Issue Date</span>
                <span className="text-darkestText">{order.date}</span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xs">Notes</span>
              <span className="text-darkestText">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
                corrupti dignissimos, odio nemo nam repellendus ducimus, saepe
                magni, ipsam earum ullam. Eos, consequatur ratione! Est expedita
                quos animi amet voluptatum.
              </span>
            </div>

            <div className="min-w-[1px] border-b-[2px] border-b-sidebarBorder"></div>

            <div className="flex flex-col">
              <span className="text-xs">Contact</span>{" "}
              <span className="text-darkestText">{order.name}</span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs">Order</span>{" "}
              <span className="text-darkestText">
                Pretty Palms Laser Cut Low Wedge Sandals (QTY: 4)
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-xs">Delivery Address</span>{" "}
              <span className="text-darkestText">
                1313, Mockingbird Lane, Mockingbird Heights, CA 78704
              </span>
            </div>

            <div className="min-w-[1px] border-b-[2px] border-b-sidebarBorder"></div>

            <div className="flex flex-1 justify-between items-center">
              <span>Payment Status:</span>{" "}
              <span
                className={`text-darkestText font-semibold ${
                  order.status === "Paid" ? "text-mainGreen" : " text-mainRed"
                }`}
              >
                {order.status}
              </span>
            </div>

            <div className="flex flex-1 items-center justify-between">
              <span>Amount:</span>{" "}
              <span className={`text-darkestText text-lg font-semibold`}>
                {order.amount}
              </span>
            </div>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Invoice;
