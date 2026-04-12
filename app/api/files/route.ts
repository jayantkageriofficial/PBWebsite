import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/server/auth";
import { uploadImage, deleteImage, UploadModule } from "@/lib/cloudinary";

const VALID_MODULES: UploadModule[] = ["events", "members", "lore", "talks"];
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

/*
 * POST /api/files
 *   Body: FormData { module: UploadModule, file: File }
 *   Header: { Authorization: "Bearer <token>" }
 */
export async function POST(request: Request) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await verifyToken(token);
  if (!user?.email)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await request.formData();
  const module = formData.get("module") as UploadModule;
  const file = formData.get("file") as File | null;

  if (!module || !VALID_MODULES.includes(module))
    return NextResponse.json(
      { error: `Invalid module. Must be one of: ${VALID_MODULES.join(", ")}` },
      { status: 400 },
    );

  if (!file)
    return NextResponse.json({ error: "No file provided" }, { status: 400 });

  if (!file.type.startsWith("image/"))
    return NextResponse.json(
      { error: "File must be an image" },
      { status: 400 },
    );

  if (file.size > MAX_FILE_SIZE)
    return NextResponse.json(
      { error: "File exceeds 10 MB limit" },
      { status: 400 },
    );

  const buffer = Buffer.from(await file.arrayBuffer());

  try {
    const url = await uploadImage(buffer, module);
    return NextResponse.json({ url }, { status: 201 });
  } catch (error) {
    console.error("Cloudinary upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload image" },
      { status: 500 },
    );
  }
}

/*
 * DELETE /api/files
 *   Body: JSON { publicId: string }
 *   Header: { Authorization: "Bearer <token>" }
 */
export async function DELETE(request: Request) {
  const authHeader = request.headers.get("Authorization");
  const token = authHeader?.split(" ")[1];
  if (!token)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await verifyToken(token);
  if (!user?.email)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { publicId } = await request.json();
  if (!publicId)
    return NextResponse.json({ error: "publicId is required" }, { status: 400 });

  try {
    await deleteImage(publicId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Cloudinary delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 },
    );
  }
}
