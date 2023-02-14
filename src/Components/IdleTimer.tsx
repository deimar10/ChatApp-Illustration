import { useCallback, useEffect, useState } from 'react';

function IdleTimer ({ timeout, onTimeout, setActive }: any) {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const resetTimer = useCallback(() => {
    clearTimeout(timerId!);
    setTimerId(setTimeout(onTimeout, timeout));
  }, [onTimeout, timeout]);

  useEffect(() => {
    resetTimer();

    function handleActivity() {
      setActive(false);
        resetTimer()
    }

    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);
    document.addEventListener('click', handleActivity);

    return () => {
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keydown', handleActivity);
      document.removeEventListener('click', handleActivity);
      clearTimeout(timerId!);
    };
  }, [resetTimer]);

  return null;
}

export default IdleTimer;
