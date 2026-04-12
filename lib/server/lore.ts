import LoreType from "@/types/lore/loreType";
import Lore from "../db/models/lores";

export async function uploadLore(loreData: LoreType) {
  try {
    const savedLore = await new Lore(loreData).save();
    return savedLore as LoreType;
  } catch (err) {
    console.log("Error creating member:", err);
    return null;
  }
}

export async function getLoreById(id: string) {
  try {
    const lore = await Lore.findById(id);
    return lore;
  } catch (error) {
    console.error(`Error fetching lore with id ${id}:`, error);
    return null;
  }
}

export async function updateLore(loreData: Lore) {
  try {
    const updatedLore = await Lore.findByIdAndUpdate(loreData._id, loreData, {
      new: true,
    });
    return updatedLore;
  } catch (error) {
    console.error(`Error updating lore with id ${loreData._id}:`, error);
    return null;
  }
}

export async function deleteLore(id:string){
    try{
        await Lore.findByIdAndDelete(id);
        return true
    }catch (error) {
    console.error(`Error deleting lore with id ${id}:`, error);
    return false;
  }
}
