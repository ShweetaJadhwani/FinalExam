import React from 'react'
import { useReducer } from 'react'

const  HandleApp = () => {
    const [events, dispatch] = useReducer(
        (state, action) => { switch (action.type) {
            case "fetchAwards":
                state = [ ...state, action.data];
               return state;
  
              case "AwardsDescription":
                state = [ ...state, action.data];
               return state;
  
                case "AwardCards":
                    return state.filter((_, idx) => idx !== action.idx);

              default:
                  console.log(state);
                return state;
          }
        },
    [])
    }
export default HandleApp
