import Blank from "./components/Blank";
import Green from "./components/Green";
import Yellow from "./components/Yellow";

function SWDRANA() {
  const S = [
    [1, 1, 1, 1, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],

    [1, 1, 1, 1, 0],

    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [1, 1, 1, 1, 0],
  ];
  const W = [
    [1, 0, 0, 1, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0, 0, 1, 0],
    [1, 0, 0, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 5, 1, 0, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 1, 1, 0, 0],
  ];
  const D = [
    [1, 1, 1, 1, 1, 1, 0, 0],
    [1, 5, 0, 0, 0, 1, 1, 0],
    [1, 5, 0, 0, 0, 0, 1, 0],
    [1, 5, 0, 0, 0, 0, 1, 0],
    [1, 5, 0, 0, 0, 0, 1, 0],
    [1, 5, 0, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0, 0],
  ];

  const R = [
    [1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 0, 0],
    [1, 0, 0, 1, 0, 0],
    [1, 0, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0],
  ];
  const A = [
    [0, 0, 1, 1, 0, 0, 0],
    [0, 5, 1, 1, 5, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [5, 1, 1, 1, 1, 5, 0],
    [1, 5, 0, 0, 5, 1, 0],
    [1, 0, 0, 0, 0, 1, 0],
  ];
  const N = [
    [1, 0, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0],
    [1, 0, 0, 1, 1, 0],
    [1, 0, 0, 1, 1, 0],
  ];
  const finalArray = [S, W, D, R, A, N, A];
  return (
    <div className=" flex justify-center items-center">
      {finalArray.map((l, i) => {
        return (
          <div className="flex flex-col" key={i}>
            {l.map((col, indexC) => {
              return (
                <div className="" key={indexC}>
                  {
                    <div className=" flex" key={indexC}>
                      {col.map((d, intexD) => {
                        if (d === 0) {
                          return <Blank key={indexC + intexD}></Blank>;
                        } else if (d === 1) {
                          return <Green key={indexC + intexD} />;
                        } else {
                          return <Yellow key={indexC + intexD} />;
                        }
                      })}
                    </div>
                  }
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default SWDRANA;
