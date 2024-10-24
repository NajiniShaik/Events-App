import './index.css'

const statusConstants = {
  initial: 'INITIAL',
  notRegistered: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  closed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const emptyMsg = () => (
    <div className="empty-container">
      <p className="empty-container-msg">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const registered = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="success-img"
      />
      <h1 className="event-successful-msg">
        You have already registered for the event
      </h1>
    </div>
  )

  const registrationsClosed = () => (
    <div className="container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="img"
      />

      <h1 className="registration-title">Registrations Are Closed Now!</h1>
      <p className="caption">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const register = () => (
    <div className="container register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png "
        alt="yet to register"
        className="img"
      />

      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="btn" type="button">
        Register Here
      </button>
    </div>
  )

  const switchContainer = () => {
    switch (eventStatus) {
      case statusConstants.initial:
        return emptyMsg()
      case statusConstants.notRegistered:
        return register()
      case statusConstants.registered:
        return registered()
      case statusConstants.closed:
        return registrationsClosed()
      default:
        return null
    }
  }

  const isActive =
    eventStatus !== 'INITIAL' ? 'active-registration-container' : ''

  return (
    <div className={`event-registration-detailed-container ${isActive}`}>
      {switchContainer()}
    </div>
  )
}

export default ActiveEventRegistrationDetails
