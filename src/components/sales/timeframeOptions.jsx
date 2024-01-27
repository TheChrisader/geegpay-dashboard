import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  //   DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const TimeframeOptions = ({ children, setDate }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="drop" size="drop" className="h-8">
          {children}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-fit">
        <DropdownMenuItem
          onClick={() => {
            setDate("Weekly");
          }}
        >
          Weekly
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() => {
            setDate("Monthly");
          }}
        >
          Monthly
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem disabled>Yearly</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TimeframeOptions;
