import './style.css'

function App() {
  const BOT_MSGS = [
    "Hi, how are you?",
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    "Sorry if my answers are not relevant. :))",
    "I feel sleepy! :("
  ];

  const BOT_IMG = "https://www.svgrepo.com/show/333724/bot.svg";
  const PERSON_IMG = "https://www.svgrepo.com/show/532363/user-alt-1.svg";
  const BOT_NAME = "BOT";
  const PERSON_NAME = "Rohit";

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msgInput = document.querySelector(".msger-input") as HTMLInputElement;
    const msg = msgInput.value;
    if (!msg) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msg);
    msgInput.value = "";

    botResponse();
  }

  const appendMessage = (name: string, img: string, side: string, text: string) => {
    const msgHTML = `
      <div class="msg ${side}-msg">
        <div
          class="msg-img"
          style="background-image: url(${img})"
        ></div>

        <div class="msg-bubble">
          <div class="msg-info">
            <div class="msg-info-name">${name}</div>
            <div class="msg-info-time">${formatDate(new Date())}</div>
          </div>

          <div class="msg-text">${text}</div>
        </div>
      </div>
    `;

    document.querySelector(".msger-chat")!.insertAdjacentHTML("beforeend", msgHTML);
    document.querySelector(".msger-chat")!.scrollTop += 500;
  }

  const botResponse = () => {
    const r = random(0, BOT_MSGS.length - 1);
    const msgText = BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
      appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
    }, delay);
  }

  const formatDate = (date: Date) => {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
  }

  const random = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
  }

  return (
    <>
      <section className="msger">
        <header className="msger-header">
          <div className="msger-header-title">
            <i className="fas fa-comment-alt"></i> SimpleChat
          </div>
          <div className="msger-header-options">
            <span><i className="fas fa-cog"></i></span>
          </div>
        </header>

        <main className="msger-chat">
          <div className="msg left-msg">
            <div
              className="msg-img"
            >
              <img src={BOT_IMG} alt="Bot Image" width={50} height={50} />
            </div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">BOT</div>
                <div className="msg-info-time">{formatDate(new Date())}</div>
              </div>

              <div className="msg-text">
                Hi, welcome to SimpleChat! Go ahead and send me a message. 😄
              </div>
            </div>
          </div>

          <div className="msg right-msg">
            <div
              className="msg-img"
            >
              <img src={PERSON_IMG} alt="Bot Image" width={50} height={50} />
            </div>

            <div className="msg-bubble">
              <div className="msg-info">
                <div className="msg-info-name">Rohit</div>
                <div className="msg-info-time">{formatDate(new Date())}</div>
              </div>

              <div className="msg-text">
                You can change your name in JS section!
              </div>
            </div>
          </div>
        </main>

        <form className="msger-inputarea" onSubmit={submitHandler}>
          <input type="text" className="msger-input" placeholder="Enter your message..." />
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
      </section>
    </>
  )
}

export default App
