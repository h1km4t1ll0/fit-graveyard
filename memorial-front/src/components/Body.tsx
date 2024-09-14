import {FC} from "react";
import StudentCard from "./shared/StudentCard";
import {observer} from "mobx-react-lite";

export type Student = {
  name: string,
  image: string,
  from: string,
  to: string,
  additionalText: string,
  supportCount: number,
  candlesCount: number,
  studentStatus: "BAD" | "ALIVE" | "UNKNOWN" | "DROPPED",
  id: number,
};

const Body: FC<{
  students: Student[],
  handleButtonClick: (type: 'heart' | 'candle', userId: number) => Promise<void>,
}> = ({students, handleButtonClick}) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      padding: '2rem',
      zIndex: 1,
    }}>
      {students.map((student, index) => (
        <StudentCard
          id={student.id}
          handleButtonClick={handleButtonClick}
          key={index}
          name={student.name.split(' ')}
          image={student.image}
          dates={{from: student.from, to: student.to}}
          studentStatus={student.studentStatus}
          candlesCount={student.candlesCount}
          supportCount={student.supportCount}
        />
      ))}
    </div>
  );
};

export default observer(Body);
