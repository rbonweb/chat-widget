import { useRef, useState } from 'react';
import Message from './components/Message';
import './style.css'

const BOT_IMG = "https://www.svgrepo.com/show/333724/bot.svg";
const PERSON_IMG = "https://www.svgrepo.com/show/532363/user-alt-1.svg";

function App() {

  const chatRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<any>([
    {
      name: "Bot",
      image: BOT_IMG,
      side: "left",
      message: "Hi, welcome to SimpleChat! Go ahead and send me a message. 😄"
    },
    {
      name: "Rohit",
      image: PERSON_IMG,
      side: "right",
      message: "Hello, World!"
    }
  ]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msgInput = document.querySelector(".msger-input") as HTMLInputElement;
    const msg = msgInput.value;
    if (!msg) return;

    const data = {
      name: "Rohit",
      image: PERSON_IMG,
      side: "right",
      message: msg
    };

    setMessages((prevState: any) => [...prevState, data]);
    msgInput.value = "";
    setTimeout(
      () => chatRef.current!.scrollIntoView({ behavior: "smooth" }),
      1
    );
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
          {messages.map((message: any, i: number) => (
            <Message key={i} data={message} />
          ))}
          <div ref={chatRef}></div>
        </main>

        <form className="msger-inputarea" onSubmit={submitHandler}>
          <input type="text" className="msger-input" placeholder="Enter your message..." />
          <button type="submit" className="msger-send-btn">Send</button>
        </form>
      </section >
    </>
  )
}

export default App
