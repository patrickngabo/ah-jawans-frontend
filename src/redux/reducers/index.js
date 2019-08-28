import { combineReducers } from 'redux';
import signupReducer from './signup.reducer';
import loginReducer from './loginReducer';
import socialSignin from './socialLoginReducer';
import getUserReducer from './user/getUserReducer';
import editProfileReducer from './user/editProfileReducer';
import uploadImageReducer from './user/uploadImageReducer';
import getArticlesReducer from './getArticlesReducer';

const rootReducers = combineReducers({
  userCredentials: loginReducer,
  signupSuccess: signupReducer,
  getUser: getUserReducer,
  editProfile: editProfileReducer,
  uploadImage: uploadImageReducer,
  errors: loginReducer,
  socialSignin,
  articles: getArticlesReducer,
});

export default rootReducers;
