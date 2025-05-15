import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../components/ui/popover";

type DropdownProps = {
  placeholder: string;
  list: { name: string; code: string }[];
  setUpstreamValue?: (val: { name: string; code: string }) => void;
};

export function Dropdown({
  placeholder,
  list = [],
  setUpstreamValue,
}: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const passDataHandler = (val: { name: string; code: string }) => {
    setUpstreamValue!(val);
  };

  return (
    <div className={list.length > 0 ? "" : "opacity-40 pointer-events-none"}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="relative w-[200px] justify-between"
          >
            {value ? value : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="relative w-[200px] p-0 max-h-[300px] overflow-scroll">
          <Command>
            <div className="fixed left-0 top-0 bg-white z-10 m-[1px] rounded-t-lg">
              <CommandInput placeholder={`search ${placeholder}..`} />
            </div>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="mt-12 overflow-hidden">
              {list.map((item) => (
                <CommandItem
                  key={item.name}
                  onSelect={() => {
                    setValue(item.name);
                    setOpen(false);
                    passDataHandler(item);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === item.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {item.name}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
