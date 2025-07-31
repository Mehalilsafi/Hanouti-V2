





import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
 
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { wilayas } from "../../../../shared/constants/wilayas";
function HomeDelivery() {
  return (
 <div className="max-h-[300px] overflow-y-auto border rounded">
                <Table className="">
                  <TableCaption>A list of your recent invoices.</TableCaption>
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
                          <Input
                            type="text"
                            placeholder="800"
                          
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
  )
}

export default HomeDelivery