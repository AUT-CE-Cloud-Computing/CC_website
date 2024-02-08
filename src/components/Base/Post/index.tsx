import { Box, Container } from "@mui/material";
import { FC } from "react";

interface ContainerProps extends React.PropsWithChildren {}
export const Post: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <Container>
        <Box className="bg-white rounded-lg p-6 mb-20 mt-32">{children}</Box>
      </Container>
    </div>
  );
};
