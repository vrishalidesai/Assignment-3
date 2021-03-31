import React from'react'
import img1 from '../assets/artwork_1.jpg';
import img2 from '../assets/artwork_2.jpg';
import img3 from '../assets/artwork_3.jpg';
import img4 from '../assets/artwork_4.jpg';
import img5 from '../assets/artwork_5.jpg';
import img6 from '../assets/artwork_6.jpg';
import img7 from '../assets/artwork_7.jpg';
import img8 from '../assets/artwork_8.jpg';
import img9 from '../assets/artwork_9.jpg';
import img10 from '../assets/artwork_10.jpg';
import img11 from '../assets/artwork_11.jpg';
import img12 from '../assets/artwork_12.jpg';
import img13 from '../assets/artwork_13.jpg';
import img14 from '../assets/artwork_14.jpg';
import img15 from '../assets/artwork_15.jpg';
import img16 from '../assets/artwork_16.jpg';
import img17 from '../assets/artwork_17.jpg';
import img18 from '../assets/artwork_18.jpg';
import img19 from '../assets/artwork_19.jpg';
import img20 from '../assets/artwork_20.jpg';
import {Link} from 'react-router-dom';



const Home =()=>{
return(
<>
<h2 className="text-center mt-4 text-bold">Artwork Gallery</h2>
<div class="container">
      <figure>
        <Link to= "/artworkdetail">
        <img src={img1} alt="image1"/>
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img2} alt="image2" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img3} alt="image3" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img4} alt="image4" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img5} alt="image5" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img6} alt="image6" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img7} alt="image7" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img8} alt="image8" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img9} alt="image9" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img10} alt="image10" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img11} alt="image11" />
        <figcaption>Title</figcaption>
        </Link>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img12} alt="image12" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img13} alt="image13" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img14} alt="image14" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img15} alt="image15" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img16} alt="image16" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img17} alt="image17" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img18} alt="image18" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img19} alt="image19" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        <figure>
        <Link to= "/artworkdetail">
        <img src={img20} alt="image20" />
        </Link>
        <figcaption>Title</figcaption>
        </figure>

        
        
        </div>
</> 
);
}

export default Home;
