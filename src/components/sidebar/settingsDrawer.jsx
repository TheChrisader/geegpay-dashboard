import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function SettingsDrawer({ children }) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="unstyled"
          size="unstyled"
          className="transition-transform hover:scale-125"
        >
          {children}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Settings Menu</DrawerTitle>
            <DrawerDescription>
              Settings have not been made available for this user yet.
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">Close</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
