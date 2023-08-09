function ImageItem(image) {
    return (
        <div className="item">
            <img src={image.img.urls.small} alt={image.img.alt_description} />
        </div>
    );
}

export default ImageItem;