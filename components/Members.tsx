import Card from "./Card";

interface Member {
  id?: string;
  name: string;
  role: string;
  company?: string;
  year: string;
  linkedInUrl?: string;
  imageUrl?: string;
}

const headings = [
  "Current Leads",
  "Alumni Leads",
  "Alumni",
  "Fourth Year",
  "Third Year",
  "Second Year",
  "First Year",
]

export default function Members(){
    return(<main className="flex gap-4">
   
    <Card name="Dhruv Puri" linkedInUrl="http" imageUrl="https://www.pointblank.club/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fpbsite%2Fimage%2Fupload%2Ff_webp%2Fv1746357814%2Fpbmembers%2FDhruv%2520Puri-1746357812673.jpg&w=1920&q=75" role="Devops" company="Aspora" />
    <Card name="Yuvraj Shorewala"  linkedInUrl='http' imageUrl="https://www.pointblank.club/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fpbsite%2Fimage%2Fupload%2Ff_webp%2Fv1768917424%2Fpbmembers%2FYuvraj%2520Shorewala-1768917421428.jpg&w=1920&q=75" role="Devops" company="Aspora" />
     </main>
    )
}
