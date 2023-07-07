import React from 'react';
import { Navigate } from "react-router-dom";

function ProtectedRoute ({ element, ...props  }) {
  return props.loggedIn ? ( element ) : ( <Navigate to="/" replace/> )
};

export default ProtectedRoute;