import React, {useState} from "react";

const ImageSlider = () => {
    const [currentImage, setCurrentImage] = useState(0);


    const handleNextImage = () => {
   if (currentImage < sliderData.length - 1) {
    setCurrentImage(currentImage + 1);
}
    }


const handlePreviousImage = () => {
   if(currentImage > 0) {
    setCurrentImage(currentImage - 1);
}
}

    const sliderData = [
    {
        id: 1,
        imageURL: 'https://www.stockvault.net/data/2011/05/31/124348/thumb16.jpg'
    },
    {
        id: 2,
        imageURL: 'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821__480.jpg'
    },
    {
        id: 3,
        imageURL: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?b=1&s=170667a&w=0&k=20&c=VqVR2PMyaneOTn8f6wgEgM2V-zsHCzFMk6Wnm_kAf_k='
    }
]


return <div style={{width: '50%'}}>
    <button onClick={() => {handlePreviousImage()}}>←</button>
    <img
    alt="" src = {sliderData[currentImage].imageURL}></img>
    <button onClick={() => {handleNextImage()}}>→</button>
</div>

}

export default ImageSlider;