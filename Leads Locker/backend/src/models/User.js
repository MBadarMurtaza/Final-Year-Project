import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    // CHANGED: Password is only strictly required if it's NOT an OAuth/Social account
    required: function() {
      return !this.isOAuthUser; 
    },
    minlength: 6,
    select: false
  },
  // ADDED: A hidden virtual property to easily check if this is a social user
  isOAuthUser: {
    type: Boolean,
    default: false
  },
  company: {
    type: String,
    default: ''
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Automatically hash password before saving a new user
UserSchema.pre('save', async function() {
  // CHANGED: Added safety check. If there is no password string, do not run bcrypt!
  if (!this.password || !this.isModified('password')) return;
  
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// Helper method to compare incoming login passwords with hashed database passwords
UserSchema.methods.matchPassword = async function(enteredPassword) {
  // Safety guard in case a social user accidentally tries to use the traditional login path
  if (!this.password) return false; 
  return await bcrypt.compare(enteredPassword, this.password);
};

export default mongoose.model('User', UserSchema);