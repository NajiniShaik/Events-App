import './index.css'

const EventItem = props => {
  const {eventDetails, onChangeState, activeEvent} = props

  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => {
    onChangeState(id)
  }

  const isActive = activeEvent === id ? 'active-event' : ''

  return (
    <li className="event-item">
      <button className="event-button" type="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className={`event-img ${isActive}`} />
      </button>
      <p className="event-name">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
