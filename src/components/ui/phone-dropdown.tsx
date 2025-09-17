import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { cn } from "@lib/utils/cn.utils";
import EgIcon from "@public/icons/eg";
import KsaIcon from "@public/icons/ksa";

export default function PhoneDropdown({ disabled }: { disabled?: boolean }) {
  return (
    <Select disabled={disabled}>
      <SelectTrigger className={cn("h-full w-fit outline-none")}>
        <SelectValue
          className={cn("flex items-center")}
          placeholder={
            <span className={cn("flex items-center gap-2")}>
              <EgIcon /> EG{"(+20)"}
            </span>
          }
        />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectItem value="EG(+20)">
          <span className={cn("flex items-center gap-2")}>
            <EgIcon /> EG{"(+20)"}
          </span>
        </SelectItem>
        <SelectItem value="KSA(+966)" disabled={true}>
          <span className={cn("flex items-center gap-2")}>
            <KsaIcon /> KSA{"(+966)"}
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
