'use client';

import { useState, useEffect } from 'react';

export const Time = () => {
  const [dateTime, setDateTime] = useState<string>(() =>
    new Intl.DateTimeFormat('id-ID', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(new Date())
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(
        new Intl.DateTimeFormat('id-ID', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
        }).format(new Date())
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xs">
      {dateTime}
    </div>
  );
};


export const Dates = () => {
    const [dateTime, setDateTime] = useState<string>(() =>
      new Intl.DateTimeFormat('id-ID', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(new Date())
    );
  
    useEffect(() => {
      const interval = setInterval(() => {
        setDateTime(
          new Intl.DateTimeFormat('id-ID', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(new Date())
        );
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="text-xs">
        {dateTime}
      </div>
    );
  };
  