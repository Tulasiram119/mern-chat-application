import { Avatar, Box, Text } from "@chakra-ui/react";
import React from "react";

const UserListItem = ({ user, handleFunction }) => {
  return (
    <Box
      onClick={handleFunction}
      bg={"#E8E8E8"}
      cursor={"pointer"}
      _hover={{ background: "#38B2AC", color: "white" }}
      w="100%"
      display={"flex"}
      alignItems={"center"}
      color={"black"}
      px={3}
      py={2}
      borderRadius={"lg"}
      mb={"2"}
    >
      <Avatar
        mr={2}
        size={"sm"}
        cursor={"pointer"}
        name={user.username}
        src={user.pic}
      />
      <Box>
        <Text>{user.username}</Text>
        <Text fontSize={"xs"}>
          <b>Email: {user.email}</b>
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
