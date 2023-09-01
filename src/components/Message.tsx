import { formatDate } from "../utils/helpers"

const Message = ({ data }: {
  data: {
    name: string,
    image: string,
    side: string,
    message: string
  }
}) => {
  return (
    <div className={`msg ${data.side}-msg`}>
      <div
        className="msg-img"
      >
        <img src={data.image} alt={data.name} width={40} height={40} />
      </div>

      <div className="msg-bubble">
        <div className="msg-info">
          <div className="msg-info-name">{data.name}</div>
          <div className="msg-info-time">{formatDate(new Date())}</div>
        </div>

        <div className="msg-text">
          {data.message}
        </div>
      </div>
    </div>
  )
}

export default Message