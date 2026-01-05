import { useState } from "react";
import "./App.css";

const memories = [
  { id: 1, image: "/images/main.png", text: "Manifesting for this summer!! I hope we'll spend next summer in the Bay Area(LOS GATOS!!!!), u already have housing and loan paid " },
  { id: 2, image: "/images/arisha2.jpg", text: "Who else will drink my portion of wine now.." },
  { id: 3, image: "/images/arisha3.jpg", text: "Las Flores try 1 failed, will go on my own next semester to find the blue top:(" },
  { id: 4, image: "/images/arisha4.jpg", text: "Taiwan core memory :3" },
  { id: 5, image: "/images/arisha5.jpg", text: "Только с тобой в кафешках мне жуков в кофе кидают.." },
  { id: 6, image: "/images/arisha6.jpg", text: "My fav breakfast last semester, i already miss" },
  { id: 7, image: "/images/arisha7.jpg", text: "что тут каипринхас с вами сделала.." },
  { id: 8, image: "/images/arisha8.jpg", text: "she is looking at her bright future" },
  { id: 9, image: "/images/arisha9.png", text: "BRAZILLLLL, i'm so happy for this trip!!" },
  { id: 10, image: "/images/arisha11.png", text: "к кому теперь буду приходить учиться в комнату.." },
  { id: 11, image: "/images/arisha12.png", text: "мой самый первый клиент хихи" },
  { id: 12, image: "/images/arisha13.png", text: "мы тут ебашили презенташку для рисерча как обычно за день в твоей комнате" },
  { id: 13, image: "/images/arisha14.png", text: "first failed night out in ba" },
  { id: 14, image: "/images/arisha15.png", text: "такая бэйбиик тут" },
  { id: 15, image: "/images/arisha16.png", text: "С кем теперь мэтчинг аутфиты будут.." },
  { id: 16, image: "/images/arisha17.png", text: "Ummmmm" },
  { id: 17, image: "/images/arisha18.png", text: "Last weeks in taipei, we got waffles before our stupid meeting for research:(" }
];

function App() {
  const [openId, setOpenId] = useState(null);
  const [page, setPage] = useState("cover");

  return (
    <div className="container">
      {/* COVER PAGE */}
      {page === "cover" && (
      <div className="cover">
        <div className="polaroid">
          <img src="/images/arisha1.png" alt="cover" />
          <p className="caption">for arisha 🤍</p>
        </div>

        <img
          src="/images/arrow.png"
          alt="arrow"
          className="arrow-doodle"
        />

        <button
          className="arrow-btn heart-btn"
          onClick={() => setPage("gallery")}
        >
        <span className="hearts">♡ ♡</span>
        open scrapbook
        <span className="hearts">♡ ♡</span>
      </button>

      </div>
      )}



      {/* GALLERY PAGE */}
      {page === "gallery" && (
        <>
          <h1 className="gallery-title"> Some little postcards 🤍🤍 (click on them) </h1>


          <div className="grid">
            {memories.map((memory) => (
              <div
                key={memory.id}
                className="card"
                style={{ transform: `rotate(${Math.random() * 6 - 3}deg)` }}
                onClick={() =>
                  setOpenId(openId === memory.id ? null : memory.id)
                }
              >

                <img src={memory.image} alt="memory" />

                {openId === memory.id && (
                  <p className="memory-text">{memory.text}</p>
                )}
              </div>
            ))}
          </div>
            {/* BOTTOM ARROW + BUTTON */}
          <div className="gallery-end">
            <img
              src="/images/arrow.png"
              alt="arrow"
              className="arrow-doodle"
            />

            <button
              className="arrow-btn heart-btn"
              onClick={() => setPage("end")}
            >
              <span className="hearts">♡ ♡</span>
              one more thing
              <span className="hearts">♡ ♡</span>
            </button>
          </div>
        </>
)}


      {/* END PAGE */}
      {page === "end" && (
        <div className="cover">
          <div className="polaroid">
            <p className="caption">
              I hope you will have greaattt semester in India, and I already miss you!! 
              I am SO SO SO grateful that you decided to email that questionable professor from NTU and we did the research together, and we already survived one long distance friendship, so here comes another one..
              ♡ ♡ LOVE U ARISHAAA ♡ ♡
            </p>
          </div>

          <button
            className="arrow-btn heart-btn"
            onClick={() => setPage("cover")}
          >
            <span className="hearts">♡</span>
            back to the beginning
            <span className="hearts">♡</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
