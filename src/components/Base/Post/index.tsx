import { Box, Container } from "@mui/material";
import { FC } from "react";

interface ContainerProps extends React.PropsWithChildren {}
export const Post: FC<ContainerProps> = ({ children }) => {
  return (
    <Container className="">
      <Box className="bg-white rounded-lg p-6 my-10">
        {children}
      </Box>
    </Container>
  );
};
