import { createContext, useContext, useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const chatContext = createContext();

const ChatProvider = ({children}) => {
    const [user, setUser] = useState();
    const [selectedChat, setSelectedChat] = useState();
    const [chats, setChats] = useState([]);

    // const history = useHistory();
    const navigate = useNavigate();

    // useEffect(() => {
    //   const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    //   setUser(userInfo);

    //   if (!userInfo) history.push("/");
    // }, [history]);

    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setUser(userInfo);

      if (!userInfo) navigate("/");
    }, [navigate]);
    

    return (
      <chatContext.Provider
        value={{
          user,
          setUser,
          selectedChat,
          setSelectedChat,
          chats,
          setChats,
         }}
      >
        {children}
      </chatContext.Provider>
    );
};

export const ChatState = () => {
    return useContext(chatContext);
}

export default ChatProvider;