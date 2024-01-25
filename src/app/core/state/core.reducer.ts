export function reducer(state: any, action: any) {
    switch (action.type) {

      case 'USER_DATA': {
        return {
          ... state,
          userData : action.payload
        };
      }
      default:
        return state;
    }
  }
