import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";
import { GalleryLightbox } from "@/components/ui/GalleryLightbox";
import { fetchTable } from "@/lib/supabaseData";

type VentureRecord = {
  id: string;
  title?: string | null;
  image_url?: string | null;
  sort_order?: number | null;
};

const GallerySection = () => {
  const [ventures, setVentures] = useState<VentureRecord[]>([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  useEffect(() => {
    const loadData = async () => {
      const venturesData = await fetchTable<VentureRecord>("ventures", "sort_order");
      if (venturesData) setVentures(venturesData);
    };
    loadData();
  }, []);

  const ventureImages = ventures.map(v => v.image_url).filter(Boolean) as string[];
  
  // Fallback images if no ventures are loaded
  const fallbackImages = [
    "/assets/previous/1.JPG",
    "/assets/previous/2.JPG",
    "/assets/previous/3.JPG",
    "/assets/previous/4.JPG",
    "/assets/previous/5.jpg",
    "/assets/previous/6.jpg",
    "/assets/previous/7.jpg",
  ];

  const imagesToDisplay = ventureImages.length > 0 ? ventureImages : fallbackImages;

  const COLLAGE_AREAS = ["a", "b", "c", "d", "e", "f", "g"] as const;

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % imagesToDisplay.length);
    }
  };

  const handlePrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        selectedImageIndex === 0 ? imagesToDisplay.length - 1 : selectedImageIndex - 1
      );
    }
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  return (
    <section id="gallery" className="relative min-h-[70vh] md:min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 md:whitespace-nowrap">
            <ShinyText
              text="Our Previous Ventures"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              className="block"
            />
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 pb-8 md:pb-10">
        {imagesToDisplay.length >= 7 ? (
          <div
            className="grid gap-3 md:gap-4"
            style={{
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gridAutoRows: "200px",
              gridTemplateAreas: [
                '"a a b c"',
                '"a a d c"',
                '"e e f g"',
              ].join(" "),
            }}
          >
            {imagesToDisplay.slice(0, 7).map((imageUrl, index) => {
              const area = COLLAGE_AREAS[index];
              return (
                <motion.button
                  key={imageUrl + index}
                  type="button"
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                  onClick={() => handleImageClick(index)}
                  style={{ gridArea: area }}
                >
                  <img
                    src={imageUrl}
                    alt={`Gallery image ${index + 1}`}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {imagesToDisplay.map((imageUrl, index) => (
              <motion.button
                key={imageUrl + index}
                type="button"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={imageUrl}
                  alt={`Gallery image ${index + 1}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.button>
            ))}
          </div>
        )}
      </div>

      {selectedImageIndex !== null && (
        <GalleryLightbox
          images={imagesToDisplay}
          currentIndex={selectedImageIndex}
          onClose={handleClose}
          onNext={handleNext}
          onPrevious={handlePrevious}
        />
      )}
    </section>
  );
};

export default GallerySection;
