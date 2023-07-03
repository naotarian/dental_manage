import AddchartIcon from '@mui/icons-material/Addchart'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import ApartmentIcon from '@mui/icons-material/Apartment'
import BuildIcon from '@mui/icons-material/Build'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import EventSeatIcon from '@mui/icons-material/EventSeat'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import ManageSearchIcon from '@mui/icons-material/ManageSearch'
import MapIcon from '@mui/icons-material/Map'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import SettingsIcon from '@mui/icons-material/Settings'
import VaccinesIcon from '@mui/icons-material/Vaccines'
import WebAssetIcon from '@mui/icons-material/WebAsset'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
export const config = {
  sidebarMenu: [
    {
      name: '管理画面TOP',
      sub: [],
      path: '/',
      icon: <AdminPanelSettingsIcon />,
    },
    {
      name: '基本設定',
      icon: <SettingsIcon />,
      sub: [
        { name: '基本情報', path: '/basic_information', icon: <BuildIcon /> },
        { name: 'アクセス', path: '/access', icon: <MapIcon /> },
        {
          name: '診療内容設定',
          path: '/medical_treatment',
          icon: <VaccinesIcon />,
        },
      ],
    },
    {
      name: 'ポータルサイト',
      sub: [],
      path: '/portal',
      icon: <WebAssetIcon />,
    },
    {
      name: '検索設定',
      sub: [],
      icon: <ManageSearchIcon />,
      path: '/search',
    },
    {
      name: 'スタッフ管理',
      icon: <PeopleOutlineIcon />,
      sub: [
        { name: 'スタッフ登録', path: '/staffs', icon: <PersonAddAltIcon /> },
        { name: 'シフト登録', path: '/shifts', icon: <WorkHistoryIcon /> },
      ],
    },
    {
      name: '予約管理',
      icon: <ContactPageIcon />,
      sub: [
        {
          name: '予約一覧',
          path: '/reserve/list',
          icon: <FormatListBulletedIcon />,
        },
        {
          name: '予約状況',
          path: '/reserve/calendar',
          icon: <CalendarMonthIcon />,
        },
      ],
    },
    {
      name: '施設管理',
      sub: [{ name: 'ユニット管理', path: '/units', icon: <EventSeatIcon /> }],
      icon: <ApartmentIcon />,
    },
    {
      name: '患者様情報管理',
      sub: [],
      path: '/patients',
      icon: <AddchartIcon />,
    },
  ],
}
