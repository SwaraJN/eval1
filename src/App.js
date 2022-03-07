// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [book, setbook] = useState(0)

  const handleb = (value) => {
    setbook(book + value)
  }

  const [pen, setpen] = useState(0)

  const handpen = (value) => {
    setpen(pen + value)
  }

  const [note, setnote] = useState(0)

  const handnote = (value) => {
    setnote(note + value)
  }

  const [ink, setink] = useState(0)

  const handink = (value) => {
    setink(ink + value)
  }
  return (

    <div className="items">

      <span>Books:{book}</span>
      <button className="addBook" onClick={() => {
        handleb(1)
      }}>
        Add button
      </button>
      <button className="remBook" onClick={() => {
        handleb(-1)
      }}>
        Subtract
      </button>
      <span className="totalBooks">Total count{book}</span>

      <br />

      <span>Pens:{pen}</span>
      <button className="addPen" onClick={() => {
        handpen(1)
      }}>
        Add button
      </button>
      <button className="remPen" onClick={() => {
        handpen(-1)
      }}>
        Subtract
      </button>
      <span className="totalPens">Total count{pen}</span>

      <br />

      <span>Notebooks:{note}</span>
      <button className="addNotebook" onClick={() => {
        handnote(1)
      }}>
        Add button
      </button>
      <button className="remNotebook" onClick={() => {
        handnote(-1)
      }}>
        Subtract
      </button>
      <span className="totalNotebooks">Total count{note}</span>

      <br />

      <span>InkPens:{ink}</span>
      <button className="addInkpen" onClick={() => {
        handink(1)
      }}>
        Add button
      </button>
      <button className="remInkpen" onClick={() => {
        handink(-1)
      }}>
        Subtract
      </button>
      <span className="totalInkpens">Total count{ink}</span>

      <div className="total">{ }</div>

    </div>
  );
}

export default App;