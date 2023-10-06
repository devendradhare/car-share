import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter/index";
import addJourneyDialogSlice from "./slices/addJourneydialog/index";
import notifications from "./slices/notifications/notification";
import mail from "./slices/mails/mail";
import search from "./slices/search/search";

export default configureStore({
  reducer: {
    counter: counterSlice,
    journeyDialog: addJourneyDialogSlice,
    notifications: notifications,
    mail: mail,
    search: search,
  }
});
    