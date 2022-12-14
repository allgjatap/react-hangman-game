const HEAD = (
  <div
    style={{
      height: "50px",
      width: "50px",
      borderRadius: "100%",
      position: "absolute",
      top: "50px",
      right: "-30px",
      border: "10px solid",
    }}
  />
);

const BODY = (
  <div
    style={{
      height: "100px",
      width: "10px",
      position: "absolute",
      top: "120px",
      right: 0,
      background: "black",
    }}
  />
);

const RIGHT_ARM = (
  <div
    style={{
      height: "10px",
      width: "100px",
      position: "absolute",
      top: "150px",
      right: "-100px",
      background: "black",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      height: "10px",
      width: "100px",
      position: "absolute",
      top: "150px",
      right: "10px",
      background: "black",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      height: "10px",
      width: "100px",
      position: "absolute",
      top: "210px",
      right: "-90px",
      background: "black",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      height: "10px",
      width: "100px",
      position: "absolute",
      top: "210px",
      right: 0,
      background: "black",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type HangmanDrwaingsProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({numberOfGuesses}: HangmanDrwaingsProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          height: "50px",
          width: "10px",
          background: "black",
          position: "absolute",
          top: 0,
          right: 0,
        }}
      />
      <div
        style={{
          height: "10px",
          width: "200px",
          background: "black",
          marginLeft: "123px",
        }}
      />
      <div
        style={{
          height: "320px",
          width: "10px",
          background: "black",
          marginLeft: "123px",
        }}
      />
      <div style={{ height: "10px", width: "250px", background: "black" }} />
    </div>
  );
}
