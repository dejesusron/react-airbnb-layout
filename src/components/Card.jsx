import "../style/card.css"

function Card( props ) {

    console.log(props.item)

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="open-spots">{badgeText}</div>}

            <div className="img-container">
                <img src={`./public/assets/${props.item.coverImg}`} alt="image" />
            </div>

            <div className="detail-container">
                <p className="text"><i class="fa-solid fa-star"></i>{props.item.stats.rating} <span className="gray-text">({props.item.stats.reviewCount}) • {props.item.location}</span></p>
                <p className="text">{props.item.title}</p>
                <p className="text"><span className="bold">From ${props.item.price} / </span> person</p>
            </div>
        </div>
    )
}

export default Card