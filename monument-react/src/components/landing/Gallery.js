import galleryOne from "../../images/gallery_1.jpg";
import galleryTwo from "../../images/gallery_2.jpg";
import galleryThree from "../../images/gallery_3.jpg";
import galleryFour from "../../images/gallery_4.jpg";
import galleryFive from "../../images/gallery_5.jpg";
import gallerySix from "../../images/gallery_6.jpg";

const Gallery = (props) => {
  return (
    <section id="gallery">
      <div className="wrap">
        <h2>Issue Twenty</h2>
        <h3>A visual guide to the Southwest</h3>
        <div className="masonry">
          <img src={galleryOne} alt="image1" />
          <img src={galleryTwo} alt="image2" />
          <img src={galleryThree} alt="image3" />
          <img src={galleryFour} alt="image4" />
          <img src={galleryFive} alt="image5" />
          <img src={gallerySix} alt="image6" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
