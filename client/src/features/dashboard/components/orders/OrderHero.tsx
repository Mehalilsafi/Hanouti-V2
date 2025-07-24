import React from "react";
import { PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";
import EmptyOrder from "./EmptyOrder";
import OrdersTable from "./OrdersTable";
function OrderHero() {
  const Orders: string = [""];
   return <div>{Orders.length > 0 ? <OrdersTable /> : <EmptyOrder />}</div>;
}

export default OrderHero;
