import { getCars } from "@/lib/cars";

export async function GET() {
  const inventory = await getCars();
  return Response.json(inventory, { status: inventory.error ? 503 : 200 });
}
