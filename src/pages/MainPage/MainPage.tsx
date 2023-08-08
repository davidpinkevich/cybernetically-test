import { useState } from "react";
import { MainButton } from "../../components/MainButton/MainButton";
import "./MainPage.scss";

export const MainPage = () => {
  const [clientsXY, setClientsXY] = useState({ x: 0, y: 0 });

  return (
    <>
      <div className="main__container">
        <main
          className="main"
          onMouseMove={(event) => {
            const { clientX, clientY } = event.nativeEvent;
            setClientsXY({ x: clientX, y: clientY });
          }}
          style={{
            transform: `translate(${clientsXY.x / 80}px, ${
              clientsXY.y / 80
            }px)`,
          }}
        ></main>
        <MainButton />
      </div>
    </>
  );
};
