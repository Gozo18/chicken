import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AdminTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[87px] py-2 px-1">Datum</TableHead>
          <TableHead className="w-[87px] py-2 px-1">Rozvoz</TableHead>
          <TableHead className="py-2 px-1">Zákazník</TableHead>
          <TableHead className="w-[87px] text-right py-2 px-1">Cena</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-sm">
        <TableRow className="bg-slate-100">
          <TableCell className="py-2 px-1">7.2.2024</TableCell>
          <TableCell className="py-2 px-1">14.2.2024</TableCell>
          <TableCell className="py-2 px-1">Krámek Budějovice</TableCell>
          <TableCell className="text-right py-2 px-1">92500,- Kč</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 px-1">7.2.2024</TableCell>
          <TableCell className="py-2 px-1">14.2.2024</TableCell>
          <TableCell className="py-2 px-1">Krámek Budějovice</TableCell>
          <TableCell className="text-right py-2 px-1">2500,- Kč</TableCell>
        </TableRow>
        <TableRow className="bg-slate-100">
          <TableCell className="py-2 px-1">7.2.2024</TableCell>
          <TableCell className="py-2 px-1">14.2.2024</TableCell>
          <TableCell className="py-2 px-1">Krámek Budějovice</TableCell>
          <TableCell className="text-right py-2 px-1">2500,- Kč</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 px-1">23.12.2023</TableCell>
          <TableCell className="py-2 px-1">30.12.2023</TableCell>
          <TableCell className="py-2 px-1">Krámek Budějovice</TableCell>
          <TableCell className="text-right py-2 px-1">2500,- Kč</TableCell>
        </TableRow>
        <TableRow className="bg-slate-100">
          <TableCell className="py-2 px-1">23.12.2023</TableCell>
          <TableCell className="py-2 px-1">30.12.2023</TableCell>
          <TableCell className="py-2 px-1">Krámek Budějovice</TableCell>
          <TableCell className="text-right py-2 px-1">2500,- Kč</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 px-1">23.12.2023</TableCell>
          <TableCell className="py-2 px-1">30.12.2023</TableCell>
          <TableCell className="py-2 px-1">Krámek Budějovice</TableCell>
          <TableCell className="text-right py-2 px-1">2500,- Kč</TableCell>
        </TableRow>
        <TableRow className="bg-slate-100">
          <TableCell className="py-2 px-1">23.12.2023</TableCell>
          <TableCell className="py-2 px-1">30.12.2023</TableCell>
          <TableCell className="py-2 px-1">Krámek Budějovice</TableCell>
          <TableCell className="text-right py-2 px-1">2500,- Kč</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 px-1">23.12.2023</TableCell>
          <TableCell className="py-2 px-1">30.12.2023</TableCell>
          <TableCell className="py-2 px-1">Krámek Budějovice</TableCell>
          <TableCell className="text-right py-2 px-1">2500,- Kč</TableCell>
        </TableRow>
        <TableRow className="bg-slate-100">
          <TableCell className="py-2 px-1">23.12.2023</TableCell>
          <TableCell className="py-2 px-1">30.12.2023</TableCell>
          <TableCell className="py-2 px-1">Krámek Budějovice</TableCell>
          <TableCell className="text-right py-2 px-1">2500,- Kč</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
