import React, { useState } from "react";
import { useChatContext } from "../context/ChatProvider";
import { Flex } from "@chakra-ui/react";
import SideDrawer from "../components/mischalenous/SideDrawer";
import MyChats from "../components/MyChats";
import ChatBox from "../components/ChatBox";

const Chats = () => {
  const { user } = useChatContext();
  const [fetchAgain, setFetchAgain] = useState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && (
          <>
            <MyChats fetchAgain={fetchAgain} />{" "}
            <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />{" "}
          </>
        )}
      </Flex>
    </div>
  );
};

export default Chats;
