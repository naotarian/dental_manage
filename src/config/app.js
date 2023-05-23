import SettingsIcon from '@mui/icons-material/Settings'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings'
import MapIcon from '@mui/icons-material/Map'
import WebAssetIcon from '@mui/icons-material/WebAsset'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'
import WorkHistoryIcon from '@mui/icons-material/WorkHistory'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
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
        { name: '基本情報', path: '/basic_information' },
        { name: 'アクセス', path: '/access', icon: <MapIcon /> },
      ],
    },
    {
      name: 'ポータルサイト',
      sub: [],
      path: '/portal',
      icon: <WebAssetIcon />,
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
          path: '/reserves',
          icon: <FormatListBulletedIcon />,
        },
        { name: '予約状況', path: '/reserve_state' },
      ],
    },
    {
      name: '施設管理',
      sub: [{ name: 'ユニット管理', path: '/units' }],
    },
  ],
}
