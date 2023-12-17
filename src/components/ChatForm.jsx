import useChat from '../hooks/useChat'
import chatLogo from '../media/chatGPT.png'


const ChatForm = () => {

    const {
        handleSubmit, 
        handleInput, 
        loading, 
        prompt,
        error, 
        response

    } = useChat('', false)

    return (

        <>
    
            <form onSubmit={handleSubmit} className="chat-form">

                {error ? <img className="chat-logo" src={chatLogo} alt="chat-logo" /> : 
                <img className={loading  ? "chat-logo loading" : "chat-logo"} src={chatLogo} alt="chat-logo" />}

          

                <input onChange={handleInput} value={prompt} type="text" placeholder="Ask anything... :)" />

                <button type="submit">Ask question</button>

            </form>

            <OutPutArea error={error} loading={loading} response={response} />       
            
        </>
    )
}


const OutPutArea = ({loading, response, error}) => {

    return (
        <div className="output-area">

            {error ? <p className='response'>Something went wrong</p> : loading ? <p className='response'>Loading...</p> : response} 
         
        

        </div>
    )
}

export default ChatForm