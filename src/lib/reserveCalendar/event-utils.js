import { EventInput } from '@fullcalendar/react'

let eventGuid = 0
const todayStr = new Date().toISOString().replace(/T.*$/, '') // 今日の日付をYYYY-MM-DD形式にする
export const createEventId = () => String(eventGuid++)
export const INITIAL_EVENTS = [
  // {
  //   id: createEventId(),
  //   title: 'All-day event',
  //   start: todayStr,
  // },
  // {
  //   id: createEventId(),
  //   title: 'Timed event',
  //   start: todayStr + 'T12:00:00', // 時刻はTで結ぶ
  // },
  {
    id: createEventId(),
    title: '虫歯',
    start: todayStr + 'T12:00:00',
  },
  {
    id: createEventId(),
    title: 'インプラント',
    start: '2023-06-22T14:00:00',
  },
]
