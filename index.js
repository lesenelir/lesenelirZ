module.exports = {
  name: 'lesenelir',
  chineseName: '周彦',
  gender: 'male',
  birthday: new Date('1997/01/22'),
  email: 'hi@lesenelir.me',
  github: 'https://github.com/lesenelir',
  location: {
    country: 'China',
    hometown: 'Quzhou Zhejiang'
  },
  profile: {
    homepage: 'https://lesenelir.me',
    xlog: 'https://lesenelir.xlog.app/',
    mirror: 'https://mirror.xyz/lesenelir.eth'
  },
  introduce() {
    console.log('A soft boy ~')
  },
  goodbye() {
    console.log('Thanks for downloading my self-introduction package!')
  }
}
