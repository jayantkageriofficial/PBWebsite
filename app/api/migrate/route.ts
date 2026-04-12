import { Lores } from "@/app/lore/data/data";
import Lore from "@/lib/db/models/lores";
import LoreType from "@/types/lore/loreType";
import { NextResponse } from "next/server";

export async function GET(){
    Lores.forEach((lore:LoreType)=>{
    const data = new Lore();
    data.images = lore.images
    data.title = lore.title
    data.date = lore.date
    data.location = lore.location
    data.preview  = lore.preview
    data.story = lore.story
    data.save()

})
    return NextResponse.json({Migration:"Complete!"},{status:200})
}
