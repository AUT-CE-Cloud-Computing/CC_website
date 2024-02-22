import { FC, PropsWithChildren } from "react";
import { Presentation } from "../../../types/types";
import { PresentCard } from "../PresentCart";
import { Loader } from "../../Base/Loader";

interface PresentationsProps extends PropsWithChildren {
  presentations: Presentation[];
  loading: boolean;
  error: Error | null;
}

export const PresentationsView: FC<PresentationsProps> = ({
  presentations,
  loading,
  error,
}) => {
  if (loading) return <Loader />;
  if (error) return <div>Error: {error!.message}</div>;
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {presentations.map((presentation: Presentation) => (
          <PresentCard key={presentation.id} presentation={presentation} />
        ))}
      </div>
    </div>
  );
};
