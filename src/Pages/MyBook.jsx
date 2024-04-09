import HTMLFlipBook from "react-pageflip";
import Pages from "./Pages";
import { useState } from "react";

function MyBook() {
  const arrImage = [
    "https://th.bing.com/th/id/R.c1d90b8b4c0052e2dfe6074d1629dc3f?rik=4M06RAmqIj2p0Q&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIP.qwAjW3DyVFhtQgIqCZASwgHaFj?rs=1&pid=ImgDetMain",
    "https://picfiles.alphacoders.com/218/218404.jpg",
    "https://th.bing.com/th/id/OIP.tkEqkJGGe1tJN_MAIdbWIwHaE9?rs=1&pid=ImgDetMainhttps://th.bing.com/th/id/R.0c3b2acd0ff2ede7b94c62a5d2a122f9?rik=E2X2bueD1p4O4Q&pid=ImgRaw&r=0",
    "https://picfiles.alphacoders.com/278/thumb-1920-278097.jpg",
  ];
  const arrImage2 = [
    "https://th.bing.com/th/id/OIP.3l2nfzcHhMemSZooiH3B3AHaFj?rs=1&pid=ImgDetMain",
    "https://cdn.pixabay.com/photo/2014/11/03/11/06/hippo-515027_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/08/25/07/37/shoes-8212405_960_720.jpg",
    "https://cdn.pixabay.com/photo/2024/02/22/15/18/clouds-8590310_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/03/19/15/49/woman-8643502_1280.png",
  ];
  const arrImage3 = [
    "https://cdn.pixabay.com/photo/2021/04/07/17/01/woman-6159648_960_720.jpg",
    "https://cdn.pixabay.com/photo/2017/01/27/16/09/girl-2013447_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/05/04/15/24/woman-4178302_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/12/22/19/16/moon-8464248_960_720.jpg",
    "https://cdn.pixabay.com/photo/2023/06/05/17/19/shopping-8042865_1280.png",
  ];
  const [OnClickImage, setOnClickImage] = useState(null);
  const handleOnClickImage = (img) => {
    setOnClickImage(img);
  };
  return (
    <>
      <HTMLFlipBook
        width={400}
        height={500}
        maxWidth={400}
        drawShadow={true}
        maxShadowOpacity={1}
        showCover={true}
        disableFlipByClick={true}
      >
        <div className={`demoPage shadow-black shadow-lg bg-sky-400 `}>
          My Photos
        </div>

        <Pages
          number="1"
          image={arrImage}
          class={"Page1"}
          handleOnClickImage={handleOnClickImage}
          OnClickImage={OnClickImage}
        >
          Page 1
        </Pages>
        <Pages
          number="2"
          image={arrImage2}
          class={"Page2"}
          handleOnClickImage={handleOnClickImage}
          OnClickImage={OnClickImage}
        >
          Page 2
        </Pages>
        <Pages
          number="3"
          image={arrImage3}
          class={"Page3"}
          handleOnClickImage={handleOnClickImage}
          OnClickImage={OnClickImage}
        >
          Page 3
        </Pages>
        <Pages
          number="4"
          image={arrImage}
          class={"Page4"}
          handleOnClickImage={handleOnClickImage}
          OnClickImage={OnClickImage}
        >
          Page 4
        </Pages>
        <Pages
          number="5"
          image={arrImage}
          class={"Page5"}
          handleOnClickImage={handleOnClickImage}
          OnClickImage={OnClickImage}
        >
          Page 5
        </Pages>
        <Pages
          number="6"
          image={arrImage}
          class={"Page6"}
          handleOnClickImage={handleOnClickImage}
          OnClickImage={OnClickImage}
        >
          Page 6
        </Pages>
        <Pages
          number="7"
          image={arrImage}
          class={"Page7"}
          handleOnClickImage={handleOnClickImage}
          OnClickImage={OnClickImage}
        >
          Page 7
        </Pages>
        <Pages
          number="8"
          image={arrImage}
          class={"Page8"}
          handleOnClickImage={handleOnClickImage}
          OnClickImage={OnClickImage}
        >
          Page 8
        </Pages>
      </HTMLFlipBook>
      {/* {OnClickImage != null ? (
        <div className="absolute w-full h-full opacity-10 top-0 z-10"></div>
      ) : null} */}
    </>
  );
}

export default MyBook;
