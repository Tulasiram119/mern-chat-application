import { CloseIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/react";
import React from "react";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="lg"
      m={1}
      mb={2}
      bg="purple.500" // Set background color
      color="white" // Set text color
      fontSize={12}
      cursor="pointer"
      onClick={handleFunction}
      _hover={{ bg: "purple.600" }}
      _active={{ bg: "purple.700" }}
      position="relative"
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {user.username}
      {admin === user._id && <span> (Admin)</span>}
      <CloseIcon pl={1} />
    </Box>
  );
};

export default UserBadgeItem;
