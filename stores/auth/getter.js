

export const getter= {
  
 
    subordinatesRequests: (state) =>
    Object.values(state.subordinatesAndRequests).filter((s) => s.electronicsRequests?.length),

    newRequest: (state) =>
    Object.values(state.currentUserRequests).filter((s) => s?.requestTypeId === 1),
    // returnRequest: (state) =>
    // Object.values(state.currentUserRequests).filter((s) => s?.requestTypeId === 2),
    // replaceRequest: (state) =>
    // Object.values(state.currentUserRequests).filter((s) => s?.requestTypeId === 3),


};