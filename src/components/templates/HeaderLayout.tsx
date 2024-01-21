import { FC, memo } from "react";
import { GridItem } from "@chakra-ui/react";
import { Header } from "../organisms/Header";
import { HeaderLogo } from "../atom/HeaderLogo";

export const HeaderLayout: FC = memo(() => {
  return (
    <GridItem area={"header"}>
      <Header>
        <HeaderLogo />
      </Header>
    </GridItem>
  );
});
