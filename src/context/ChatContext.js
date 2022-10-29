import { createContext, useState, useContext } from "react"

const ChatContext = createContext()

export const ChatProvider = ({ children }) => {

   const [messages, setMessages] = useState([
      { messages: "Hi" },
      { messages: "How are you?" }
   ])

   const values = {
      messages,
      setMessages
   }
   return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}

export const useChat = () => useContext(ChatContext)