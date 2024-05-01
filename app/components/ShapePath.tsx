"use client";

import { ComponentProps, useEffect, useMemo, useState } from "react";
function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
function getRandom(num: number, max: number) {
  // const base = [0, 0, 100, 0, 100, 100, 0, 100];
  let newPath;
  // for (let i = 0; i < base.length; i++) {
  let rand = getRandomInt(max);
  if (num > 0) {
    newPath = `${num - rand}%`;
  } else {
    newPath = `${num + rand}%`;

    return newPath;
  }
  // }
  return newPath;
}

function getPath(numArray: number[], max: number) {
  const converted = numArray
    .map((x) => getRandom(x, max))
    .flatMap((_, i, a) => {
      return i % 2 ? [] : a.slice(i, i + 2).join(" ");
    });
  return converted;
}

const ShapePath = ({
  children,
  max = 8,
  className,
  ...props
}: { max?: number } & ComponentProps<"div">) => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const polygon = useMemo(
    () => getPath([0, 0, 100, 0, 100, 100, 0, 100], max),
    [max]
  );

  if (!hasMounted) return null;
  return (
    <div
      className={`${className} bg-[#f9c510]`}
      style={{
        clipPath: `polygon(${polygon})`,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ShapePath;
