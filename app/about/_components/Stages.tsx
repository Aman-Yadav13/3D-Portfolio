import { Stage1 } from "./Stage1";
import { Stage2 } from "./Stage2";
import { Stage3 } from "./Stage3";
import { Stage4 } from "./Stage4";

export const Stages = ({
  currentStage,
  matches,
}: {
  currentStage: number | null;
  matches: boolean;
}) => {
  if (!currentStage) return null;

  return (
    <>
      {currentStage === 1 && (
        <Stage1 currentStage={currentStage} matches={matches} />
      )}
      {currentStage === 2 && (
        <Stage3 currentStage={currentStage} matches={matches} />
      )}
      {currentStage === 3 && (
        <Stage4 currentStage={currentStage} matches={matches} />
      )}
      {currentStage === 4 && (
        <Stage2 currentStage={currentStage} matches={matches} />
      )}
    </>
  );
};
