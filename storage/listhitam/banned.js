const fs = require('fs')
let _banUser = JSON.parse(fs.readFileSync('./storage/listhitam/banUser.json'))
const addInventoriBan = (userid, reason) => {
  const obj = { id: userid, masalah: reason }
  _banUser.push(obj)
  fs.writeFileSync('./storage/listhitam/banUser.json', JSON.stringify(_banUser))
}

const cekBannedUser = (sender) => {
  let status = false
  Object.keys(_banUser).forEach((i) => {
    if (_banUser[i].id === sender) {
      status = true
    }
  })
  return status
}
const unBanned = (sender) => {
  let position = null
  Object.keys(_banUser).forEach((i) => {
    if (_banUser[i].id === sender) {
      position = i
    }
  })
  if (position !== null) {
    _banUser.splice(position, 1)
    fs.writeFileSync('./storage/listhitam/banUser.json', JSON.stringify(_banUser))
  }
  return true
}
const getbanned = (sender) => {
  let position = false
  Object.keys(_banUser).forEach((i) => {
    if (_banUser[i].id === sender) {
      position = i
    }
  })
  if (position !== false) {
    return _banUser[position].masalah
  }
}
module.exports = { addInventoriBan, cekBannedUser, unBanned, getbanned }