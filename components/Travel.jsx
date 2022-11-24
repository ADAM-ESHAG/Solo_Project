import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';


export default function Travel (props) {
    return (
        <div className='travel'>
            
            <div className='travel--content'>
                <img src={props.item.imageUrl} alt="image" className='travel--content--img'/>
                <div className='description'>
                    <div className='location'>
                        <FontAwesomeIcon icon={faLocationDot} className="location--icon"/>
                        <p><strong className='location--country'>{props.item.location}</strong></p>
                        <a target="blank" href={props.item.googleMapsUrl}>View on Google Map</a>
                    </div>
                    <div className='place--name'>
                        <h2>{props.item.title}</h2>
                        <p><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
                        <p>{props.item.description}</p>

                    </div>

                </div>
            </div>
            <hr />
        </div>
    )
}