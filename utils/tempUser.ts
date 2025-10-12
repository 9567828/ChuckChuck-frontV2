export interface IUser {
  empCode: string;
  name: string;
  email: string;
  password?: string;
  avatarURL: string;
  admin: boolean;
  joinDate: string;
  startWorkTime: string;
  finishWorkTime: string;
}

export const tempUser: IUser[] = [
  {
    empCode: "123",
    name: "홍길동",
    email: "123@naver.com",
    password: "qwer1234!",
    avatarURL: "/imgs/202301261737390.jpg",
    admin: false,
    joinDate: "2024.12.01",
    startWorkTime: "09:00:00",
    finishWorkTime: "18:00:00",
  },
  {
    empCode: "234",
    name: "관리자",
    email: "admin@naver.com",
    password: "qwer1234!",
    avatarURL: "",
    admin: true,
    joinDate: "2024.12.01",
    startWorkTime: "09:00:00",
    finishWorkTime: "18:00:00",
  },
];
