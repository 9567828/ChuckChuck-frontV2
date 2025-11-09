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

export interface IEmpWorkTime {
  date?: string;
  name: string;
  position?: string;
  checkIn: string | null;
  checkOut: string | null;
  status: string;
  breakTime: string;
  overtime: string | null;
  workTime: string | null;
  etc: string | null;
}

export const tempEmpWorkTime: IEmpWorkTime[] = [
  {
    name: "김성은",
    position: "프론트엔드 개발자",
    checkIn: null,
    checkOut: null,
    status: "결근",
    breakTime: "1시간",
    overtime: null,
    workTime: null,
    etc: null,
  },
  {
    name: "이현정",
    position: "BX 디자이너",
    checkIn: "10:02",
    checkOut: "09:02",
    status: "지각",
    breakTime: "1시간",
    overtime: null,
    workTime: "00시간 00분",
    etc: null,
  },
  {
    name: "정우성",
    position: "인사 관리자",
    checkIn: null,
    checkOut: null,
    status: "휴가",
    breakTime: "1시간",
    overtime: null,
    workTime: null,
    etc: null,
  },
  {
    name: "김지호",
    position: "BX 디자이너",
    checkIn: "09:02",
    checkOut: "18:09",
    status: "정상",
    breakTime: "1시간",
    overtime: null,
    workTime: "09시간 00분",
    etc: null,
  },
  {
    name: "이신우",
    position: "퍼포먼스 마케터",
    checkIn: "08:24",
    checkOut: "22:24",
    status: "정상",
    breakTime: "1시간",
    overtime: "3시간 24분",
    workTime: "12시간 24분",
    etc: "24분",
  },
];
