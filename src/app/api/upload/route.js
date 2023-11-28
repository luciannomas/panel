import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

// hacer variables globales
cloudinary.config({ 
  cloud_name: 'dvi5buwpj', 
  api_key: '379982982437635', 
  api_secret: 'KveShGtT3hxMst7A5M7IVKroLMg' 
});

export async function POST(request) {
  const data = await request.formData();
  const image = data.get("image");
 
  if (!image) {
    return NextResponse.json("no se ha subido ninguna imagen", { status: 400 });
  }

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Guardar en un archivo a carpeta public
  // const filepath = path.join(process.cwd(), "public", image.name);
  // await writeFile(filepath, buffer)

  // Toma de disco interno y sube a cloudinary con previo archivo cargado en local.
   // const response = await cloudinary.uploader.upload(filepath);

  const response = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream({}, (err, result) => {
        if (err) {
          reject(err);
        }

        resolve(result);
      })
      .end(buffer);
  });

// guardar en base de datos mongo
  console.log(response.secure_url)

  return NextResponse.json({
    message: "imagen subida",
    url: response.secure_url,
  });
}
