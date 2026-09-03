import "server-only";

const CARCURO_TOKEN =
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

export type InventoryCar = {
  id: number;
  name: string;
  meta: string;
  price: number | null;
  mileage: number;
  year: string;
  fuel: string;
  ps: number;
  state: string;
  image: string | null;
  href: string;
};

export type InventoryResponse = {
  cars: InventoryCar[];
  total: number;
  error?: string;
};

export async function getCars(): Promise<InventoryResponse> {
  try {
    const response = await fetch(
      `https://app.carcuro.com/api/inventory/public/cars?company_token=${CARCURO_TOKEN}`,
      { next: { revalidate: 300 } },
    );

    if (!response.ok) {
      return { cars: [], total: 0, error: "Upstream error" };
    }

    const { cars }: { cars: RawCar[] } = await response.json();
    const normalizedCars = cars.map((car) => ({
      id: car.id,
      name: car.name_short,
      meta: car.model_meta,
      price: car.price,
      mileage: car.mileage,
      year: car.initial_registration_formatted,
      fuel: car.fuel_type,
      ps: car.power_ps,
      state: car.state,
      image: car.images?.[0] ?? null,
      href: `/${car.public_car_link.replace("www.autocenter-kaddoura.de/", "")}`,
    }));

    return { cars: normalizedCars, total: normalizedCars.length };
  } catch {
    return {
      cars: [],
      total: 0,
      error: "Inventory temporarily unavailable",
    };
  }
}
