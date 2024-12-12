export const state=()=>({   
    user: typeof window !== 'undefined' ? lJSON.parse(ocalStorage.getItem('token')) : null,
        returnUrl: null
  });