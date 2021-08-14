import {useEffect, useReducer} from "react";
import axios from 'axios'
import {parse} from "../utils/BaconParser";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
      return {
        ...state,
        isLoading: true,
        shouldGenerate: false
      }
    case 'SUCCESS':
      return {
        ...state,
        isLoading: false,
        fulfilled: true,
        shouldGenerate: false,
        data: action.payload,
      }
    case 'FAILURE':
      return {
        ...state,
        isLoading: false,
        isError: true,
        shouldGenerate: false,
      }
    case 'GENERATE':
      return {
        ...state,
        fulfilled: false,
        isError: false,
        shouldGenerate: true,
        params: {
          paras: action.payload.paragraph,
          lorem: action.payload.isLorem ? 1 : 0,
        }
      }
    default:
      return {...state}
  }
}

export const useGenerateBacon = () => {
  const [state, dispatch] = useReducer(reducer, {
    isLoading: false,
    isError: false,
    fulfilled: false,
    shouldGenerate: true,
    data: {text: [], chars: 0, words: 0, top3: []},
    params: {
      paras: 1,
      lorem: 0
    }
  })

  useEffect(() => {
    if (state.shouldGenerate) {
      (async () => {
        dispatch({type: 'INIT'});
        try {
          const response = await axios.get(`https://baconipsum.com/api/`, {
            params: {
              type: 'all-meat',
              paras: state.params.paras,
              'start-with-lorem': state.params.lorem,
            }
          });
          dispatch({type: 'SUCCESS', payload: parse(response.data)});
        } catch (e) {
          dispatch({type: 'FAILURE'});
        }
      })()
    }
  }, [state.shouldGenerate])

  return [{...state}, (paragraph, isLorem) => dispatch({type: 'GENERATE', payload: {paragraph, isLorem}})]
}
