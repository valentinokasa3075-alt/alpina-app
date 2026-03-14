type ExpertChatProps = {
  expertName: string;
  onClose: () => void;
};

export default function ExpertChat({ expertName, onClose }: ExpertChatProps) {

  return (

    <div className="help-overlay">

      <div className="help-box">

        <h2>Alpina Support Chat</h2>

        <p className="help-sub">
          {expertName} ist jetzt mit dir verbunden
        </p>

        <div className="chat-box">

          <div className="chat-message expert">
            👨‍🔧 {expertName}:  
            Hallo Valentino 👋  
            Wie kann ich dir mit deinem Alpina helfen?
          </div>

          <div className="chat-message user">
            Hallo, mein Motor zeigt eine Warnung.
          </div>

          <div className="chat-message expert">
            Danke für die Info.  
            Kannst du mir kurz ein Foto vom Display schicken?
          </div>

        </div>

        <button
          className="close-btn"
          onClick={onClose}
        >
          Chat schliessen
        </button>

      </div>

    </div>

  );

}