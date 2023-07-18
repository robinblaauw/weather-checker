"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../../../src/lib/utils";
import { Button } from "../../../src/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "../../../src/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../src/components/ui/popover";

type DropdownProps = {
  placeholder: string;
  list: string[];
  setUpstreamValue: (val: string) => void;
};

export function Dropdown({
  placeholder,
  list = [],
  setUpstreamValue,
}: DropdownProps) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const passDataHandler = (val: string) => {
    setUpstreamValue(val);
  };

  return (
    <div className={list.length > 0 ? "" : "opacity-40 pointer-events-none"}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            {value ? value : placeholder}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="relative w-[200px] p-0 max-h-[300px] overflow-scroll">
          <Command>
            <div className="fixed left-0 top-0 bg-white z-10 m-[1px] rounded-t-lg">
              <CommandInput
                placeholder={`search ${placeholder.toLowerCase()}..`}
              />
            </div>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup className="mt-12 overflow-hidden">
              {list &&
                list.map((item) => (
                  <CommandItem
                    key={item}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                      passDataHandler(currentValue);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === item ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {item}
                  </CommandItem>
                ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
