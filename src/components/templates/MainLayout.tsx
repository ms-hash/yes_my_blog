import { FC, memo, useEffect } from "react";
// import { Center, Spinner} from "@chakra-ui/react";
import { useAllBlogs } from "../../hooks/useAllBlogs";
// import { useAllArchitectures } from "../../../hooks/useAllArchitectures";
// import { useAllCategory } from "../../../hooks/useAllCategory";
// import { useSelectArchitecture } from "../../../hooks/useSelectArchitecture";
// import { Card } from "../../organisms/content/Card";
// import { CardDetail } from "../../molecules/content/CardDetail";
// import { NavList } from "../../organisms/content/NavList";
// import { NotFound } from "../../organisms/NotFound";

export const MainLayout: FC = memo(() => {
  // const { architectures, getArchitectures, loading } = useAllArchitectures();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const { onSelecter, selectedArchitecture } = useSelectArchitecture();
  // const { getCategories } = useAllCategory();
  const { getBlogs, blogs } = useAllBlogs();
  useEffect(() => {
    getBlogs();
  }, []);

  console.log(blogs);

  return (
    <>
      {/* {!loading && !architectures.length ? (
        <NotFound />
      ) : loading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <>
          <Card onClick={onClickArchitecture} />
          <CardDetail
            architecture={selectedArchitecture}
            isOpen={isOpen}
            onClose={onClose}
          />
        </>
      )}
      <NavList /> */}
    </>
  );
});
