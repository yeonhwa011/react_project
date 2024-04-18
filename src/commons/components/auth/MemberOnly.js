import React, {useContext } from "react";
import { Navigate } from "react-router-dom";
import UserInfoContext from "../../../member/modules/UserInfoContext";

const MeberOnly =({children})=>{
    const { states:{ isLogin}}= useContext(UserInfoContext);

    return isLogin ? children:<Navigate to="/member/login" replace={true} />;
};

export default React.memo(MeberOnly);