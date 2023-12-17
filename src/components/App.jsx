import Chat from "./Chat";
import ChatForm from "./ChatForm";

import '../style/App.css'

const App = () => {
  return (
    <div className="chat">

      <div className="chat-container">

        <Chat>

          <ChatForm />

        </Chat>

      </div>
     
    </div>
  );
}




export default App;
