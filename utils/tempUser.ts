export interface IUser {
  empCode: string;
  name: string;
  email: string;
  password?: string;
  avatarURL: string;
  admin: boolean;
  phone: string;
  tel: string;
  joinDate: string;
  birthDate: string;
  startWorkTime: string;
  finishWorkTime: string;
  ogarnization: string;
  duty: string;
  level: string;
}

export const tempUser: IUser[] = [
  {
    empCode: "123",
    name: "홍길동",
    email: "123@naver.com",
    password: "qwer1234!",
    avatarURL: "/imgs/202301261737390.jpg",
    admin: false,
    phone: "010-1234-1234",
    tel: "02-123-1234",
    birthDate: "1999.01.01",
    joinDate: "2024.12.01",
    startWorkTime: "09:00:00",
    finishWorkTime: "18:00:00",
    ogarnization: "디자인팀",
    duty: "BX 디자이너",
    level: "팀원",
  },
  {
    empCode: "234",
    name: "관리자",
    email: "admin@naver.com",
    password: "qwer1234!",
    avatarURL: "",
    admin: true,
    phone: "010-1234-1234",
    tel: "02-123-1234",
    birthDate: "1999.01.01",
    joinDate: "2024.12.01",
    startWorkTime: "09:00:00",
    finishWorkTime: "18:00:00",
    ogarnization: "디자인팀",
    duty: "BX 디자이너",
    level: "팀원",
  },
];
