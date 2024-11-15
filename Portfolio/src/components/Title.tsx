import { useEffect, useState } from "react";

const TypeAnimation = ({ title, typeAnimation, classAtribute, animationDelay = 120 }: { title: string; typeAnimation?: boolean, classAtribute?: string, animationDelay?: number }) => {
  const [text, setText] = useState('|');
  const [textArray, setTextArray] = useState(title);

  useEffect(() => {
    let i = 0;
    let timer: NodeJS.Timeout;

    if (typeAnimation) {
      timer = setInterval(() => {
        setText(textArray.slice(0, i + 1) + '|');
        i++;

        if (i === textArray.length) {
          setText(textArray.slice(0, i + 1));
          clearInterval(timer);
        }
      }, animationDelay);
    } else {
      setText(title);
    }

  }, [title, textArray, typeAnimation]);

  return (
    <h1 className={` ${classAtribute} text-2xl text-caribbean-current dark:text-caribbean-current-dark pt-6 pb-5 font-bold xl:text-3xl xl:pt-8 xl:pb-10 2xl:text-4xl 2xl:pt-10 2xl:pb-12 `}>
      {text}
    </h1>
  );
};

export default TypeAnimation;
