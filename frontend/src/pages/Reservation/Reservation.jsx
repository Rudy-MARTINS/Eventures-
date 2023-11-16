import { Icon } from "@iconify/react";
import "./Reservation.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import BasicModal from "../../components/Confirmation/Confirmation";
import useAllEventsContext from "../../contexts/AllEvents";

function Reservation() {
  const { dataEvents } = useAllEventsContext();
  const [counter, setCounter] = useState(0);
  const { id } = useParams();
  const finDevent = dataEvents.find((event) => event.uid === id);
  const [openModal, setOpenModal] = useState(false);

  const increase = () => {
    setCounter((count) => count + 1);
  };
  const decrease = () => {
    setCounter((count) => count - 1);
  };

  const [counterChild, setCounterChild] = useState(0);
  const increaseChild = () => {
    setCounterChild((count) => count + 1);
  };
  const decreaseChild = () => {
    setCounterChild((count) => count - 1);
  };
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <h1 className="titlebooking">Check available places</h1>
      <p className="prix">{finDevent.conditions_fr}</p>
      <article className="datetop">
        <Icon icon="uiw:date" color="#003049" width="20" />
        <button type="button">
          {new Date(finDevent.date1).toLocaleDateString()}
        </button>
        <button type="button">
          {new Date(finDevent.date2).toLocaleDateString()}
        </button>
      </article>
      <div className="counter-adult">
        <h4>adult ticket</h4>
        <div className="adultickets">
          <button className="adultticketdesc" type="button" onClick={decrease}>
            -
          </button>
          <span className="counteradultticket">{counter}</span>
          <button className="adultticketasc" type="button" onClick={increase}>
            +
          </button>
        </div>
      </div>
      <div className="counter-adult">
        <h4>child ticket</h4>
        <div className="adultickets">
          <button
            className="adultticketdesc"
            type="button"
            onClick={decreaseChild}
          >
            -
          </button>
          <span className="counteradultticket">{counterChild}</span>
          <button
            className="adultticketasc"
            type="button"
            onClick={increaseChild}
          >
            +
          </button>
        </div>
      </div>
      <div className="hours-container">
        <h3>Choose the time</h3>
        <ol className="hours-list">
          <button type="button">10h00</button>
          <button type="button">13h00</button>
          <button type="button">15h00</button>
          <button type="button">19h00</button>
        </ol>
      </div>
      <button className="bookend" type="button" onClick={handleOpenModal}>
        BOOK TICKET
      </button>
      <BasicModal open={openModal} handleClose={handleCloseModal} />
    </>
  );
}
export default Reservation;
