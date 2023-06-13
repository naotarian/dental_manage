exports.getPrefCode = function (zipcode) {
  var pref
  switch (true) {
    case /^0(0|[4-9])/.test(zipcode):
      pref = '1' // 北海道
      break
    case /^01/.test(zipcode):
      pref = '5' // 秋田県
      break
    case /^02/.test(zipcode):
      pref = '3' // 岩手県
      break
    case /^03/.test(zipcode):
      pref = '2' // 青森県
      break
    case /^1/.test(zipcode):
    case /^20/.test(zipcode):
      pref = '13' // 東京都
      break
    case /^2[1-5]/.test(zipcode):
      pref = '14' // 神奈川県
      break
    case /^2[6-9]/.test(zipcode):
      pref = '12' // 千葉県
      break
    case /^3[0-1]/.test(zipcode):
      pref = '8' // 茨城県
      break
    case /^32/.test(zipcode):
      pref = '9' // 栃木県
      break
    case /^3[3-6]/.test(zipcode):
      pref = '11' // 埼玉県
      break
    case /^37/.test(zipcode):
      pref = '10' // 群馬県
      break
    case /^3[8-9]/.test(zipcode):
      pref = '20' // 長野県
      break
    case /^40/.test(zipcode):
      pref = '19' // 山梨県
      break
    case /^4[1-3]/.test(zipcode):
      pref = '22' // 静岡県
      break
    case /^4[4-9]/.test(zipcode):
      pref = '23' // 愛知県
      break
    case /^50/.test(zipcode):
      pref = '21' // 岐阜県
      break
    case /^51/.test(zipcode):
      pref = '24' // 三重県
      break
    case /^52/.test(zipcode):
      pref = '25' // 滋賀県
      break
    case /^5[3-9]/.test(zipcode):
      pref = '27' // 大阪府
      break
    case /^6[0-2]/.test(zipcode):
      pref = '26' // 京都府
      break
    case /^63/.test(zipcode):
      pref = '29' // 奈良県
      break
    case /^64/.test(zipcode):
      pref = '30' // 和歌山県
      break
    case /^6[5-7]/.test(zipcode):
      pref = '28' // 兵庫県
      break
    case /^68/.test(zipcode):
      pref = '31' // 鳥取県
      break
    case /^69/.test(zipcode):
      pref = '32' // 島根県
      break
    case /^7[0-1]/.test(zipcode):
      pref = '33' // 岡山県
      break
    case /^7[2-3]/.test(zipcode):
      pref = '34' // 広島県
      break
    case /^7[4-5]/.test(zipcode):
      pref = '35' // 山口県
      break
    case /^76/.test(zipcode):
      pref = '37' // 香川県
      break
    case /^77/.test(zipcode):
      pref = '36' // 徳島県
      break
    case /^78/.test(zipcode):
      pref = '39' // 高知県
      break
    case /^79/.test(zipcode):
      pref = '38' // 愛媛県
      break
    case /^8[0-3]/.test(zipcode):
      pref = '40' // 福岡県
      break
    case /^84/.test(zipcode):
      pref = '41' // 佐賀県
      break
    case /^85/.test(zipcode):
      pref = '42' // 長崎県
      break
    case /^86/.test(zipcode):
      pref = '43' // 熊本県
      break
    case /^87/.test(zipcode):
      pref = '44' // 大分県
      break
    case /^88/.test(zipcode):
      pref = '45' // 宮崎県
      break
    case /^89/.test(zipcode):
      pref = '46' // 鹿児島県
      break
    case /^90/.test(zipcode):
      pref = '47' // 沖縄県
      break
    case /^91/.test(zipcode):
      pref = '18' // 福井県
      break
    case /^92/.test(zipcode):
      pref = '17' // 石川県
      break
    case /^93/.test(zipcode):
      pref = '16' // 富山県
      break
    case /^9[4-5]/.test(zipcode):
      pref = '15' // 新潟県
      break
    case /^9[6-7]/.test(zipcode):
      pref = '7' // 福島県
      break
    case /^98/.test(zipcode):
      pref = '4' // 宮城県
      break
    case /^99/.test(zipcode):
      pref = '6' // 山形県
      break
    default:
      pref = 'unknown'
  }
  return pref
}
