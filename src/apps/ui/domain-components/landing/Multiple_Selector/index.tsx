import { useState } from "react";

import { Check, ChevronDown } from "lucide-react";

import { Badge } from "@/shadcn/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcn/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shadcn/components/ui/popover";
import { cn } from "@/shadcn/lib/utils";

export type MultipleSelectorProps = {
  items: string[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  searchOption?: boolean;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
};

export const MultipleSelector = ({
  items,
  selectedValues,
  onSelectionChange,
  searchOption = false,
  placeholder = "시간을 선택해주세요",
  searchPlaceholder = "시간 검색...",
  emptyMessage = "해당하는 시간이 없습니다.",
}: MultipleSelectorProps) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (value: string) => {
    if (selectedValues.includes(value)) {
      return handleRemove(value);
    }

    /// 시간순대로 재배열
    const sortedValues = [...selectedValues, value].sort((a, b) => {
      const aIndex = items.indexOf(a);
      const bIndex = items.indexOf(b);
      return aIndex - bIndex;
    });

    onSelectionChange(sortedValues);
  };

  const handleRemove = (value: string) => {
    onSelectionChange(selectedValues.filter((v) => v !== value));
  };

  const selectedLabels = selectedValues.map((value) =>
    items.find((item) => item === value),
  );

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <div className="flex w-full items-center justify-between rounded-md border border-gray-200 p-2 shadow-sm">
            <div className="flex flex-wrap gap-1">
              {selectedValues.length === 0 ? (
                <span className="text-muted-foreground">{placeholder}</span>
              ) : (
                selectedLabels.map((label) => (
                  <Badge
                    key={label}
                    variant="secondary"
                    className="mr-1 mb-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemove(label || "");
                    }}
                  >
                    {label}
                    <span className="hover:text-destructive ml-1 cursor-pointer">
                      ×
                    </span>
                  </Badge>
                ))
              )}
            </div>

            <ChevronDown className="size-4 text-gray-400" />
          </div>
        </PopoverTrigger>

        <PopoverContent
          side="top"
          avoidCollisions={false}
          className="w-[var(--radix-popover-trigger-width)] p-0"
          onOpenAutoFocus={(e) => {
            e.preventDefault();
          }}
        >
          <Command>
            {searchOption && <CommandInput placeholder={searchPlaceholder} />}
            <CommandList className="max-h-[200px]">
              <CommandEmpty>{emptyMessage}</CommandEmpty>
              <CommandGroup>
                {items.map((value, index) => (
                  <CommandItem key={index} onSelect={() => handleSelect(value)}>
                    <Check
                      className={cn(
                        "h-4 w-4",
                        selectedValues.includes(value)
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {value}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};
