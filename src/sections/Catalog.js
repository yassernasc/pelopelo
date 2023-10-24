import { getAnimals } from "@/services/supabase";
import { CatalogComponent } from "@/components";

export const Catalog = async () => {
  const pets = await getAnimals();
  return <CatalogComponent pets={pets} />;
};
