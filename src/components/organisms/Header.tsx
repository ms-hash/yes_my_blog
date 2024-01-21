import { FC, memo } from "react";
import { Box, Flex } from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
};

export const Header: FC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          mb={8}
          p={8}
          bg={["blue.900", "blue.900"]}
          color={["white", "white"]}
        >
          {children}
        </Flex>
      </Box>
    </>
  );
});
