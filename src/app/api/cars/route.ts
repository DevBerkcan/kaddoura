export const revalidate = 300;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoxMTgxNSwiaWF0IjoxNzc2ODQ0ODU1LCJleHAiOjQ5MDEwNDcyNTV9.iaeWbHQSVBHeon5jYQPz4SN4u9ygqFOH__xbe6jha9w";

type RawCar = {
  id: number;
  name_short: string;
  model_meta: string;
  price: number | null;
  mileage: number;
  initial_registration_formatted: string;
  fuel_type: string;
  power_ps: number;
  state: string;
  images: string[];
  public_car_link: string;
};

export async function GET() {
  const res = await fetch(
    `https://app.carcuro.com/api/inventory/public/cars?company_token=${TOKEN}`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) {
    return Response.json({ error: "Upstream error" }, { status: 502 });
  }

  const { cars }: { cars: RawCar[] } = await res.json();

  return Response.json({
    cars: cars.map((c) => ({
      id: c.id,
      name: c.name_short,
      meta: c.model_meta,
      price: c.price,
      mileage: c.mileage,
      year: c.initial_registration_formatted,
      fuel: c.fuel_type,
      ps: c.power_ps,
      state: c.state,
      image: c.images?.[0] ?? null,
      href: `/${c.public_car_link.replace("www.autocenter-kaddoura.de/", "")}`,
    })),
    total: cars.length,
  });
}
