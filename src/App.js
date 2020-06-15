import React, { useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Card from "./components/Card";
import Header from "./components/Header";
export default function App() {
  const [data, setData] = useState([]);
  const newCard = () => {
    let list = [...data];
    list.push({
      id: data.length + 1,
      title: `Card ${data.length + 1}`,
      desc:
        "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
      status: "todo"
    });
    setData(list);
  };
  useEffect(() => {
    let data = Array.from({ length: 5 }, (_v, k) => {
      return {
        id: k + 1,
        title: `Card ${k + 1}`,
        desc:
          "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum ",
        status: k + 1 < 2 ? "todo" : k + 1 < 4 ? "development" : "done"
      };
    });
    setData(data);
  }, []);

  return (
    <div className="App">
      <Header
        header="Dashboard"
        add={() => {
          newCard();
        }}
      />
      <main className="flexbox">
        <Board id="b_1" backgroundColor="#F4E8C1" title="To Do">
          {data
            .filter(d => d.status === "todo")
            .map(d => {
              return (
                <Card id={`c_${d.id}`}>
                  <b>{d.title}</b>
                  <p>{d.desc}</p>
                </Card>
              );
            })}
        </Board>
        <Board id="b_2" backgroundColor="#F79D5C" title="Development">
          {data
            .filter(d => d.status === "development")
            .map(d => {
              return (
                <Card id={`c_${d.id}`}>
                  <b>{d.title}</b>
                  <p>{d.desc}</p>
                </Card>
              );
            })}
        </Board>
        <Board id="b_3" backgroundColor="#83BCFF" title="Testing">
          {data
            .filter(d => d.status === "testing")
            .map(d => {
              return (
                <Card id={`c_${d.id}`}>
                  <b>{d.title}</b>
                  <p>{d.desc}</p>
                </Card>
              );
            })}
        </Board>
        <Board id="b_4" title="Done">
          {data
            .filter(d => d.status === "done")
            .map(d => {
              return (
                <Card id={`c_${d.id}`}>
                  <b>{d.title}</b>
                  <p>{d.desc}</p>
                </Card>
              );
            })}
        </Board>
      </main>
    </div>
  );
}
