import {useReducer} from "react"
import axios from "axios"

const reducer = (state, action) => {
    switch(action.type){

        case 'input-change-value':
            return {
                ...state,
                prompt: action.payload
            }
        case 'pending':
            return {
                ...state,
                loading: true
            }
        case 'complete':
            return {
                ...state,
                loading: false,
                response: action.payload
            }  
        case 'catch-error':
            return {
                ...state,
                error: true,
                loading: false
            }          

        default: 
            return state
    }
}

const useChat = (initialValue, isLoading) => {

    const [state, dispatch] = useReducer(reducer, {
        prompt: initialValue,
        response: initialValue,
        loading: isLoading,
        error: false

    })
    const {prompt, response, loading, error} = state

  


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'pending'})

        axios.post('http://localhost:3001/chat', {prompt})
            .then(response => {
                const {data} = response
                console.log(data);
                dispatch({type: 'complete', payload: data})
            })
            .catch(err => {
                dispatch({type: 'catch-error'})
                console.error(err);
            })
    
    }


    
    const handleInput = (e) => {
       
        dispatch({type: 'input-change-value', payload: e.target.value})
        
    }

   

    return {
        handleSubmit,
        handleInput,
        loading,
        prompt,
        response,
        error

    }
}


export default useChat