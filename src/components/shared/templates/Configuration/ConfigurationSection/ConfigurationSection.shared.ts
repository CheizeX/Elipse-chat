/* eslint-disable no-nested-ternary */

export const weekdaysForBusinessTimeObject = {
  Lunes: {
    id: 1,
    name: 'Lunes',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  Martes: {
    id: 2,
    name: 'Martes',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  Miercoles: {
    id: 3,
    name: 'Miércoles',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  Jueves: {
    id: 4,
    name: 'Jueves',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  Viernes: {
    id: 5,
    name: 'Viernes',
    isActive: true,
    secondTime: true,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '16',
      minute: '00',
    },
    reEnd: {
      hour: '20',
      minute: '00',
    },
  },
  Sábado: {
    id: 6,
    name: 'Sábado',
    isActive: true,
    secondTime: false,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '00',
      minute: '00',
    },
    reEnd: {
      hour: '00',
      minute: '00',
    },
  },
  Domingo: {
    id: 7,
    name: 'Domingo',
    isActive: false,
    secondTime: false,
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '12',
      minute: '00',
    },
    reStart: {
      hour: '00',
      minute: '00',
    },
    reEnd: {
      hour: '00',
      minute: '00',
    },
  },
};

// make a string with a date format of 2 june 1981

export const restrictinosFromTheBackend = [
  {
    id: 1,
    date: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '12',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: true,
  },
  {
    id: 2,
    date: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000),
    start: {
      hour: '14',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 3,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 4,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 5,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 6,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 7,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 8,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 9,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 10,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
  {
    id: 11,
    date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    start: {
      hour: '08',
      minute: '00',
    },
    end: {
      hour: '20',
      minute: '00',
    },
    isActive: false,
  },
];

export const setHour = (newTime: { hour: string; minute: string }) => ({
  hour:
    Number(newTime.hour) > 23
      ? '00'
      : Number(newTime.hour) < 0
      ? '23'
      : Number(newTime.hour) < 10 && newTime.hour.length === 1
      ? `0${newTime.hour}`
      : newTime.hour,
  minute: newTime.minute,
});

export const setMinute = (newTime: { hour: string; minute: string }) => ({
  minute:
    Number(newTime.minute) > 55
      ? '00'
      : Number(newTime.minute) < 0
      ? '55'
      : Number(newTime.minute) < 10 && newTime.minute.length === 1
      ? `0${newTime.minute}`
      : newTime.minute,
  hour: newTime.hour,
});
