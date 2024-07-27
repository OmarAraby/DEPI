import { useState } from "react";
function Calculator() {
  console.log("Calculator component rendered");
  const [Num, setNum] = useState(0);
  const setValue = (val) => {
    setNum(val);
  };

  return (
    <>
      <div className="calculator">
        <div class="display" id="display">
          <span>{Num}</span>
        </div>
        <div class="buttons">
          <button className="button" onClick={() => setValue(0)}>
            C
          </button>
          <button className="button" onClick={() => setValue(`(`)}>
            (
          </button>
          <button className="button" onClick={() => setValue(`)`)}>
            )
          </button>
          <button className="button operator" onClick={() => setValue(`÷`)}>
            ÷
          </button>
          <button className="button" onClick={() => setValue(7)}>
            7
          </button>
          <button className="button" onClick={() => setValue(8)}>
            8
          </button>
          <button className="button" onClick={() => setValue(9)}>
            9
          </button>
          <button className="button operator" onClick={() => setValue(`×`)}>
            ×
          </button>
          <button className="button" onClick={() => setValue(4)}>
            4
          </button>
          <button className="button" onClick={() => setValue(5)}>
            5
          </button>
          <button className="button" onClick={() => setValue(6)}>
            6
          </button>
          <button className="button operator" onClick={() => setValue(`-`)}>
            -
          </button>
          <button className="button" onClick={() => setValue(1)}>
            1
          </button>
          <button className="button" onClick={() => setValue(2)}>
            2
          </button>
          <button className="button" onClick={() => setValue(3)}>
            3
          </button>
          <button className="button operator" onClick={() => setValue(`+`)}>
            +
          </button>
          <button className="button" onClick={() => setValue(0)}>
            0
          </button>
          <button className="button" onClick={() => setValue(`.`)}>
            .
          </button>
          <button className="button operator" onClick={() => setValue(`%`)}>
            %
          </button>
          <button className="button operator" onClick={() => setValue(`=`)}>
            =
          </button>
        </div>
      </div>
    </>
  );
}
export default Calculator;
