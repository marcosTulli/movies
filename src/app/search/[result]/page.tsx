import React from "react";

export interface IParams {
    result: string;
}

export interface IResultParams {
    params: IParams;
}

const Result: React.FC<IResultParams> = ({ params }) => {
    return (
        <div>{`Movie ${params.result}`}</div>
    );
};

export default Result;