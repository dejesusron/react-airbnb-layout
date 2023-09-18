import "../style/gallery.css"

function Gallery() {
    return (
        <div className="gallery">
            <div className="img-container">
                <img src="./public/assets/images.png" alt="images" />
            </div>

            <div className="text-container">
                <h1 className="heading">Online Experiences</h1>
                <p className="text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    )
}

export default Gallery