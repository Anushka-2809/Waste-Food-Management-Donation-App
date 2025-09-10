import React from 'react';
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

interface LocationDropdownProps {
  onLocationSelect: (location: string) => void;
  selectedLocation: string;
}

const kolkataLocations = [
  "All of Kolkata",
  "North Kolkata",
  "South Kolkata",
  "East Kolkata",
  "West Kolkata",
  "Salt Lake",
  "New Town",
  "Howrah",
  "Dum Dum",
  "Behala",
  "Garia",
  "Jadavpur",
  "Park Street",
  "Ballygunge",
  "Tollygunge",
  "Barasat",
  "Barrackpore",
  "Sodepur",
  "Kolkata Airport Area"
];

export default function LocationDropdown({ onLocationSelect, selectedLocation }: LocationDropdownProps) {
  return (
    <Select
      onValueChange={onLocationSelect}
      value={selectedLocation}
    >
      <SelectTrigger>
        <SelectValue placeholder="Select Area" />
      </SelectTrigger>
      <SelectContent>
        {kolkataLocations.map(location => (
          <SelectItem key={location} value={location}>
            <span className="flex items-center">
              <Check className={cn("mr-2 h-4 w-4", selectedLocation === location ? "opacity-100" : "opacity-0")}/>
              {location}
            </span>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
