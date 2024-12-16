import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "../redux/slice/counterSlice";
import counterSlice from "./../redux/slice/counterSlice";
import { Button, Container, Stack } from "react-bootstrap";

const Counter = () => {
  const { count } = useSelector((store) => store.counterSlice);
  const dispatch = useDispatch();
  console.log(counterSlice);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100  ">
      <Container>
        <div className="d-flex gap-4 align-items-center justify-content-center">
          <Button
            onClick={() => dispatch(decrease())}
            className="btn btn-danger"
          >
            Azalt
          </Button>
          <span className="fs-1">{count}</span>
          <Button
            onClick={() => dispatch(increase())}
            className="btn btn-success"
          >
            Arttır
          </Button>
          <Button
            onClick={() => dispatch(reset())}
            className="btn btn-secondary"
          >
            Sıfırla
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Counter;
