import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  initialTimeLeft?: TimeLeft; // Add optional initialTimeLeft prop
}

interface TimeLeft {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const Countdown: React.FC<CountdownProps> = ({
  targetDate,
  initialTimeLeft,
}) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft as TimeLeft; // Cast timeLeft as TimeLeft
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    initialTimeLeft || calculateTimeLeft()
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  return (
    <div className="gradientTitle mt-5 flex items-center justify-center space-x-2 text-3xl font-bold">
      <p className="min-w-[60px]">{`${timeLeft?.days}d : `}</p>
      <p className="min-w-[60px]">{`${addLeadingZero(
        timeLeft?.hours as number
      )}h :`}</p>
      <p className="min-w-[60px]">{`${addLeadingZero(
        timeLeft?.minutes as number
      )}m :`}</p>
      <p className="min-w-[60px]">{`${addLeadingZero(
        timeLeft?.seconds as number
      )}s`}</p>
    </div>
  );
};

export default Countdown;
