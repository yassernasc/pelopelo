import shuffle from "just-shuffle";
import { getAnimals } from "@/services/supabase";
import { getImages } from "@/services/cloudinary";
import { CatalogComponent } from "@/components";
import { formatPet } from "@/utils";

export const Catalog = async () => {
  let { data: pets } = await getAnimals();
  const images = await getImages();

  const filterImages = (pet) =>
    images.filter((i) => i.id == pet.id).map((image) => image.url);
  pets = pets.map((p) => ({ ...formatPet(p), images: filterImages(p) }));
  pets = shuffle(pets);

  return <CatalogComponent pets={pets} />;
};
