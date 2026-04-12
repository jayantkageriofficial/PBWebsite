import { Lores } from  "../../../app/lore/data/data";
import Lore from "../models/lores";
import connectDB from "../connection";
import LoreType from "../../../types/lore/loreType";

connectDB()
Lores.forEach((lore:LoreType)=>{
    let data = new Lore();
    data.title = lore.title
    data.date = lore.date
    data.location = lore.location
    data.preview  = lore.preview
    data.story = lore.story
    data.image = lore.images
    data.save()
})
