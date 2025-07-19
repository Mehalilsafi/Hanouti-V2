
import React, { useState } from "react";
import {
  PlusCircle,
  House,
  Home,
  Warehouse,
  Truck,
  MapPin,
  DollarSign,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { wilayas } from "../../../../shared/constants/wilayas";
function StopDeskDelivery() {
  return (
   <div className="max-h-[300px] overflow-y-auto border rounded">
                <Table className="">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Code</TableHead>
                      <TableHead>Name</TableHead>

                      <TableHead className="text-right">Price</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {wilayas.map((wilaya) => (
                      <TableRow key={wilaya.code}>
                        <TableCell className="font-medium">
                          {wilaya.code}
                        </TableCell>
                        <TableCell>{wilaya.name}</TableCell>

                        <TableCell className="text-right">
                          <Input type="text" placeholder="800" />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
  )
}

export default StopDeskDelivery