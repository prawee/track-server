const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

// salting
// don't use () => instead function() because use a keyword can be using 'this'
userSchema.pre('save', function() {
  const user = this
  if (!user.isModified('password')) {
    return next()
  }

  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err)
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err)
      }

      user.password = hash
      next()
    })
  })
})

// hashing
userSchema.methods.comparePassword = function(canidatePassword) {
  const user = this
  return new Promise((resolve, reject) => {
    bcrypt.compare(canidatePassword, user.password, (err, isMatch) => {
      if (err) {
        return reject(err)
      }

      if (!isMatch) {
        return reject(false)
      }

      resolve(true)
    })
  })
}

mongoose.model('User', userSchema)
