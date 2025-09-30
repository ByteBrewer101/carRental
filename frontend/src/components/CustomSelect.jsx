import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo({setUser}) {
  return (
    <Select
      onValueChange={(value) => {
        setUser(value);
      }}
    >
      <SelectTrigger className="w-full text-white  ">
        <SelectValue placeholder="Select your role" />
      </SelectTrigger>
      <SelectContent className="dark">
        <SelectGroup>
          <SelectItem value="user">User</SelectItem>
          <SelectItem value="seller">Seller</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
