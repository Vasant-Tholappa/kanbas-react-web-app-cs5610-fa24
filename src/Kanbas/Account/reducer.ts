// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   currentUser: null,
// };
// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {
//     setCurrentUser: (state, action) => {
//       state.currentUser = action.payload;
//     },
//   },
// });
// export const { setCurrentUser } = accountSlice.actions;
// export default accountSlice.reducer;


import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import enrollmentsData from "../Database/enrollments.json";

export interface User {
  _id: string;
  role: string;
}

export interface Enrollment {
  user: string;
  course: string;
}

interface AccountState {
  currentUser: User | null;
  enrollments: Enrollment[];
}

const initialState: AccountState = {
  currentUser: null,
  enrollments: [],
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;

      if (state.currentUser && state.currentUser.role === "STUDENT") {
        state.enrollments = enrollmentsData.filter(
          (enrollment: Enrollment) => enrollment.user === state.currentUser?._id
        );
      }
    },
    enroll: (state, action: PayloadAction<{ courseId: string }>) => {
      if (state.currentUser) {
        const enrollment: Enrollment = { user: state.currentUser._id, course: action.payload.courseId };
        state.enrollments.push(enrollment);
      }
    },
    unenroll: (state, action: PayloadAction<{ courseId: string }>) => {
      if (state.currentUser) {
        state.enrollments = state.enrollments.filter(
          (enrollment: Enrollment) =>
            !(enrollment.user === state.currentUser!._id && enrollment.course === action.payload.courseId)
        );
      }
    },
  },
});
export const { setCurrentUser, enroll, unenroll } = accountSlice.actions;
export default accountSlice.reducer;
