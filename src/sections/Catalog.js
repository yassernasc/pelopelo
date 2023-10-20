import { getAnimals } from "@/services/supabase";
import { getImages } from "@/services/cloudinary";
import { CatalogComponent } from "@/components";

export const Catalog = async () => {
  let { data: pets } = await getAnimals();
  const images = await getImages();

  const getImage = (pet) => images.find((i) => i.id == pet.id).url;
  pets = pets.map((p) => ({ ...p, image: getImage(p) }));

  return <CatalogComponent pets={pets} />;
};
