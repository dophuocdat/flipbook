import { forwardRef, useState } from "react";
import "./Pages.css";
const Pages = forwardRef((props, ref) => {
  return (
    <>
      <div
        className={`demoPage shadow-black shadow-lg bg-red-200 ${props.class}`}
        ref={ref}
      >
        {/* <p>Page {props.number}</p> */}
        <div className="py-2">
          <div className={`girdContainer`}>
            {props.image.map((item, index) => (
              <img
                src={item}
                alt="loading..."
                className={`girdImage${index}`}
                key={index}
                onClick={() => props.handleOnClickImage(item)}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="modalDisplayImage absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] ">
        <img src={props.OnClickImage} alt="" width={"100%"} />
        {props.OnClickImage ? (
          <span
            className="absolute top-3 right-5 text-5xl"
            onClick={() => props.handleOnClickImage(null)}
          >
            x
          </span>
        ) : null}
      </div>
    </>
  );
});

export default Pages;
