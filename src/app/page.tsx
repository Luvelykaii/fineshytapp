import Link from "next/link";

const mockUrls = ["https://fpxpyeb2ws.ufs.sh/f/UobanYi8SenlKdwJ1P9Se6ZLq4bDysQ2wpEXTgiOWxt7knrF", 
  "https://fpxpyeb2ws.ufs.sh/f/UobanYi8SenlbpVOa9sQlFU7PK1uyXZ2jAhHWEcotNgMLT8J", 
  "https://fpxpyeb2ws.ufs.sh/f/UobanYi8SenlmHVUULrnDVjgom78Bc3xZPYitQuSsGApMkNF" ]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));




export default function HomePage() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#fec5e5] to-[#fd6c9e] text-white">
			<div className="flex flex-wrap gap-10">{
      mockImages.map((image) => (
        <div key ={image.id} className="w-58">
          <img src={image.url} alt="image" />
        </div>
      ))
    }
    </div>

		</main>
	); 
}