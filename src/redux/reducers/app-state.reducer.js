// import { APPLY_SETTINGS, RESET_SETTINGS } from '../actions/types/action-types';
import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from '../../redux/actions/types/action-types.js'
// const initiaSettingState = {
//   wordsPerDay: DEFAULT_COUNT_ALL_WORDS,
//   newWordsPerDay: DEFAULT_COUNT_NEW_WORDS,
//   isAnswerBtnShow: true,
//   isDelFromLearnBtnShow: true,
//   isHardWordBtnShow: true,
//   isFeedBackButtonsShow: true,
//   isImageShow: true,
//   isAudioShow: true,
//   isAudioMeaningShow: true,
//   isAudioExampleShow: true,
//   isTextMeaningShow: true,
//   isTextExampleShow: true,
//   isTranscriptionShow: true,
//   isWordTranslateShow: true,
//   isTextExampleTranslateShow: true,
// };

// const settingReducer = (state = initiaSettingState, { type, payload }) => {
//   switch (type) {
//     case APPLY_SETTINGS:
//       return {
//         ...state,
//         ...payload,
//       };
//     case RESET_SETTINGS:
//       return {
//         ...initiaSettingState,
//       };
//     default:
//       return state;
//   }
// };

// export default settingReducer;


export default function rootReducer(state, action) {
  
  if (action.type === INCREMENT) {
    return state + 1;
  }
  else if (action.type === DECREMENT) {
    return state - 1;
  }
  else if (action.type === ASYNC_INCREMENT) {
    return state + 1;
  }
  
  return state;
}