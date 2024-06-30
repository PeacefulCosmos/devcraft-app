import Card from "@/components/cards";
import Link from "next/link";

export default function Notifications() {
  return (
    <>
      <Card>
        <div>Notification</div>
        <Link href="/complex-dashboard/archived">Archived</Link>
      </Card>
    </>
  );
}
