import React from 'react';

const Gallery = (props) => {
  return (
    <section id="gallery">
      <div class="wrap">
        <h2>Issue Twenty</h2>
        <h3>A visual guide to the Southwest</h3>
        <div class="masonry">
          <img src="../images/gallery_1.jpg" alt="image1" />
          <img src="../images/gallery_3.jpg" alt="image2" />
          <img src="../images/gallery_4.jpg" alt="image3" />
          <img src="../images/gallery_2.jpg" alt="image4" />
          <img src="../images/gallery_5.jpg" alt="image5" />
          <img src="../images/gallery_6.jpg" alt="image6" />
        </div>
      </div>
    </section>
  )
}

export default Gallery;