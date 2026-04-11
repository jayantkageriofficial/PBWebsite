"use server";

import { cookies } from "next/headers";
import { verifyToken } from "@/lib/operations/auth";
import { uploadImage, deleteImage, UploadModule } from "@/lib/cloudinary";

const VALID_MODULES: UploadModule[] = ["events", "members", "lore", "talks"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

export async function uploadImageAction({
  module,
  file,
}: {
  module: UploadModule;
  file: File;
}): Promise<{ url: string } | { error: string }> {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return { error: "Unauthorized" };

  const user = await verifyToken(session);
  if (!user) return { error: "Unauthorized" };

  if (!module || !VALID_MODULES.includes(module)) {
    return {
      error: `Invalid module. Must be one of: ${VALID_MODULES.join(", ")}`,
    };
  }

  if (!file) return { error: "No file provided" };
  if (!file.type.startsWith("image/"))
    return { error: "File must be an image" };
  if (file.size > MAX_FILE_SIZE) return { error: "File exceeds 10 MB limit" };

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const url = await uploadImage(buffer, module as UploadModule);
    return { url };
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return { error: "Failed to upload image" };
  }
}

export async function deleteImageAction(
  publicId: string,
): Promise<{ success: true } | { error: string }> {
  const cookieStore = await cookies();
  const session = cookieStore.get("session")?.value;

  if (!session) return { error: "Unauthorized" };

  const user = await verifyToken(session);
  if (!user) return { error: "Unauthorized" };

  try {
    await deleteImage(publicId);
    return { success: true };
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    return { error: "Failed to delete image" };
  }
}
